import React, { Component } from 'react';

import SearchBar from './SearchBar';
import DisplayResults from './DisplayResults';

class Main extends Component {
    state = {
        searchTerm: '',
    }

    setSearchTerm = searchTerm => {
        this.setState({
            searchTerm: searchTerm
        });

    }

    render() {
        return (
            <main>
                <SearchBar setSearchTerm={this.setSearchTerm} />
                <DisplayResults />
            </main>
        );
    }
}

export default Main; 