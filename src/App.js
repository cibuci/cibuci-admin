import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import loopbackRestClient, { authClient } from 'aor-loopback';
import { ArticleList, ArticleCreate, ArticleEdit } from './article';
import { UserList, UserCreate } from './user';

class App extends Component {
  render() {
    return (
      <Admin
        title="cibuci.com Admin"
        restClient={loopbackRestClient('http://api.cibuci.com/api')}
        authClient={authClient('http://api.cibuci.com/api/users')}
        >
        <Resource name="users" remove={Delete} list={UserList} create={UserCreate} />
        <Resource
          name="articles"
          list={ArticleList}
          create={ArticleCreate}
          edit={ArticleEdit}
          remove={Delete}
        />
      </Admin>
    );
  }
}

export default App;
