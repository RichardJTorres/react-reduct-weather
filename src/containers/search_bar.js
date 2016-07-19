import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index'; 

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='get a 5 day forcast from your favorite city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-default'>
            <span className='glyphicon glyphicon-search'></span>
            Submit
          </button>
        </span>
      </form>
    );
  }
}
