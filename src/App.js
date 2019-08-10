import React from 'react';
import CatGif from './component/CatGif';
import './App.css';
const axios = require('axios');


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			gifs : []
		}
		this.fetchData = this.fetchData.bind(this)
	}
  
	componentDidMount(){
		this.fetchData()
	}
	fetchData(){
		// console.log('button working')

		const setData = (gifs) => this.setState({ gifs });

		// Make a request for a user with a given ID
		axios.get('https://api.giphy.com/v1/gifs/search', {
			params: {
				api_key: 'm2FFtrSUnoPO1WYbu3TbXzuZFTpFAA4S',
				q: 'cat',
				limit: 10
			}
		})

		// axios.get('https://api.giphy.com/v1/gifs/random', {
		// 	params: {
		// 		api_key: 'm2FFtrSUnoPO1WYbu3TbXzuZFTpFAA4S',
		// 		tag: 'burrito'
		// 		// limit: 10
		// 	}
		// })
		
		.then(function (response) {
			// handle success
			// console.log(response.data.data);
			if(response && response.data && response.data.data && response.data.data.length > 0 ){
				setData(response.data.data);
			}
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		console.log('1564')
	}
	render() { 
		// console.log("inrender:", this.state.gifs);
		return (
				<div>
					<CatGif data = {this.state.gifs} fetchData = {this.fetchData} />
				</div>
			);
	}
}

export default App;