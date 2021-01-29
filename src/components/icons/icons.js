import React from 'react';
import { Tooltip, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon, EmailIcon, InfoOutlineIcon, LinkIcon } from '@chakra-ui/icons';

export const MoonSunToggleIcon = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('white', 'gray.900');
    return (
        <Tooltip label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}>
            <IconButton 
                bgColor={bg}
                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} 
                onClick={toggleColorMode}
            />
        </Tooltip>
    );
};


export const InfIcon = () => {
    const bg = useColorModeValue('white', 'gray.900');
    return (
        <Tooltip label='Info'>
            <IconButton 
                bgColor={bg}
                icon={<InfoOutlineIcon/>} 
            />
        </Tooltip>
    );
};

export const EmailAuthorIcon = () => {
    const bg = useColorModeValue('white', 'gray.900');
    return (
        <Tooltip label='Email author'>
            <IconButton 
                bgColor={bg}
                icon={<EmailIcon/>} 
            />
        </Tooltip>
    );
};

export const LinkToRepoIcon = () => {
    const bg = useColorModeValue('white', 'gray.900');
    return (
        <Tooltip label='https://github.com/oiemets'>
            <IconButton 
                bgColor={bg}
                icon={<LinkIcon/>} 
                onClick={() => window.open('https://github.com/oiemets', '_blank')}
            />
        </Tooltip>
    );
};
