import styles from './AddTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface AddTaskProps {
    onSubmitText: Function
}

function AddTask ({onSubmitText}: AddTaskProps) {

    const [newTask, setNewTask] = useState('')
    
    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        onSubmitText(newTask)
        setNewTask('')
    }

    console.log(newTask)

    return (
        <div className={styles.addTask}>
            <form onSubmit={handleCreateNewTask} >
                <textarea 
                    name="new task"
                    placeholder='Adicione uma nova tarefa'
                    value={newTask} 
                    required 
                    onChange={handleNewTaskChange}
                />
                <button type="submit" >Criar <PlusCircle size={16}/> </button>
            </form>
        </div>
    )
}

export default AddTask