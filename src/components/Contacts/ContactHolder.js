import React from 'react';
import { connect } from 'react-redux';
import { ListItem, useColorModeValue } from '@chakra-ui/react';
import { getCurrentContact } from '../../store/actionCreator';
import Contact from './Contact';

const ContactHolder = ({ contact, contacts, currentContact, getContact, input }) => {
    const bgHover = useColorModeValue('gray.200', 'gray.700');
    const bgActive = useColorModeValue('gray.100', 'gray.600');

    return (
        <ListItem
            onClick={() => getContact(contact.id, contacts)}
            p="3px"
            _hover={{bgColor: bgHover, cursor: 'pointer'}}
            _active={{bgColor: bgActive}}
            bgColor={currentContact.id === contact.id ? bgHover : 'none'}
        >
            <Contact contact={contact} input={input}/>
        </ListItem>
    );
}

const mapStateToProps = state => {
    return {
        currentContact: state.contacts.currentContact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContact: (id, contacts) => dispatch(getCurrentContact(id, contacts))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactHolder);