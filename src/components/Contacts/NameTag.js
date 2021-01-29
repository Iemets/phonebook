import React from 'react';
import { Text } from '@chakra-ui/react';

function NameTag({ contact, input }) {
    let { firstName, lastName } = contact;
    const markStyle = {
        backgroundColor: '#3182CE',
        color: '#FFFFFF'
    };
    const MarkInput = ({ children }) => {
        return (
            <mark style={markStyle}>{children}</mark>
        );
    };
    const stringMarker = (str, query) => {
        str = str.toLowerCase();
        query = query.toLowerCase();

        let index = str.search(query);
        let split = str.split(query);

        let one = split[0];
        let two = split[1];

        let combined;
        if (index !== -1 && query.length > 0) {
            if (one.length === 0) {
                combined = <><MarkInput>{query}</MarkInput>{two}</>;
            } else if (two.length === 0) {
                combined = <>{one}<MarkInput>{query}</MarkInput></>;
            } else {
                combined = <>{one}<MarkInput>{query}</MarkInput>{two}</>;
            }
        } else {
            combined = str;
        }
        return combined;
    };

    return (
        <>
            <Text ml="30px" fontSize={20} display="inline">
                {input.length === 0 ? firstName : stringMarker(firstName, input)}
                <span style={{ marginLeft: '5px', fontWeight: '600' }}>
                    {input.length === 0 ? lastName : stringMarker(lastName, input)}
                </span>
            </Text>
        </>

    );
}

export default NameTag;