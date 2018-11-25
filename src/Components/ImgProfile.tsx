import * as React from 'react';
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps, WrappedFieldInputProps } from 'redux-form';

const style = {
    img: {
        borderRadius: '100%',
        width: '100px',
        height: '100px'
    },
    file: {
        display: 'none'
    }
}

const handleChange = (submitProfileImg: () => void, input: WrappedFieldInputProps) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { onChange } = input
    const { files } = e.target
    if (files) {
        await onChange(files[0])
        submitProfileImg()
    }

}

interface ISubmitProps {
    submitProfileImg: () => void
    profileImage: string
}


const RenderField: React.StatelessComponent<WrappedFieldProps & ISubmitProps> = ({ input, submitProfileImg, profileImage }) =>
    <div>
        <input onChange={handleChange(submitProfileImg, input)} type='file' style={style.file} id='profileImage' />
        <label htmlFor='profileImage'>
            <img src={profileImage} style={style.img} />
        </label>
    </div>


const ImgProfile: React.StatelessComponent<InjectedFormProps<{}, ISubmitProps> & ISubmitProps> = (props) => {
    const { handleSubmit, submitProfileImg, profileImage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='profileImg' profileImage={profileImage} component={RenderField} submitProfileImg={submitProfileImg} />
        </form>
    );
}


export default reduxForm<any, any>({
    form: 'profileImg'
})(ImgProfile);