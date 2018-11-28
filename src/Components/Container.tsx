import * as React from 'react';


const style = (center: boolean): React.CSSProperties => ({
    backgroundColor: '#eee',
    padding: '10px 15px',
    height: 'calc(100vh - 20px)',
    width: 'calc(100vw - 30px)',
    display: 'flex',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
    flexDirection: 'column'
})

interface IContainerProps {
    center?: boolean
}

const Container: React.StatelessComponent<IContainerProps> = (props) => {
    const { children, center = false } = props;
    return (
        <div style={style(center)}>
            {children}
        </div>
    );
}

export default Container;