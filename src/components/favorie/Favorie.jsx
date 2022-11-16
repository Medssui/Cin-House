import React from 'react';
import PropTypes from 'prop-types';

import './favorie.scss';

const Favorie = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Favorie
            className={`btn-outline ${props.className}`}
            

        >
            {props.children}
        </Favorie>
    );
}

Favorie.propTypes = {
    onClick: PropTypes.func
}

export default Favorie;