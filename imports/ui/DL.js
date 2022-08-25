import React from 'react';
import { List, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Meteor } from 'meteor/meteor';

const DL = ({ todoList, setUpdateItemValues }) => {

    // console.log('Display list.....')
    // console.log(todoList)

    const deleteFun = (itemId) => {
        console.log('deleted fun.....', itemId)
        // alert('Make sure you wanna delete.....')
        Meteor.call('delete', itemId)
    }

    return (
        <>
            <List style={{ backgroundColor: 'orange', padding: '3%', borderRadius: '10px', margin: '1vh 1vw 3vh' }}>
                {
                    todoList.length === 0 ? 
                        <div style={{ backgroundColor: 'lightblue', padding: '10px', fontSize: '3rem', fontWeight: 'bolder', textAlign: 'center' }}>
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
                                    <EditIcon onClick={() => setUpdateItemValues(data)} />
                                    <DeleteIcon onClick={() => deleteFun(data._id)} />
                                </div>
                            </ListItem>
                        )
                }
            </List >
        </>
    )
}


export default DL;