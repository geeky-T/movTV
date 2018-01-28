import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../css/Root.css'
import SearchResult from './SearchResult';
import api_key from '../ApiKey'
const Search = Input.Search;


class Root extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchedQuery: null,
      queryResult: null,
      searched: false
    }
  }
  
  render() {
    return (
      <div>
      {
        this.state.searched ? 
        <SearchResult searchedQuery={this.state.searchedQuery}/>
        :
        <Search
          className="searchBox"
          placeholder="Search Movie"
          onSearch={value => this.setState({searchedQuery:value,searched:true})}
          enterButton
        />
      }
      </div>
    );
  }
}

export default Root;
