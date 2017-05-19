import React from 'react';
import { List, Edit, DateInput, NumberField, NumberInput, DateField, ImageInput, ImageField, TabbedForm, FormTab, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';
import RichTextInput from 'aor-rich-text-input';

import toolbar from './utils/toolbar';

export const TopicList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="tab" />
            <DateField source="createdAt" />
            <ReferenceField source="authorId" reference="users">
              <TextField source="username" />
            </ReferenceField>
            <TextField source="rank" />
            <TextField source="mark" />
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
            <RichTextInput source="content" toolbar={toolbar} />
        </SimpleForm>
    </Create>
);

export const TopicEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="其他信息">
        <TextInput source="title" options={{ fullWidth: true }}  />
        <SelectInput source="tab" choices={[
          { id: 'share', name: '分享' },
          { id: 'ask', name: '问答' },
        ]} />
        <NumberInput source="commentsCount" />
        <DateInput source="createdAt" />
        <NumberInput source="rank" />
        <SelectInput source="mark" choices={[
          { id: 'good', name: '优质帖子' },
          { id: '', name: '未标记' },
        ]} />
        <ReferenceInput source="authorId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
      </FormTab>
      <FormTab label="内容">
        <RichTextInput source="content" toolbar={toolbar} />
      </FormTab>
    </TabbedForm>
  </Edit>
);
