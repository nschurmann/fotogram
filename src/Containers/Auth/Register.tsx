import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Components/Card'
import Container from '../../Components/Container';
import Input from '../../Components/Input';

import Title from '../../Components/Title';
import Button from '../../Components/Button';

class Register extends React.Component {

    public render() {
        return (
            <Container center={true}>
                <Card>
                    <Title> Registro </Title>
                    <Input placeholder='Correo' label='Correo'/>
                    <Input placeholder='Contraseña' label='Contraseña'/>
                    <Button>Registrarse</Button>
                    <Link to='/Login'>Iniciar Sesión</Link>
                </Card>
            </Container>
        );
    }
}

export default Register;