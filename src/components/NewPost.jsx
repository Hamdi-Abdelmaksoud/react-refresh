 
import classes from './NewPost.module.css';

function NewPost(proops) {


  return (
    <form className={classes.form}>
      <p>
        {/* htmlfor = for dans les formulaire html */}
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={proops.onBodyChange} />
      </p>
    
      <p>
        <la bel htmlFor="name">Your name</la>
        <input type="text" id="name" required onChange={proops.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;