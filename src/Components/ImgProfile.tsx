import * as React from 'react';

const style = {

} as React.CSSProperties

const Imgstyle = {
    borderRadius: '100%'
}


class ImgProfile extends React.Component {

    public render() {
        return (
            <div style={style}>
                <img src='http://placekitten.com/100/100' style={Imgstyle}></img>
            </div>      
        );
    }
}

export default ImgProfile;