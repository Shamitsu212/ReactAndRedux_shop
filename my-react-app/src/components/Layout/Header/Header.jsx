import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header({text}) {

  return (
    <header className={styles.header}>

        <div className={styles.header__PageName}>
            {text}
        </div>

        <nav className={styles.header__Nav}>
            <Link className={styles.Nav__Link} to="/">Каталог</Link>
            <Link className={styles.Nav__Link} to="/cart">Корзина</Link>
        </nav>
    </header>
  )
}

export default Header
