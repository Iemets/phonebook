import React from 'react';
import Proptypes from 'prop-types';
import { Drawer, DrawerOverlay, DrawerContent,
        DrawerCloseButton, DrawerHeader } from '@chakra-ui/react';
import AddContactForm from './AddContactForm';

const AddContact = ({ isOpen, onClose, firstField }) => {

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
            size="md"
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
    onClose: Proptypes.func, 
    firstField: Proptypes.object
};

export default AddContact;