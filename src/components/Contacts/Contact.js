import React from 'react';
import Proptypes from 'prop-types';
import { Text } from '@chakra-ui/react';
import { highlighter } from './HighlightSearch';

const Contact = ({ contact, input }) => {
    let { firstName, lastName } = contact;
    return (
        <>
            <Text ml="30px" fontSize={20} display="inline">
                {input.length === 0 ? firstName : highlighter(firstName, input)}
                <span style={{ marginLeft: '5px', fontWeight: '600' }}>
                    {input.length === 0 ? lastName : highlighter(lastName, input)}
                </span>
            </Text>
        </>

    );
};

Contact.propTypes = {
    contact: Proptypes.object,
    input: Proptypes.string,
};


export default Contact;