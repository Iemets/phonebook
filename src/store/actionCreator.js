import * as Types from './actionTypes';
import { auth } from '../db/db';

const errorHandler = message => {
    return {
        type: Types.ERROR,
        payload: {
            error: message
        }
    }
};

export const authState = () => {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            if(user){
                return dispatch({
                    type: Types.AUTH_STATE,
                    payload: {
                        user,
                        success: `Welcome ${user.email}`
                    }
                })
            } return dispatch(errorHandler('no user!')) 
        })
    }
};

export const signIn = ({ email, password }) => {
    return async dispatch => {
        try {
            const createUser = auth.createUserWithEmailAndPassword(email, password);
            const user = await createUser;
            return dispatch({
                type: Types.SIGN_IN,
                payload: {
                    user,
                    success: `Hello! Welcome to the Olek's phonebook!`
                }
            });
        } catch(error) {
            dispatch(errorHandler(error.message));
        }
    }
};

export const logIn = ({ email, password }) => {
    return async dispatch => {
        try{
            const logUser = auth.signInWithEmailAndPassword(email, password);
            const user = await logUser;
            return dispatch({
                type: Types.LOG_IN,
                payload: {
                    user,
                    success: 'Hello! Thanks for stopping by!'
                }
            })
        }catch(error){
            dispatch(errorHandler(error.message));
        }
    }
};

export const signOut = () => {
    return async dispatch => {
        try{
            auth.signOut();
            return dispatch({
                type: Types.SUCCESS,
                payload: {
                    success: 'user has successfully signed out!'
                }
            })
        } catch(error){
            dispatch(errorHandler(error.message));
        }
    }
};



export const getAllContacts = () => {
    return async dispatch => {
        try{
             // const getContacts = await fetch('https://jsonplaceholder.typicode.com/users');
            const getContacts = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const contacts = await getContacts.json(); 
            return dispatch({
                type: Types.GET_ALL_CONTACTS,
                payload: {
                    contacts
                }
            });
        } catch {
            return dispatch(errorHandler('no contacts!'))
        }
    
    }
};

export const getCurrentContact = (id, contacts) => {
    const contact = contacts.find((cnt) => id === cnt.id);
    if(!contact){
        return errorHandler('something went wrong. contact not found');
    }
    return {
        type: Types.GET_CURRENT_CONTACT,
        payload: {
            contact
        }
    }
};


