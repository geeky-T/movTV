import React, { Component } from 'react';
import { Input,Card,Rate,Popover } from 'antd';
import 'antd/dist/antd.css';
import api_key from '../ApiKey'
import '../css/MoviePage.css'
const Search = Input.Search;
const { Meta } = Card;

class MoviePage extends Component {
  constructor(props){
    super(props);
    console.log('props',this.props);
  }
  render() {
    return (
      <div className="searchMoviePageBox">
        <Search
          defaultValue={this.props.searchedQuery}
          onSearch={value => this.searchQuery(value)}
          enterButton
        />
      </div>
    );
  }
}

export default MoviePage;
