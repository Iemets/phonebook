import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Text, Textarea } from '@chakra-ui/react';


const TxtArea = ({label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Text>{label}</Text>
            <Textarea
                maxH="100px"
                fontSize="18px"
                isInvalid={meta.error && meta.touched}
                {...props}
                {...field}           
            />
        </>
    );
};

TxtArea.propTypes = {
    label: PropTypes.string,
    props: PropTypes.object
};

export default TxtArea;