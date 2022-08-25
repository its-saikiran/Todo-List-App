import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Meteor } from 'meteor/meteor';

const newDate = new Date();
const date = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
const initialValues = { item: '' }

const F = ({ updateItemValues, setUpdateItemValues }) => {

    const handleSubmitFun = ({ item }, { setSubmitting, resetForm }) => {
        console.log('submitted.....', item, updateItemValues)
        updateItemValues ? Meteor.call('update', { _id: updateItemValues._id, item, updatedAt: date }) : Meteor.call('insert', { item, createdAt: date })
        setSubmitting(false)
        resetForm(initialValues)
        setUpdateItemValues(null)
    };

    return (
        <div style={{ width: '100vw', textAlign: 'center' }}>
            <Formik
                initialValues={updateItemValues || initialValues}
                enableReinitialize
                onSubmit={handleSubmitFun}
            >
                {
                    ({ values, handleChange, isSubmitting }) => (
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
                                {updateItemValues? 'Update' : 'Send'}
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default F;
