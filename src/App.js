import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import   Home from "./page/home/Home";
import MovieList from "./components/movieList/MovieList";
import Movie from "./components/MovieDetail";


function App() {
  return (
    <div className="App">
     
   <Router>
     <Header/>
    <Routes>
      <Route  index element={  <Home/>}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="movies/:type"  element={<MovieList/>}/>
        <Route path="/*"  element={<h1>error page</h1>}/>
      
    </Routes>
   </Router>
    </div>
  );
}

export default App;
