import * as Types from './actionTypes';

const init = {
    allContacts: null,
    currentContact: {},
    searchInput: ''
};


const contactsReducer = (state = init, { type, payload }) => {
    switch(type) {
        case Types.GET_ALL_CONTACTS: return {...state, allContacts: payload.contacts};
        case Types.GET_CURRENT_CONTACT: return {...state, currentContact: payload.contact};
        default: return state;
    }
};


export default contactsReducer;