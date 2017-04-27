import React from 'react';
import { List, Edit, DateInput, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

import RichTextInput from 'aor-rich-text-input';

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="summary" />
            <TextField source="createdAt" />
            <TextField source="authorId" />
            <TextField source="cover" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ArticleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="summary" />
            <TextInput source="cover" />
            <RichTextInput source="content" />
        </SimpleForm>
    </Create>
);

export const ArticleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="summary" />
      <TextInput source="cover" />
      <DateInput source="createdAt" />
      <RichTextInput source="content" />
      <ReferenceInput source="authorId" reference="users">
        <SelectInput optionText="username" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
