import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { authState } from '../../store/actionCreator';
import LoginView from '../Login/LoginView'; 
import { error, success } from '../EventMessages/Messages';
import PhoneBook from '../PhoneBook/PhoneBook';


function App({ msg, user, auth }) {
    const toast = useToast();
    useEffect(() => {
        if(msg.success){
            toast(success(msg.success))
        } else if(msg.error) {
            toast(error(msg.error))
        }
    }, [msg, toast]);

    useEffect(() => {
        auth();
    }, [auth]);

  return (
    <Router>
        {user.uid ? <PhoneBook/> : <LoginView/>}
    </Router>
  );
}


const mapStateToProps = state => {
    return {
        msg: state.auth.messages,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        auth: () => dispatch(authState())
    }
};


App.propTypes = {
    msg: Proptypes.object,
    auth: Proptypes.func,
    user: Proptypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
