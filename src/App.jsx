import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';
function App() {
  const[modalIsVisible, setModalIsVisible]=useState(true);
  function hideModal(){
    setModalIsVisible(false);
  }
  function showModal(){
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPost={hideModal}/>
      </main>
    </>
  );
}

export default App
