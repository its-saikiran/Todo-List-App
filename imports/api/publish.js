import { Meteor } from 'meteor/meteor';
import { ListCollection } from '../db/todo_list_store';

Meteor.publish('read', function fun(){
    console.log('publish called....')
    return ListCollection.find({})
})
