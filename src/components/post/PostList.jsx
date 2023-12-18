import { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from "../../store/modules/postSlice";

const PostList = () => {
    const { posts, text } = useSelector( state => state.postR )
    const dispatch  = useDispatch()
    useEffect( () => {
        dispatch( getPosts(text) )
    }, [text])

    return (
        <ul>
           {
            posts.map( item => <PostItem key={item.objectID} item={item} />)
           }        
        </ul>
    );
};

export default PostList;