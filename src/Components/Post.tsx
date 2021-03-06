import * as React from 'react';

import Footer from './Footer';

const style = {
    backgroundColor: '#fff',
    padding: '10px 15px',
    border: '1px solid #ddd',
    marginBottom: '10px',
}

const imageStyle = {
    width: '90%',
}

interface IPostProps {
    image: string
    like: () => void
    share: () => void
}

class Post extends React.Component<IPostProps> {

    public render() {
        const { image, like, share } = this.props;
        return (
            <div style={style}>
                <img style={imageStyle} src={image} />
                <Footer like={like} share={share} />
            </div>
        );
    }
}

export default Post;