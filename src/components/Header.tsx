import styles from './Header.module.css'
import toDoLogo from '../assets/todo-logo.svg'

function Header() {
    return (
        <div className={styles.header}>
            <img src={toDoLogo} alt="Logo To Do" />
        </div>
    )
}
export default Header