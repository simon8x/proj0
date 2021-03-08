import React, { Component } from 'react';

class Slider extends Component{

    render() {
        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                {this.props.btntxt &&
                    <a href="#" class="btn-white">{this.props.btntxt}</a>
                }
            </div>

        );
    }

}

export default Slider