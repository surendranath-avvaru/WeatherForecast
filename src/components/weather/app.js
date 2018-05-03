import React, { Component } from 'react';

import SearchBar from '../../containers/weather/search_bar';
import WeatherList from '../../containers/weather/weather_list';
import Menu from '../../menu';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Menu />
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
