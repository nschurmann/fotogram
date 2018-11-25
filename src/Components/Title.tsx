import * as React from 'react';



const style = {
    color: '#555'
}

const Title: React.StatelessComponent = (props) => {
    return (
        <h2 {...props} style={style} />
    );
}

export default Title;