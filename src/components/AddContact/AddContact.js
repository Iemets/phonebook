import React from 'react';
import Proptypes from 'prop-types';
import { Drawer, DrawerOverlay, DrawerContent,
        DrawerCloseButton, DrawerHeader } from '@chakra-ui/react';
import AddContactForm from './AddContactForm';

const AddContact = ({ isOpen, onClose }) => {

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="sm"
        >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader fontWeight="200" fontSize="4xl">
                        Add contact
                    </DrawerHeader>

                    <AddContactForm/>

                </DrawerContent>
            </DrawerOverlay>

        </Drawer>
    );
};

AddContact.propTypes = {
    isOpen: Proptypes.bool, 
    onClose: Proptypes.func
};

export default AddContact;