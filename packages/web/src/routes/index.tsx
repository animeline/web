import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Anime from '../pages/Anime';
import Episode from '../pages/Episode';
import Home from '../pages/Home';
import Latest from '../pages/Latest';
import Search from '../pages/Search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/latest" component={Latest} />
        <Route path="/animes/:anime_id" exact component={Anime} />
        <Route path="/animes/:anime_id/episode/:video_id" component={Episode} />
        <Route path="/animes/search/:anime_name" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}
