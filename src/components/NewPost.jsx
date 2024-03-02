import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {

  const [entredBody, setEntredBody] = useState('');
  function changeBody(event) {
    setEntredBody(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        {/* htmlfor = for dans les formulaire html */}
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBody} />
      </p>
      <p>{entredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;