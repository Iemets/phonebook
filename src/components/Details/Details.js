import React from 'react';
import { connect } from 'react-redux';
import { Box, Text  } from '@chakra-ui/react';
import DetailsElement from './DetailsElement';
import Media from 'react-media';

const Details = ({ currentContact }) => {
    
    const mediaQueries = {
        sm: "(min-width: 30em)",
        md: "(min-width: 48em)",
        lg: "(min-width: 62em)",
        xl: "(min-width: 82em)"
    };

    return (
        <Media queries={mediaQueries}>
            {matches => (
                <>
                    {matches.lg &&
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
                    }
                </>)
            }
        </Media>
    );
}

const mapStateToProps = state => {
    return {
        currentContact: state.contacts.currentContact
    }
}

export default connect(mapStateToProps)(Details);