import styles from './EmptyBox.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyBox() {
    return (
        <div className={styles.emptyBox}>
            <img src={clipboard} alt="clipboard" />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <h2>Crie tarefas e organize seus itens a fazer</h2>
        </div>
    )
}