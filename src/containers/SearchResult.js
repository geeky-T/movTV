import React, { Component } from 'react';
import { Input,Card,Rate,Popover } from 'antd';
import 'antd/dist/antd.css';
import api_key from '../ApiKey'
import '../css/SearchResult.css'
import MoviePage from './MoviePage';
import {BrowserRouter ,Route,Link} from 'react-router-dom'
const Search = Input.Search;
const { Meta } = Card;

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.searchQuery(this.props.searchedQuery);
    this.state = {
    };
  }
  searchQuery = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`).then(response => response.json()).then((result) => {
      this.setState({
        result: result.results,
      });
      console.log(this.state.result);
    });
  }
  movieInfo = () => {
    return (
    <div>
      <MoviePage details={this.state.movie}/>
    </div>
    )  
  }
  getCard = (movie) => {
    return (
        <BrowserRouter>
        <div className="movieCard" onClick={() => this.setState({movie:movie})}>
        <Link to={`/info/movie?id=${movie.id}&title=${movie.original_title}`}>
        <Card
          key = {movie.original_title}
          
          hoverable
          style={{ width: 240 }}
          cover={<img alt={movie.original_title} src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} />}
          >
          <Meta
            className="movieCardMeta"
            title= {movie.original_title}
            description={<Rate disabled defaultValue={(movie.vote_average)/2}/>}
          />
          <Popover placement="bottom" className="cardPopOver" title={movie.original_title} content={movie.overview} trigger="click">
              <Meta
              description='More'
              />
          </Popover>
        </Card>
        </Link>
        <Route path={`/info/movie?id=${movie.id}&title=${movie.original_title}`} Component={this.movieInfo}/>
        </div>
        </BrowserRouter>
    )
  }
  render() {
    if(this.state.result === undefined) return null;
    return (
      <div>
      <div className="searchResultBox">
        <Search
          defaultValue={this.props.searchedQuery}
          onSearch={value => this.searchQuery(value)}
          enterButton
        />
      </div>
      <div className="movieList">
        {this.state.result.map(movie => this.getCard(movie))}
      </div>
      </div>
    );
  }
}

export default SearchResult;
