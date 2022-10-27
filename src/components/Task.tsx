import styles from './Task.module.css'
import { Circle} from 'phosphor-react'
import { Check } from '../assets/Check'
import { Trash } from '../assets/Trash'
import { useState } from 'react'

interface TaskProps {
    id?: string,
    text?: string
}

export function Task({id,text}: TaskProps) {
    // text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in, nemo sunt corrupti modi accusamus expedita nihil dolor aliquam minima laudantium natus esse quisquam maiores aut libero consequuntur maxime harum.'
    const [stateCheck, newStateCheck] = useState(false)

    let circle = styles.circle
    let pTag = styles.pTag

    function handleCheck() {
        newStateCheck(!stateCheck)
    }

    if (stateCheck) {
        circle = styles.checkedCircle
        pTag = styles.checkedPTag
    }


    return (
        // [styles.task, styles.checked].join(' ')
        <div className={styles.task} id={id}>
                <button className={circle} onClick={handleCheck}>
                    <Circle weight='bold' />
                    <Check />
                </button>
                <p className={pTag}>{text}</p>
                <button>
                    <Trash />
                </button>
        </div>
    )
}