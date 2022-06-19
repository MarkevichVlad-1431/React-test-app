import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../store/PostsSlice";
import Post from './Post/Post';
import s from './Posts.module.scss';

const Posts = () => {

    const dispatch = useDispatch();
    const Posts = useSelector(state => state.Posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const ArrPosts = Posts.posts.map(item => <Post
        id = {item.id}
        key = {item.id}
        name = {item.name}
        body = {item.body}
        title = {item.title}
    />)

    return (
        <div className={s.bodyPosts}>
           {Posts.status === 'loading' && <h1>Данные загружаются</h1>}
           {Posts.status === 'reject' && <h1>Error Data</h1>}
           {ArrPosts}
        </div>
    )
}


export default Posts;