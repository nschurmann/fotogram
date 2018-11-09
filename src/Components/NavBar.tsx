import * as React from 'react';
import { Link } from 'react-router-dom'

const style = {
    backgroundColor: '#fff',
    padding: '10px 15px',
    border: '1px solid #aaa',
}

const divStyle = {
    float: 'right'
} as React.CSSProperties

class NavBar extends React.Component {

    public render() {
        return (
            <div style={style}>
                <Link to='/app/newsfeed'>FotoGram</Link>
                <div style={divStyle}><Link to='/app/profile'>Perfil</Link></div>
            </div>
        );
    }
}

export default NavBar;