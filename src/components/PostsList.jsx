import Post from "./Post";
import classes from "./PostsList.module.css"
function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Alain" body="message de Alain" />
      <Post author="Ali" body="message de Ali" />
      <Post author="Mika" body="message de Mika " />
      <Post author="Rica" body="message de Rica" />
    </ul>
  )
}
export default PostsList;