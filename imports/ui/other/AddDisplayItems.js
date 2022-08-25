import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DisplayList from './DisplayList';
import { Meteor } from 'meteor/meteor';

const newDate = new Date();
const date = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}` 
const initialValues = { item: '' }

const AddDisplayItems = ({ todoList }) => {

    const [updateItemId, setUpdateItemId] = useState(null)

    const handleSubmitFun = ({ item }, { setSubmitting, resetForm }) => {
        console.log('submitted.....', item)
        updateItemId? 
        Meteor.call('update', { _id: updateItemId, item, updatedAt: date }) :
        Meteor.call('insert', { item, createdAt: date, updatedAt: null })
        // setTimeout(() => {
        // }, 500);
        setSubmitting(false)
        resetForm(initialValues)
        setUpdateItemId(null)
    }


    return (
        <div style={{ margin: '3vh 20vw', width: '60vw', textAlign: 'center' }}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmitFun}
            >
                {
                    ({ values, handleChange, isSubmitting, setFieldValue }) => (
                        <>
                            <DisplayList
                                todoList={todoList}
                                setFieldValue={setFieldValue}
                                setUpdateItemId={setUpdateItemId}
                            />

                            <Form>
                                <TextField
                                    type='text'
                                    placeholder='Your List Item'
                                    name='item'
                                    value={values.item}
                                    onChange={handleChange}
                                    variant='standard'
                                    required
                                    helperText={date}
                                />
                                <Button
                                    type='Submit'
                                    variant="outlined"
                                    size='small'
                                    endIcon={<SendIcon />}
                                    disabled={isSubmitting}
                                >
                                    {updateItemId ? 'Update' : 'Send'}
                                </Button>
                            </Form>
                        </>
                    )
                }
            </Formik>
        </div>
    )
}

export default AddDisplayItems;
