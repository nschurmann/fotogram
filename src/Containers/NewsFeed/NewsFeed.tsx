import * as React from 'react';
import Container from '../../Components/Container';
import Post from '../../Components/Post';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import * as postThunk from "../../Thunks/Posts";
import { IPost } from '../../Models/PostsModel';

const divStyle = {
    margin: '0 auto'
}

interface INewsFeedProps {
    fetchPost: () => void
    fetched: boolean
    loading: boolean
    data: IPost
}

class NewsFeed extends React.Component<INewsFeedProps> {

    constructor(props: INewsFeedProps) {
        super(props)
        const { fetchPost, fetched } = props
        if (fetched) {
            return
        }
        fetchPost()
    }

    public render() {
        const { data } = this.props
        return (
            <Container>
                {Object.keys(data).map(x => {
                    const post = data[x]
                    return <div key={x} style={divStyle}><Post image={post.imageURL}/></div>
                })}
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { Posts: { data, fetched, fetching } } = state
    const loading = fetching || fetched
    return {
        fetched,
        loading,
        data
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postThunk, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);