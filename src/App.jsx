import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import { Sidebar } from './components/Sidebar';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Saulo Alves Magalhães"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cum dolorem sunt  quos quidem nemo odit cupiditate ipsa odio temporibus"
          />
          <Post
            author="Carolina Ribeiro Barbosa"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cum dolorem sunt  quos quidem nemo odit cupiditate ipsa odio temporibus"
          />
        </main>
      </div>
    </>
  );
}

export default App;
