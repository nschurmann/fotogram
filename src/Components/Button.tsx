import * as React from 'react';

const style = (block: boolean) => ({
    backgroundColor: '#00D1B2',
    padding: '10px 15px',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    width: block ? '100%': undefined
})

interface IButton {
    block?: boolean
}

class Button extends React.Component<IButton> {

    public render() {
        const { block = false } = this.props
        return (
            <button {...this.props} style={style(block)}/>
        );
    }
}

export default Button;