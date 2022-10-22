import styles from './Task.module.css'
import { Circle} from 'phosphor-react'
import { Check } from '../assets/Check'
import { Trash } from '../assets/Trash'

interface TaskProps {
    id?: string,
    text?: string,
    isChecked?: boolean
}

export function Task({id,text,isChecked}: TaskProps) {
    text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in, nemo sunt corrupti modi accusamus expedita nihil dolor aliquam minima laudantium natus esse quisquam maiores aut libero consequuntur maxime harum.'
    isChecked = false

    let circle = styles.circle
    let pTag = styles.pTag

    if (isChecked) {
        circle = styles.checkedCircle
        pTag = styles.checkedPTag
    }


    return (
        // [styles.task, styles.checked].join(' ')
        <div className={styles.task} id={id}>
                <button className={circle}>
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