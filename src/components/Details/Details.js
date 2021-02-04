import React from 'react';
import Proptypes from 'prop-types';
import { Box, Text  } from '@chakra-ui/react';
import DetailsElement from './DetailsElement';

const Details = ({ currentContact }) => {
    return (
        <Box w="45%">
            <Box rounded="lg" p="10px">
                <Text
                    textAlign="center"
                    fontSize="45px"
                    fontWeight="200"
                    letterSpacing="3px"
                > {
                    currentContact.firstName || currentContact.lastName 
                    ? 
                    `${currentContact.firstName} ${currentContact.lastName}`
                    :
                    <span style={{ fontSize: '35px' }}>No contact selected</span>
                    }</Text>
            </Box>

            <DetailsElement title="phone" name={currentContact.dob}/>
            <DetailsElement title="email" name={currentContact.id}/>
            <DetailsElement title="address" name={currentContact.id}/>
            <DetailsElement title="description" name={currentContact.id} boxprops={{minH: '150px'}}/>
        </Box>
    );
};

Details.propTypes = {
    currentContact: Proptypes.object
};

export default Details;