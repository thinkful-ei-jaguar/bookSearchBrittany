import React, { Component } from 'react';

import DisplayBook from './DisplayBook';

class DisplayResults extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map(book => {
                    return <DisplayBook />
                })}
            </ul>
        );
    }
}

export default DisplayResults; 