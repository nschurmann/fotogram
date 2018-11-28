import * as React from 'react';

const style = (block: boolean) => ({
    backgroundColor: '#00D1B2',
    padding: '10px 15px',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    width: block ? '100%' : undefined
})

interface IButton {
    block?: boolean
}

const Button: React.StatelessComponent<IButton> = (props) => {
    const { block = false } = props
    return (
        <button {...props} style={style(block)} />
    );
}

export default Button;