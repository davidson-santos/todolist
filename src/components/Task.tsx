import styles from './Task.module.css'
import { Circle} from 'phosphor-react'
import { Check } from '../assets/Check'
import { Trash } from '../assets/Trash'
import { useState } from 'react'

export interface TaskProps {
    id: string,
    text: string,
    isChecked: boolean,
    changeCheck: (idChange: string, newCheckValue: boolean) => void,
    deleteThis: (idDelete: string) => void
}

export function Task({id,text,isChecked, changeCheck, deleteThis}: TaskProps) {
    // text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in, nemo sunt corrupti modi accusamus expedita nihil dolor aliquam minima laudantium natus esse quisquam maiores aut libero consequuntur maxime harum.'
    const [stateCheck, newStateCheck] = useState(false)

    function handleDelete(){
        deleteThis(id)
    }

    function handleCheck() {
        newStateCheck(!stateCheck)
        changeCheck(id, !stateCheck)
    }
    
    let circle = styles.circle
    let pTag = styles.pTag



    if (stateCheck) {
        circle = styles.checkedCircle
        pTag = styles.checkedPTag
    }

    isChecked = stateCheck
    console.log(isChecked)
    return (
        // [styles.task, styles.checked].join(' ')
        <div className={styles.task}>
                <button className={circle} onClick={handleCheck}>
                    <Circle weight='bold' />
                    <Check />
                </button>
                <p className={pTag}>{text}</p>
                <button onClick={handleDelete}>
                    <Trash />
                </button>
        </div>
    )
}