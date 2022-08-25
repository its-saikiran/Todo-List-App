import React from 'react';
import { Typography } from '@mui/material';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { ListCollection } from '../db/todo_list_store';
import AddDisplayItems from './AddDisplayItems';

export const App = () => {

  let { isLoading, todoList } = useTracker(() => {
    const handler = Meteor.subscribe('read')
    if (!handler.ready()) {
      console.log('handler is not ready....');
      return { isLoading: true }
    }

    console.log('handler ready...')
    return { todoList: ListCollection.find({}, { sort: { createdAt: -1 } }).fetch() }
  }) 

  return (
    <>
      <Typography variant='h3' textAlign='center' color='orange' fontWeight='bold' fontSize='7rem' >
        To Do List
      </Typography>
      {
        isLoading ? <h3 style={{ textAlign: 'center' }}>Loading...</h3> :
          <AddDisplayItems todoList={todoList}/>
      }

    </>
  )
};
