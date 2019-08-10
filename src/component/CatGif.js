import React from 'react';
import '../styles/cat-gif.scss';


class CatGif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
		console.log("inrender:", this.props.data);

        return (
            <div className="container">
                <div className="gif-grid">
                    { this.props.data.map((item, index) => (
                        <div className="gif-container">
                            {/* <p>{item.images.preview_gif.url}</p> */}
                            <img key={index} src={item.images.preview_webp.url} alt="" />
                        </div>
                    ))}
                </div>
                
                <div className="btn-wrapper">
                    <button>More GIFS</button>
                </div>
            </div>
        );
    }
}
 
export default CatGif;