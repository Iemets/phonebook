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

                    <DrawerHeader borderBottomWidth="1px">
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