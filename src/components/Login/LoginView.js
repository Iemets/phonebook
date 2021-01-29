import React from 'react';
import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { MoonSunToggleIcon, InfIcon, LinkToRepoIcon } from '../icons/icons';
import LoginForm from './LoginForm';


const LoginView = () => {
    return (
        <Box w="342px" m="120px auto">
            <Stack spacing={10}>

                <Stack spacing={8}>
                    <Heading 
                        letterSpacing={-1}
                        fontWeight="200"
                        fontSize="30px"
                        textAlign="center"
                    >Sign in to Olek's PhoneBook
                    </Heading>
                    <LoginForm/>
                </Stack>

                <Flex
                    justifyContent='center'
                >
                    <Flex 
                        w="45%" 
                        justifyContent='space-evenly'>
                        <InfIcon/>
                        <LinkToRepoIcon/>
                        <MoonSunToggleIcon />
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    );
}


export default LoginView;