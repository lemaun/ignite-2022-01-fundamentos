import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'


export function Sidebar() {
  return (
    <aside className={styles.sidebar} >
      <img className={styles.cover} src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" alt="imagem de capa" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/lemaun.png" />

        <strong>Leandro Silva</strong>
        <span>CTO</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}