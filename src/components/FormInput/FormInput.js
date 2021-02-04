import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react';

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
            <Input
                {...props}
                {...field}
                fontSize="18px"
                size="md"
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    props: PropTypes.object
};



export default FormInput;

