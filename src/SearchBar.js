import React, { Component } from 'react';


class SearchBar extends Component {
    state = {
        value: ''
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        // make api request 
        this.props.setSearchTerm(this.state.value);
    }

    render() {
        return (
            <form onSubmit={() => this.props.handleSubmit(this.state.value)}>
                <label for="search-term">Search:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit" value="search">Search</button>
            </form>
        );
    }
}

export default SearchBar; 