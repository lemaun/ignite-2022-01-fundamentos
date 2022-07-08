import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Leandro Silva"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam assumenda tempore ipsam ad tempora est vel provident voluptatem eveniet. Ad odio culpa cum eaque neque quia rem tenetur amet." 
          />
          <Post 
            author="Jão Balão"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi sapiente cumque. Aperiam, dolore! Ipsam nam quam sunt hic quisquam accusantium voluptatibus. Error alias facere, in veniam omnis saepe praesentium?" 
          />
        </main>
      </div>

    </div>
  )
}

