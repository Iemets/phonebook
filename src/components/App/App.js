import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useToast } from '@chakra-ui/react';
// import LoginView from '../Login/LoginView'; 
import { error, success } from '../EventMessages/Messages';

import PhoneBook from '../PhoneBook/PhoneBook';
import Header from '../Header/Header';

function App({ msg }) {
    const toast = useToast();
    useEffect(() => {
        if(msg.success){
            toast(success(msg.success))
        } else if(msg.error) {
            toast(error(msg.error))
        }
    }, [msg, toast]);
  return (
    <>
        <Header/>
        <PhoneBook/>
        {/* <LoginView/> */}
    </>
  );
}


const mapStateToProps = state => {
    return {
        msg: state.auth.messages
    }
}

export default connect(mapStateToProps)(App);
