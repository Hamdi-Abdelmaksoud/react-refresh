import classes from './Post.module.css'
// const names=['User1','User2'];
function Post(proops){
  // Math.random  retourne un nbr decimal aléatoire entre 0 inclus et 1 exclus
  // const choseName =Math.random() >0.5? names[0] : names[1];
  return (
    <li className={classes.post}>
      <p className={classes.author}>{proops.author}</p>
      <p className={classes.text}>{proops.body}</p>
    </li>
  );
}

export default Post;
