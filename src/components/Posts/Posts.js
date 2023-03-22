import React from 'react'
import Post from './Post/Post'
import useStyles from './style';
import { useSelector } from 'react-redux';


const Posts = () => {

    const posts = useSelector((state) => state.posts);

    console.log(posts);
    
    const classes = useStyles();
    return(
       <>
       <Post />
       <Post />
       <Post />
       </>
    )
}


export default Posts