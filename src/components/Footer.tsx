import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        an adaept <img src="/assets/icon/favicon.png" alt="adaept logo" className={styles.logo} /> project
      </footer>
    </>
  )
}
