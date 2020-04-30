import React, { Component } from 'react'
import Users from './containers/Users/Users'
import Repos from './containers/Repos/Repos'
import { Switch, Route } from 'react-router-dom'
import SingleRepo from './components/SingleRepo/SingleRepo'
import ParallaxEffect from './components/ParallaxEffect/ParallaxEffect'
import Spinner from './components/Spinner/Spinner'
import Error from './components/Error/Error'
import Search from './components/Search/Search'

class App extends Component {
	state = {
		users: [],
		repos: [],
		singleRepo: [],
		stargazers: [],
		license: '',
		loading: false,
		error: false,
		errorMessage: '',
		filter: ''
	}

	componentDidMount() {
		this.handleUsersApiCall('https://api.github.com/users')
	}

	handleUsersApiCall = apiUrl => {
		this.setState({ loading: true })
		fetch(apiUrl, {
			'headers': {
				'Authorization': `token ${'0e77e3b50c0be4741917da1c8cc9bdc9495f5d6a'}`
			}
		})
			.then(res => res.json())
			.then((data) => {
				this.setState({ users: data, loading: false })
			})
			.catch(error => console.log(error))
	}

	handleRepoApiCall = apiUrl => {
		this.setState({ loading: true })
		fetch(apiUrl, {
			'headers': {
				'Authorization': `token ${'0e77e3b50c0be4741917da1c8cc9bdc9495f5d6a'}`
			}
		})
			.then(res => res.json())
			.then((data) => {
				this.setState({ repos: data, loading: false });
			})
			.catch(error => {
				console.log(error)
				this.setState({
					error: true,
					errorMessage: error
				})
			})
	}

	handleSingleRepoApiCall = apiUrl => {
		this.setState({ loading: true })
		fetch(apiUrl, {
			'headers': {
				'Authorization': `token ${'0e77e3b50c0be4741917da1c8cc9bdc9495f5d6a'}`
			}
		})
			.then(res => res.json())
			.then((data) => {
				this.setState({ singleRepo: data, loading: false });
				if (data.license === null) {
					this.setState({ license: 'No Licene' });
				} else {
					this.setState({ license: data.license.name });
				}
			})
			.catch(error => console.log(error))
	}

	handleStargazersApiCall = apiUrl => {
		fetch(apiUrl, {
			'headers': {
				'Authorization': `token ${'0e77e3b50c0be4741917da1c8cc9bdc9495f5d6a'}`
			}
		})
			.then(res => res.json())
			.then((data) => {
				this.setState({ stargazers: data });
			})
			.catch(error => console.log(error))
	}

	handlePageLoad = (filteredData) => {
		if (this.state.error === true) {
			return <Error error={this.state.errorMessage} />
		} else if (this.state.loading === false) {
			return <Switch>
				<Route path='/' exact component={(props) =>
					<Users
						{...props}
						handleApiCall={this.handleRepoApiCall}
						users={filteredData}
					/>
				}
				/>
				<Route path={`/repo`} component={(props) =>
					<Repos
						{...props}
						handleApiCall={this.handleSingleRepoApiCall}
						handleStargazersApiCall={this.handleStargazersApiCall}
						repos={this.state.repos}
					/>}
				/>
				<Route path={`/single`} component={(props) =>
					<SingleRepo
						{...props}
						watchers={this.state.singleRepo.watchers}
						forks={this.state.singleRepo.forks}
						license={this.state.license}
						stargazers={this.state.stargazers}
					/>}
				/>
			</Switch>
		} else {
			return <Spinner />
		}
	}

	searchUsers = e => {
		this.setState({ filter: e.target.value });
	}

	render() {
		const { filter, users } = this.state;
		const lowercasedFilter = filter.toLowerCase();
		const filteredData = users.filter(item => {
			return Object.keys(item).some(key =>
				typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
			);
		});
		return (
			<div className="App">
				<ParallaxEffect />
				<Search searchUsers={this.searchUsers} />
				{this.handlePageLoad(filteredData)}
			</div>
		);
	}
}

export default App;
