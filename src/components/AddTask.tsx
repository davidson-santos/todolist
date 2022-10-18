import styles from './AddTask.module.css'
import { PlusCircle } from 'phosphor-react'
function AddTask () {
    return (
        <div className={styles.addTask}>
            <form action="#">
                <textarea name="" id="" placeholder='Adicione uma nova tarefa'></textarea>
                <button type="submit">Criar <PlusCircle size={16}/> </button>
            </form>
        </div>
    )
}

export default AddTask