import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import RangeSlider from './RangeSlider.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {value: { min: 2, max: 10 },}
    // console.log("This is my initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //    title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
    //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    //    title: "	The Avengers", overview: "This is my second overview"},
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch()
  }

  performSearch() {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/discover/movie?api_key=2c6e0d0fbc27488818680db9415a6c8c"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div class='some-page-wrapper'>
        <table className="titleBar">
                  <tbody>
                    <tr>
                      <td>
                        <img alt="app icon" width="50" src="green_app_icon.svg"/>
                      </td>
                      <td width="8"/>
                      <td>
                        <h1>MoviesDB Search</h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
        <div class='row'>
          <div class='column'>
            <div class='blue-column'>
              <RangeSlider/>
            </div>
          </div>
          <div class='column'>
            <div class='green-column'>
            <div style={{
                fontSize: 24,
                display: 'block',
                width: "99%",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16
              }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

              {this.state.rows}
              
            </div>
          </div>  
        </div>    
      </div>
    );
  }
}

export default App;

