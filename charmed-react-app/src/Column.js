import React, { Component } from 'react';
import Tile from './Tile.js';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [
                {
                    id: 1,
                    name: "Windigo",
                    column: 'w'
                },
                {
                    id: 2,
                    name: "Gremlin",
                    column: 'w'
                },
                {
                    id: 3,
                    name: "Abraxis",
                    column: 'i'
                },
                {
                    id: 4,
                    name: "The Woogyman"
                },
                {
                    id: 5,
                    name: "Barbas"
                },
            ]

        };
        this.eachTile = this.eachTile.bind(this);
        this.getDemons = this.getDemons.bind(this);
    }

    componentWillMount() {

    }

    getDemons() {
        
    }

    eachTile(tile, i) {
        return(
            <Tile key={i}>
                {tile.name}
            </Tile>
        );
    }

    render() {
        return (
            <div className={`column letter-${this.props.children}`}>
                <div className="tile-title">{this.props.children}</div>
                {this.state.tiles.map(this.eachTile)}
            </div>
        );
    }
}

export default Column;