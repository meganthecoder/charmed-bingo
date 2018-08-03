import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false
        };

        this.placeMarker = this.placeMarker.bind(this);
        this.renderOpen = this.renderOpen.bind(this);
        this.renderMarked = this.renderMarked.bind(this);
    }

    placeMarker() {
        // ToDo: Run a validation check

        this.setState({
           marked: true
        });
    }

    renderOpen() {
        return(
            <button onClick={this.placeMarker} className="tile">
                {this.props.children}
            </button>
        );
    }

    renderMarked() {
        return(
            <button className="tile marked">
                {this.props.children}
            </button>
        );
    }

    render() {
        return !this.state.marked ? this.renderOpen() : this.renderMarked();
    }
}

export default Tile;