import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from "./PostsList.module.css"
import { useState, useEffect } from "react";

function PostsList({ isPosting, onStopPost }) {
const[isFetching, setIsFetching]=useState(false);
  const [posts, setPosts] = useState([]);
useEffect(()=>{
  async function fetchPosts() {
    setIsFetching(true);
    const response = await fetch('http://localhost:8080/posts')
    const resData =await response.json();
  setPosts(resData.posts);
  setIsFetching(false)
  }
  fetchPosts();
},[]);
  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      { isPosting && (
        <Modal onClose={onStopPost}>
          <NewPost
            onAddPost={addPostHandler}
            onCancel={onStopPost}
          />
        </Modal>) }
        {!isFetching && posts.length > 0 && (
      <ul className={classes.posts}>
     {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
      </ul>
       )}
      {!isFetching &&  posts.length === 0 && 
      (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>The are no posts yet.</h2> 
          <p>Start adding some!</p>
       </div>
      )
      }
      {isFetching && <p>Loading posts ...</p>}
    </>
  );
}
export default PostsList;