import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressue</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

funtion mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
