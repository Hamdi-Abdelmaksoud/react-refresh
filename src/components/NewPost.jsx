 
import classes from './NewPost.module.css';
 
function NewPost(props) {
 
  return (
    <form className={classes.form}>
      <p>
        {/* htmlfor = for dans les formulaire html */}
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
    
      <p>
        <la bel htmlFor="name">Your name</la>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;