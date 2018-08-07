import React, { Component } from 'react';
import Column from './Column.js';

class BingoCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: ['w', 'i', 't', 'c', 'h']
        };
        this.eachColumn = this.eachColumn.bind(this);
    }

    eachColumn(column, i) {
        return(
            <Column key={i}>
                {column}
            </Column>
        );
    }

    render() {
        return (
            <div className="bingo-card">
                {this.state.columns.map(this.eachColumn)}
            </div>
        );
    }
}

export default BingoCard;
