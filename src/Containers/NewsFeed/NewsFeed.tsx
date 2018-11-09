import * as React from 'react';
import Container from '../../Components/Container';
import Post from '../../Components/Post';

const divStyle = {
    margin: '0 auto'
}

class NewsFeed extends React.Component {

    public render() {
        return (
            <Container>
                <div style={divStyle}>
                    <Post image='http://placekitten.com/300/200'/>
                </div>
            </Container>
        );
    }
}

export default NewsFeed;