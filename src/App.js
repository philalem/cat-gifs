import React from "react";
import CatGif from "./component/CatGif";
import { randomize } from "./util/helper";
import "./App.css";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      // loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log("button working");
    console.log("loading");

    const setData = (gifs) => this.setState({ gifs });
    setData([]);

    const randomNumber = randomize(16, 1000);

    console.log("randomNumber", randomNumber);

    // Make a request for a user with a given ID
    axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "m2FFtrSUnoPO1WYbu3TbXzuZFTpFAA4S",
          q: "cat",
          limit: 10,
          // offset: 85,
          offset: randomNumber,
        },
      })

      // axios.get('https://api.giphy.com/v1/gifs/random', {
      // 	params: {
      // 		api_key: '8T0Phxbr1meqMCol49pilsOxvvVyW78N',
      // 		tag: 'burrito',
      // 		rating: 'g',
      // 		// random_id: 'e826c9fc5c929e0d6c6d423841a282aa'
      // 	}
      // })

      .then(function (response) {
        // handle success
        console.log(response.data.data);
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          setData(response.data.data);
        }
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
    // console.log('1564')
  }
  render() {
    console.log("inrender:", this.state.gifs);
    return (
      <div>
        {/* <CatGif data = {this.state.gifs} fetchData = {this.fetchData} /> */}
        {this.state.gifs && this.state.gifs.length > 0 ? (
          <CatGif data={this.state.gifs} fetchData={this.fetchData} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default App;
