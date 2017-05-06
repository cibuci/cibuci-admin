import React from 'react';
import { List, Edit, DateInput, ImageInput, ImageField, TabbedForm, FormTab, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

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
    <TabbedForm>
      <FormTab label="meta">
        <TextInput source="title" options={{ fullWidth: true }}  />
        <LongTextInput source="summary" options={{ fullWidth: true }}  />
        <ImageInput source="cover">
          <ImageField source="cover" />
        </ImageInput>
        <DateInput source="createdAt" />
        <ReferenceInput source="authorId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
      </FormTab>
      <FormTab label="content">
        <RichTextInput source="content" />
      </FormTab>
    </TabbedForm>
  </Edit>
);
