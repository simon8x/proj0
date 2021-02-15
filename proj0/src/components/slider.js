import React, { Component } from 'react';

class Slider extends Component{

    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.title}</h1>
                <a href="#" class="btn-white">{this.props.btntxt}</a>
            </div>

        );
    }

}

export default Slider