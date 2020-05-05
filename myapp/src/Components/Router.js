import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Components/Routes/Home";
// import TV from "Routes/TV";
// import Movie from "Routes/Movie";
// import Search from "Routes/Search";
import Detail from "Components/Routes/Detail";
import Blabla from "Components/Routes/Blabla";
import Header from '../Components/Header';


export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
            <Route path="/blabla" exact component={Blabla} />
            {/* <Route path="/tv" exact component={TV} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/tv/:id" component={Detail} /> */}
            {/* <Route path="https://www.youtube.com/watch?v=" /> */}
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)