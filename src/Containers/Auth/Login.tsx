import * as React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card';
import Container from '../../Components/Container';
import Title from '../../Components/Title';
import LoginForm from '../../Components/LoginForm';
import { login as loginThunk } from '../../Thunks/Users';
import { ILogin } from '../../Models/LoginModel';
import { ThunkDispatch } from 'redux-thunk';
import { IState } from '../../Models/State';

interface ILoginProps {
    login: (a: ILogin) => void
}

class Login extends React.Component<ILoginProps> {

    public render() {
        const { login } = this.props
        return (
            <Container center={true}>
                <Card>
                    <Title>Inicio de Sesión</Title>
                    <LoginForm onSubmit={login}/>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state: IState) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    login: (payload: any) => dispatch(loginThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
