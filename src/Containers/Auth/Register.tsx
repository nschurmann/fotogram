import * as React from 'react';
import Card from '../../Components/Card'
import Container from '../../Components/Container';
import Title from '../../Components/Title';
import RegisterForm from '../../Components/RegisterForm';
import { connect } from 'react-redux';
import { register as registerThunk } from '../../Thunks/Users';
import { ThunkDispatch } from 'redux-thunk';
import { ILogin } from '../../Models/LoginModel';

interface IRegisterProps {
    register: (a: ILogin) => void
}

class Register extends React.Component<IRegisterProps> {

    public render() {
        const { register } = this.props
        return (
            <Container center={true}>
                <Card>
                    <Title> Registro </Title>
                    <RegisterForm onSubmit={register}/>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state:any) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    register: (payload: any) => dispatch(registerThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);