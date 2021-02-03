import React, { useState, useEffect } from 'react';
import { 
            Box, FormControl, FormLabel, FormErrorMessage, 
            InputGroup, InputRightElement, Input, Button,
            IconButton, Stack, Text, useColorModeValue
        } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; 
import { connect } from 'react-redux';
import { authState, signIn, logIn } from '../../store/actionCreator';
import Proptypes from 'prop-types';


const LoginForm = ({ uid, email, error, sign, auth, login }) => {
    const [showPass, setShow] = useState(false);
    const showPassHandler = () => setShow(!showPass);

    const bg = useColorModeValue('gray.50', 'gray.800');
    const borderColor = useColorModeValue('gray.100', 'gray.600');
    const bgInput = useColorModeValue('white', 'gray.800')

    const [signMethod, setSignMethod] = useState(false);

    useEffect(() => {
        auth();
    }, [auth]);

    console.log(email, uid, error);

    return (
        <Box 
            w="340px" m="0 auto" p="20px"
            borderRadius={6}
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
        >
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup
                        .string()
                        .required("Please enter your password")
                        .matches(
                        /^.*(?=.{6,}).*$/,
                        "Password must contain at least 6 characters"
                        )
                })}
                onSubmit={(values, {resetForm}) => {
                    if(signMethod) {
                        sign(values);
                        setSignMethod(false);
                    } else {
                        login(values);
                    }
                    resetForm();
                }}
            >
                { formik => (
                    <Form>
                        <Stack spacing={4}>
                            <Field type="email" name="email" placeholder="Email">
                                {
                                    props => {
                                        return (
                                            <FormControl isInvalid={formik.errors.email && formik.touched.email} isRequired>
                                                <FormLabel>Email address</FormLabel>
                                                <Input 
                                                    {...props.field} 
                                                    size="sm"
                                                    variant="outline"
                                                    bg={bgInput}
                                                    borderRadius={6}
                                                />
                                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )
                                    }
                                }
                            </Field>

                            <Field name="password">
                                { ({ field }) => {
                                    return (
                                        <FormControl isInvalid={formik.errors.password && formik.touched.password} isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <InputGroup size="sm">
                                                <InputRightElement>
                                                    <IconButton 
                                                        bg="transparent"
                                                        border="1px solid trans" 
                                                        size="sm" 
                                                        icon={
                                                            <ViewIcon color="grey" 
                                                                _hover={{ color: "#3182CE" }}
                                                            />}
                                                        _hover={{ bg: "transparent" }}
                                                        _active={{
                                                            bg: "#dddfe2",
                                                            transform: "scale(0.98)",
                                                            borderColor: "#bec3c9",
                                                        }}
                                                        onClick={showPassHandler}  
                                                    />
                                                </InputRightElement>

                                                <Input 
                                                    {...field}
                                                    type={showPass ? "text" : "password"}
                                                    bg={bgInput}
                                                    borderRadius={6}
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    );
                                } }
                            </Field>
                            <Button
                                mt={4}
                                w="100%"
                                h="32px"
                                colorScheme="green"
                                type="submit"
                            >
                                Log In
                            </Button>
                            <Text textAlign="center">or</Text>
                            <Button
                                mt={4}
                                w="100%"
                                h="32px"
                                colorScheme="blue"
                                type="submit"
                                onClick={() => {setSignMethod(true)}}
                            >
                                Sign In
                            </Button>
                        </Stack>
                    </Form>
                    )} 
            </Formik>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        uid: state.auth.user.uid,
        email: state.auth.user.email,
        error: state.auth.messages.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: () => dispatch(authState()),
        sign: (values) => dispatch(signIn(values)),
        login: (values) => dispatch(logIn(values))
    }
}

LoginForm.propTypes = {
    field: Proptypes.object,
    uid: Proptypes.string, 
    email: Proptypes.string, 
    error: Proptypes.object, 
    sign: Proptypes.func, 
    auth: Proptypes.func, 
    login: Proptypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);