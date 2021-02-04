import React from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; 
import FormInput from '../FormInput/FormInput';
import TxtArea from '../TxtArea/TxtArea';


const AddContactForm = () => {
    return (
        <Box w="90%" m="30px auto" p="20px">
            <Formik
                initialValues={{ firstName: '', lastName: '', phone: '', email: '', address: '', desc: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        'Phone number is not valid').required('Required'),
                    email: Yup.string().email('Invalid email address')
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
            >
                <Form>
                    <Stack spacing={4}>
                        <FormInput
                            placeholder="First name"
                            name="firstName"
                            type="text"
                            variant="flushed"
                        />
                        <FormInput
                            placeholder="Last name"
                            name="lastName"
                            type="text"
                            variant="flushed"
                        />
                        <FormInput
                            placeholder="Phone"
                            name="phone"
                            type="text"
                            variant="flushed"
                        />
                        <FormInput
                            placeholder="Email"
                            name="email"
                            type="email"
                            variant="flushed"
                        />
                        <FormInput
                            placeholder="Address"
                            name="address"
                            type="text"
                            variant="flushed"
                        />
                        <TxtArea
                            placeholder="Description"
                            name="desc"
                            type="text"
                            variant="filled"
                        />
                        <Button
                            h="32px"
                            colorScheme="blue"
                            type="submit"
                        >
                            Add
                        </Button>
                    </Stack>
                </Form>
            </Formik>
        </Box>
    );
};

export default AddContactForm;