import styles from './StatusBar.module.css'

interface StatusBarProps {
    totalTasks?: number,
    doneTasks?: number
}

export function StatusBar({totalTasks = 0, doneTasks = 0}: StatusBarProps) {

    return (
        <>
            <div className={styles.bar}>
                <div className={styles.totalCount}>
                    <p>Tarefas criadas</p>
                    <span>{totalTasks}</span>
                </div>
                <div className={styles.doneCount}>
                    <p>Concluídas</p>
                    <span>{totalTasks===0 ? doneTasks : doneTasks + " de " + totalTasks}</span>
                </div>
            </div>

        </>
    )
}