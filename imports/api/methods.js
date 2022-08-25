import { Meteor } from 'meteor/meteor';
import { ListCollection } from "../db/todo_list_store";
import { check } from 'meteor/check';

Meteor.methods({
    'insert'(data) {
        check(data.item, String)
        check(data.createdAt, String)
        ListCollection.insert(data)
    },

    'update'({ _id, item, updatedAt }) {
        ListCollection.update({ _id }, {
            $set: { item, updatedAt }
        })
    },

    'delete'(_id) {
        ListCollection.remove(_id)
    }
})