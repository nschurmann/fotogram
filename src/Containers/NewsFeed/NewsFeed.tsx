import * as React from 'react';
import Container from '../../Components/Container';
import Post from '../../Components/Post';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import * as postThunk from "../../Thunks/Posts";
import { IPost } from '../../Models/PostsModel';
import { IState } from '../../Models/State';

const divStyle = {
    margin: '0 auto'
}

interface INewsFeedProps {
    fetchPost: () => void
    like: (a: string) => void
    share: (a : string) => void
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
        console.log(data)
        return (
            <Container>
                {Object.keys(data).map(x => {
                    const post = data[x]
                    return <div key={x} style={divStyle}><Post like={this.handleLike(x)} share={this.handleShare(x)} image={post.imageURL}/></div>
                })}
            </Container>
        );
    }

    private handleLike = (id: string) => () => {
        const { like } = this.props
        like(id)
    }
     private handleShare= (id: string) => () => {
        const { share } = this.props
        share(id)}
}

const mapStateToProps = (state: IState) => {
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