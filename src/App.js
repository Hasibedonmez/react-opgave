import { Routes, Route, Link} from 'react-router-dom';
import PopularMoviesList from "./components/popularMoviesList";
import HighestRatedMoviesList from "./components/highestRatedMoviesList";
import MovieImg from './assets/Image/movie_black2.jpg';
import SearchMovie from './components/searchMovie';
import SearchedMoviesList from './components/searchedMovieList';
import Home from './components/home';

function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <div className="navbar navbar-expand-lg">
            <nav className="nav navbar-nav">    
              <Link to='/' className="nav-item nav-link">Home</Link>
              <Link to='/popular' className="nav-item nav-link">Popular</Link>
              <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            </nav>
          </div>
            <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75" alt="Movie Finder Logo"/></span>
        <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
          </div>
          <Routes>
              <Route path='/' element={<Home/>} />  
              <Route path='/popular' element={<PopularMoviesList/>} />    
              <Route path='/highest-rated' element={<HighestRatedMoviesList/>} />
              <Route path='/searchedMovie' element={<SearchedMoviesList/>} />
          </Routes>
      </div>
    );
  }

  export default App;