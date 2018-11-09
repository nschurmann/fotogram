import * as React from 'react';
import ImgProfile from '../../Components/ImgProfile';
import Button from '../../Components/Button';
import Card from '../../Components/Card';


const style = {
    container: {
        padding: '15px',
    },
    Row: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

class Profile extends React.Component {

    public render() {
        return (
            <div style={style.container}>
                <div style={style.Row}>
                    <ImgProfile />
                    <Button>Añadir Imágen</Button>
                </div>
                <div  style={style.Row}>
                    <Card><img src='http://placekitten.com/140/140' /></Card>
                    <Card><img src='http://placekitten.com/140/140' /></Card>
                    <Card><img src='http://placekitten.com/140/140' /></Card>
                </div>
            </div>
        );
    }
}

export default Profile;