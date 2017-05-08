import React from 'react';
import { List, Edit, DateInput, NumberField, NumberInput, DateField, ImageInput, ImageField, TabbedForm, FormTab, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

import RichTextInput from 'aor-rich-text-input';

export const TopicList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="tab" />
            <DateField source="createdAt" />
            <ReferenceField source="authorId" reference="users">
              <TextField source="username" />
            </ReferenceField>
            <NumberField source="commentsCount" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TopicCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="tab" />
            <DateInput source="createdAt" />
            <RichTextInput source="content" />
        </SimpleForm>
    </Create>
);

export const TopicEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="meta">
        <TextInput source="title" options={{ fullWidth: true }}  />
        <LongTextInput source="tab" options={{ fullWidth: true }}  />
        <NumberInput source="commentsCount" />
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
