import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class TableList extends Component {
  render() {
    const { dataCharacters, removeCharacter } = this.props;

    return (
      <Table striped bordered condensed hover>
        <TableHeader />
        <TableBody
          dataBody={dataCharacters}
          removeCharacter={removeCharacter}
        />
      </Table>
    );
  }
}
