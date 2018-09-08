import React, { Component } from 'react';

export default class Api extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return <ul>{result}</ul>;
  }
}
