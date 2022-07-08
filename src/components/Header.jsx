import styles from './Header.module.css'

import igniteLogo from '../images/ignite-logo.svg'

console.log(igniteLogo)

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="lgotipo ignite"/>
    </header>
  )
}