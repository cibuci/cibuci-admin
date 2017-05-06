import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import loopbackRestClient, { authClient } from 'aor-loopback';
import { ArticleList, ArticleCreate, ArticleEdit } from './article';
import { UserList, UserCreate } from './user';
import addUploadFeature from './upload';

const restClient = loopbackRestClient('https://api.cibuci.com/api');
const uploadCapableClient = addUploadFeature(restClient);

class App extends Component {
  render() {
    return (
      <Admin
        title="cibuci.com Admin"
        restClient={uploadCapableClient}
        authClient={authClient('https://api.cibuci.com/api/users')}
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
