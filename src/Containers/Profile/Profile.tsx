import * as React from 'react';
import ImgProfile from '../../Components/ImgProfile';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import { IPostData } from '../../Models/PostsModel';
import { chunk } from 'lodash'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postThunk from "../../Thunks/Posts";
import * as userThunk from "../../Thunks/Users";
import { ThunkDispatch } from 'redux-thunk';
import services from '../../Services'
import { submit } from 'redux-form'
import { IState } from '../../Models/State';

const { auth } = services

const style = {
    container: {
        padding: '15px',
    },
    Row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    img: {
        width: '100px'
    }
}

interface IProfileProps {
    fetchPost: () => void
    submitProfileImg: () => void
    handleProfileImageSubmit: (a: {file: File}) => void
    fetched: boolean
    loading: boolean
    data: IPostData[][]
    profileImage: string
}


class Profile extends React.Component<IProfileProps> {

    constructor(props: IProfileProps) {
        super(props)
        const { fetchPost, fetched } = props
        if (fetched) {
            return
        }
        fetchPost()
    }

    public render() {
        const { data, submitProfileImg, handleProfileImageSubmit, profileImage } = this.props
        return (
            <div style={style.container}>
                <div style={style.Row}>
                    <ImgProfile 
                    onSubmit={handleProfileImageSubmit} 
                    submitProfileImg={submitProfileImg}
                    profileImage={profileImage} />
                    <Button>Añadir Imágen</Button>
                </div>
                {data.map((x, i) =>
                    <div key={i} style={style.Row}>
                        {x.map(y =>
                            <Card key={y.imageURL}><img style={style.img} src={y.imageURL}/></Card>
                            )}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    const { Posts: { data, fetched, fetching } } = state
    const { Users: { profileImage: temPI } } = state

    const profileImage = temPI || 'http://placekitten.com/g/100/100'
    const loading = fetching || fetched

    const filtered = Object.keys(data).reduce((acc, el) => {
        if (data[el].userId !== (auth.currentUser && auth.currentUser.uid)) {
            return acc
        }
        return acc.concat(data[el])
    }, [] as IPostData[])

    return {
        fetched,
        loading,
        data: chunk(filtered, 3),
        profileImage
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators({
    ...postThunk,
    ...userThunk,
    submitProfileImg: () => submit('profileImg'),
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);