import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import loopbackRestClient, { authClient } from 'aor-loopback';
import { ArticleList, ArticleCreate } from './article';
import { UserList, UserCreate } from './user';
import { Menu } from './Menu';

class App extends Component {
  render() {
    return (
      <Admin
        menu={Menu}
        title="辞不辞管理工具"
        restClient={loopbackRestClient('http://localhost:4000/api')}
        authClient={authClient('http://localhost:4000/api/users')}
        >
        <Resource name="users" list={UserList} create={UserCreate} />
        <Resource name="articles" list={ArticleList} create={ArticleCreate} />
      </Admin>
    );
  }
}

export default App;
