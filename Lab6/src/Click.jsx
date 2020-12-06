import React from 'react';
import Button from 'react-bootstrap/Button';

const Click = props => {
    return (
        <div className="Click">
            <Button variant="info" onDoubleClick={
                () => props.onDoubleClick()}>Double click me!</Button>
        </div>
    );
};

export default Click;