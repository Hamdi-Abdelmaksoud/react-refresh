import { useState } from "react";
import classes from './NewPost.module.css';
import { Link } from "react-router-dom";
import Modal from "./Modal";
function NewPost({ onAddPost }) {
  const [entredBody, setEntredBody] = useState('');
  function changeBody(event) {
    setEntredBody(event.target.value);
  }
  const [entredAuthor, setEntredAuthor] = useState('');
  function changeAuthor(event) {
    setEntredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();//empecher le comportement par défaut du fromulaire 'submit'
    const postData = {
      body: entredBody,
      author: entredAuthor
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        {/* htmlfor = for dans les formulaire html */}
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBody} />
      </p>

      <p>
        <la bel htmlFor="name">Your name</la>
        <input type="text" id="name" required onChange={changeAuthor} />
      </p>
      <p className={classes.actions}>
        <Link to="/" type="button"  >Cancel</Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;