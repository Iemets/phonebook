import React from 'react';
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react';

const FormInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <Field name={label}>
            {
                props => {
                    <FormControl>
                        <FormLabel>{label}</FormLabel>
                        <Input
                            
                        
                        />
                    </FormControl>
                }
            }
        </Field>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    // props: PropTypes.object
};



export default FormInput;

