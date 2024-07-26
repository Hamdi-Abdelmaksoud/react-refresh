import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from "./PostsList.module.css"

function PostsList() {
  const[modalIsVisible, setModalIsVisible]=useState('true');
  function hideModal(){
    setModalIsVisible(false);
  }

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
    {modalIsVisible &&(
      <Modal onClose={hideModal}>
        <NewPost
          onBodyChange={changeBody}
          onAuthorChange={changeAuthor}
        />
      </Modal>)}
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