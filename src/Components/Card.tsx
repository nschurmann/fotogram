import * as React from 'react';

const style = {
    backgroundColor: '#fff',
    padding: '10px 15px',
    border: '1px solid #ddd'
}

const Card: React.StatelessComponent = (props) => {
    const { children } = props;
    return (
        <div style={style}>
            {children}
        </div>
    );
}


export default Card;