import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

const style = {
    backgroundColor: '#fff',
    padding: '10px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'calc(100% - 30px)',
    marginBottom: '10px'
} as React.CSSProperties

const SpanStyle = {
    color: '#777',
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties


interface IInputProps {
    placeholder?: string
    label: string
}

const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = (props) => {
    const { label } = props
    return (
        <div>
            <span style={SpanStyle}>{label}</span>
            <input {...props} style={style} />
        </div>
    )
}

export default Input;