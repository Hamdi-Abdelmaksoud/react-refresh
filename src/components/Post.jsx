const names=['User1','User2'];
function Post(){
  // Math.random  retourne un nbr decimal aléatoire entre 0 inclus et 1 exclus
  const choseName =Math.random() >0.5? names[0] : names[1];
  return (
    <div>
      <p>{choseName}</p>
      <p>React.js is awesome</p>
    </div>
  );
}

export default Post;
