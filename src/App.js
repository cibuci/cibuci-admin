import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { ArticleList, ArticleCreate } from './article';

class App extends Component {
  render() {
    return (
      <Admin restClient={loopbackRestClient('http://localhost:4000/api')}>
        <Resource name="articles" list={ArticleList} create={ArticleCreate} />
      </Admin>
    );
  }
}

export default App;
