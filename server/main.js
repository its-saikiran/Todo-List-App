import { Meteor } from 'meteor/meteor';
import { ListCollection } from '../imports/db/todo_list_store';
import '../imports/api/publish';
import '../imports/api/methods';

function insertLink(item) {
  // const date = new Date();
  // ListCollection.insert({item, createdAt: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`});
  ListCollection.insert({item, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the List collection is empty, add some data.
  if (ListCollection.find().count() === 0) {
    console.log('server main.js file called.....')
    insertLink('First');

    insertLink('Second');

    insertLink('Third');
  }
});
