import * as React from 'react';



const style = {
    color: '#555'
}

class Title extends React.Component {

    public render() {

        return (
            <h2 {...this.props} style={style} />
        );
    }
}

export default Title;