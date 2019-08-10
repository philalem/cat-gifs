import React from 'react';

class CatGif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
		console.log("inrender:", this.props.data);

        return (
            <div>
                { this.props.data.map((item, index) => (
                    // <p>{item.images.preview_gif.url}</p>
                    <img key={index} src={item.images.preview_gif.url} alt="" />
                ))}
            </div>
        );
    }
}
 
export default CatGif;