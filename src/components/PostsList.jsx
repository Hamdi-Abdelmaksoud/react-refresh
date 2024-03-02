import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css"
 
function PostsList() {
  const [entredBody, setEntredBody] = useState('');
  function changeBody(event) {
    setEntredBody(event.target.value);
  }
  const [entredAuthor, setEntredAuthor] = useState('');
  function changeAuthor(event) {
    setEntredAuthor(event.target.value);
  }
  return (
  <>
      <NewPost onBodyChange={changeBody} onAuthorChange={changeAuthor} />
      <ul className={classes.posts}>
        <Post author={entredAuthor} body={entredBody} />
        <Post author="Ali" body="message de Ali" />
        <Post author="Mika" body="message de Mika " />
        <Post author="Rica" body="message de Rica" />
      </ul>
  </>
  )
}
export default PostsList;