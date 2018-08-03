import React, { Component } from 'react';
import Tile from './Tile.js';

class BingoCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: [
                {
                    id: 1,
                    name: "Windigo"
                },
                {
                    id: 2,
                    name: "Gremlin"
                }
            ]
        };
        this.eachTile = this.eachTile.bind(this);
    }

    eachTile(tile) {
        return(
            <Tile>
                {tile.name}
            </Tile>
        );
    }

    render() {
        return (
            <div className="BingoCard">
                {this.state.tiles.map(this.eachTile)}
            </div>
        );
    }
}

export default BingoCard;
