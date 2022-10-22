import styles from './StatusBar.module.css'
import clipboard from '../assets/clipboard.svg'

function enableEmptyBox(isEmpty: boolean){
    if (isEmpty===true) {

    }
}

export function StatusBar() {
    const Empty = true
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.totalCount}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.doneCount}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </div>
            <div className={styles.emptyBox}>
                <img src={clipboard} alt="clipboard" />
                <h2>Você ainda não tem tarefas cadastradas</h2>
                <h2>Crie tarefas e organize seus itens a fazer</h2>
            </div>
        </>
    )
}