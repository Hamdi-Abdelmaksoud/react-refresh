const names=['User1','User2'];
function Post(proops){
  // Math.random  retourne un nbr decimal aléatoire entre 0 inclus et 1 exclus
  const choseName =Math.random() >0.5? names[0] : names[1];
  return (
    <div>
      <p>{proops.author}</p>
      <p>{proops.body}</p>
    </div>
  );
}

export default Post;
