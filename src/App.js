import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import loopbackRestClient, { authClient } from 'aor-loopback';
import { ArticleList, ArticleCreate, ArticleEdit } from './article';
import { TopicList, TopicCreate, TopicEdit } from './topic';
import { UserList, UserCreate, UserEdit } from './user';
import addUploadFeature from './upload';

const restClient = loopbackRestClient('https://api.cibuci.com/api');
const uploadCapableClient = addUploadFeature(restClient);

class App extends Component {
  render() {
    return (
      <Admin
        title="辞不辞管理后台"
        restClient={uploadCapableClient}
        authClient={authClient('https://api.cibuci.com/api/users')}
        >
        <Resource
          name="users"
          remove={Delete}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name="articles"
          list={ArticleList}
          create={ArticleCreate}
          edit={ArticleEdit}
          remove={Delete}
        />
        <Resource
          name="topics"
          list={TopicList}
          create={TopicCreate}
          edit={TopicEdit}
          remove={Delete}
        />
      </Admin>
    );
  }
}

export default App;
