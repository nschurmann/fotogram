import * as React from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';


class LoginForm extends React.Component<InjectedFormProps> {

    public render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field placeholder='Correo' label='Correo' name='email' type='email' component={Input} />
                <Field placeholder='Contraseña' label='Contraseña' name='password' type='password' component={Input} />
                <Button>Login</Button>
                <Link to='/Register'>Registrate</Link>
            </form>
        );
    }
}

export default reduxForm<any, any>({
    form: 'login',
})(LoginForm);