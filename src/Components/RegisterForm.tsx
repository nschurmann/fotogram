import * as React from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';


class RegisterForm extends React.Component<InjectedFormProps<{ email: string }>> {

    public render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field placeholder='Correo' label='Correo' name='email' type='email' component={Input} />
                <Field placeholder='Contraseña' label='Contraseña' name='password' type='password' component={Input} />
                <Button>Register</Button>
                <Link to='/Login'>Iniciar Sesión</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
})(RegisterForm);