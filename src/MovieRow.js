import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    const getYear = (date) => new Date().getFullYear()
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="170" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <div id="info">
            Year
            <p>{getYear(this.props.movie.release_date)}</p>
          </div>
          <div id="Rating">
            Rating
            <p>{this.props.movie.vote_average}</p>
          </div>
          
          <input type="button" onClick={this.viewMovie.bind(this)} value="View" style={{marginLeft: 20,backgroundColor:"#f49b42", paddingLeft: 20, paddingRight: 20, paddingBottom: 5, paddingTop: 5}}/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow