import * as React from 'react';

const footer = {
    display: 'flex',
    backgroundColor: '#fac',
    marginLeft: '-15px',
    marginBottom: '-10px',
    width: 'calc(100% + 30px)'
} as React.CSSProperties

const button = {
    flex: '1',
    textAlign: 'center',
    padding: '10px 15px',
    cursor: 'pointer'
} as React.CSSProperties


class Footer extends React.Component {

    public render() {
        return (
        <div style={footer}>
            <div style={button}>Like</div>
            <div style={button}>Compartir</div>
        </div>      
        );
    }
}

export default Footer;