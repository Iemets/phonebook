import React from 'react';
import Proptypes from 'prop-types';
import { Box, Stack, FormControl, FormLabel, FormErrorMessage,
        Input, useColorModeValue } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; 


const AddContactForm = () => {
    const borderColor = useColorModeValue('gray.100', 'gray.600');
    return (
        <Box    
            w="70%" m="30px auto" p="20px"
            border="1px solid"
            borderColor={borderColor}
            borderRadius={6}
        >
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
                {
                    formik => (
                        <Form>
                            <Stack spacing={4}>
                                <Field name="firstName" type="text">
                                    {
                                        props => (
                                            <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                                                <FormLabel>First name</FormLabel>
                                                <Input
                                                    {...props.field}
                                                    size="sm"
                                                    variant="outline"
                                                    borderRadius={6}
                                                />
                                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                </Field>

                                <Field name="lastName" type="text">
                                    {
                                        props => (
                                            <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
                                                <FormLabel>Last name</FormLabel>
                                                <Input
                                                    {...props.field}
                                                    size="sm"
                                                    variant="outline"
                                                    borderRadius={6}
                                                />
                                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                                            </FormControl>
                                        )
                                    }
                                </Field>




                                <Field type="email" name="email" placeholder="Email">
                                    {
                                        props => (
                                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                                <FormLabel>Email</FormLabel>
                                                <Input 
                                                    {...props.field} 
                                                    size="sm"
                                                    variant="outline"
                                                    // bg={bgInput}
                                                    borderRadius={6}
                                                />
                                                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )
                                    }
                                </Field>
                            </Stack>
                        </Form>
                    )
                }
            </Formik>
        </Box>
    );
};

AddContactForm.propTypes = {
    field: Proptypes.object
};

export default AddContactForm;