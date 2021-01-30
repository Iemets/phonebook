import React from 'react';
import Proptypes from 'prop-types';

const markStyle = {
    backgroundColor: '#3182CE',
    color: '#FFFFFF'
};

const MarkInput = ({ children }) => {
    return (
        <mark style={markStyle}>{children}</mark>
    );
};

export const highlighter = (str, query) => {
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


MarkInput.propTypes = {
    children: Proptypes.node
};

