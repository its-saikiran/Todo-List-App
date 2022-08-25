import React from 'react';
import { List, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Meteor } from 'meteor/meteor';

const DisplayList = ({ todoList, setFieldValue, setUpdateItemId }) => {

    // console.log('Display list.....')
    // console.log(todoList)

    const editFun = (data) => {
        setFieldValue('item', data.item)
        setUpdateItemId(data._id)
    }

    const deleteFun = (itemId) => {
        console.log('deleted fun.....', itemId)
        // alert('Make sure you wanna delete.....')
        Meteor.call('delete', itemId)
    }

    return (
        <>
            <List style={{ backgroundColor: 'orange', padding: '7%', borderRadius: '10px', marginBottom: '3vh' }}>
                {
                    todoList.length === 0 ? 
                        <div style={{ backgroundColor: 'lightblue', padding: '10px', fontSize: '3rem', fontWeight: 'bolder' }}>
                            No items in the list!
                        </div> :
                        todoList.map(data =>
                            <ListItem
                                key={data._id}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: 'lightblue', padding: '5px 25px' }}>
                                    <p>{data.item}</p>
                                    <p>createdAt : {data.createdAt}</p>
                                    {
                                        data.updatedAt && <p>updatedAt : {data.updatedAt}</p>
                                    }
                                    <EditIcon onClick={() => editFun(data)} />
                                    <DeleteIcon onClick={() => deleteFun(data._id)} />
                                </div>
                            </ListItem>
                        )
                }
            </List >
        </>
    )
}


export default DisplayList;