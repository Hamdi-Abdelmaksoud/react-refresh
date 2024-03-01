import Post from "./components/Post";
function App() {
  return(
  <main>
    {/* proops=attribute */}
    <Post author="Alain" body="message de Alain"/>
    <Post author="Ali" body="message de Ali" />
    <Post author="Mika" body="message de Mika "/>
    <Post author="Rica" body="message de Rica"/>
  </main>);

}

export default App
