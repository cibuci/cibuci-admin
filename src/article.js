import React from 'react';
import { List, Edit, DateInput, NumberInput, DateField, ImageInput, ImageField, TabbedForm, FormTab, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';
import RichTextInput from 'aor-rich-text-input';

import toolbar from './utils/toolbar';

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="summary" />
            <DateField source="createdAt" />
            <ReferenceField source="authorId" reference="users">
              <TextField source="username" />
            </ReferenceField>
            <TextField source="cover" />
            <TextField source="readCount" />
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
            <TextInput source="sourceUrl" />
            <TextInput source="sourceName" />
            <RichTextInput source="content" toolbar={toolbar} />
        </SimpleForm>
    </Create>
);

export const ArticleEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="其他信息">
        <SelectInput source="status" choices={[
          { id: 'draft', name: '草稿' },
          { id: 'published', name: '发表' },
          { id: 'archived', name: '归档' },
        ]} />
        <TextInput source="title" options={{ fullWidth: true }}  />
        <LongTextInput source="summary" options={{ fullWidth: true }}  />
        <ImageField source="cover" title="title" />
        <ImageInput source="cover">
          <ImageField title="title" />
        </ImageInput>
        <DateInput source="createdAt" />
        <NumberInput source="readCount" />
        <TextInput source="sourceName" />
        <TextInput source="sourceUrl" />
        <TextInput source="rank" />

        <ReferenceInput source="authorId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
      </FormTab>
      <FormTab label="内容">
        <RichTextInput source="content" toolbar={toolbar}  />
      </FormTab>
    </TabbedForm>
  </Edit>
);
