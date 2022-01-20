import React from "react";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import ReferDetail from "./components/pages/ReferDetail";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import YoutubeDetail from "./components/pages/YoutubeDetail"
import MovieDetail from "./components/pages/MovieDetail";
import Movie from "./components/pages/Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/refer-detail" exact component={ReferDetail} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/script" exact component={Script} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/youtube-detail" exact component={YoutubeDetail} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/movie-detail" exact component={MovieDetail} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  );
}

export default App;