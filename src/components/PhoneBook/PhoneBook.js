import React, { useEffect } from 'react';
import { Flex, Spacer, useColorModeValue  } from '@chakra-ui/react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllContacts } from '../../store/actionCreator';
import Media from 'react-media';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Details from '../Details/Details';
import NoContacts from '../NoContacts/NoContacts';


const PhoneBook = ({ uid, contacts, currentContact, getContacts }) => {
    const bg = useColorModeValue('gray.100', 'gray.800');

    const mediaQueries = {
        sm: "(min-width: 30em)",
        md: "(min-width: 48em)",
        lg: "(min-width: 62em)",
        xl: "(min-width: 82em)"
    };

    useEffect(() => {
        getContacts(uid);
    }, [getContacts]);

    return (
        <>
            <Header/>
            <Flex 
                p="120px 30px" 
                rounded="lg"
                boxShadow="dark-lg"
                bgColor={bg}
                minH="800px"
            >
                {contacts ? <Contacts contacts={contacts}/> : <NoContacts/>}
                <Spacer/>
                <Media queries={mediaQueries}>
                    {matches => (
                        <>
                            {matches.lg && currentContact.firstName ?
                                <Details currentContact={currentContact}/> : null
                            
                            }
                        </>
                    )}
                </Media>
            </Flex>
        </>
    );
}

const mapStateToProps = state => {
    return {
        uid: state.auth.user.uid,
        contacts: state.contacts.allContacts,
        currentContact: state.contacts.currentContact
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: uid => dispatch(getAllContacts(uid)),
    };
};


PhoneBook.propTypes = {
    uid: Proptypes.string,
    getContacts: Proptypes.func,
    contacts: Proptypes.array,
    currentContact: Proptypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);