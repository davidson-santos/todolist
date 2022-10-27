import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { StatusBar } from './components/StatusBar'
import { Task } from './components/Task'
import { EmptyBox } from './components/EmptyBox'

interface TaskProps {
  id?: string,
  text?: string,
  isChecked?: boolean
}

function App() {
  
  
  const [taskList, newTaskList] = useState([{id: '', text: ''}])
  // console.log(addTask)
  // console.log(taskList)
  // console.log(taskList.toString)
  console.log([{id: '', text: ''}].toString)


  function addNewaddTask(textTask: string) {
    
    if(taskList.at(0)?.text == ""){
      newTaskList([{id: '', text: textTask}])
    } else {
      newTaskList([...taskList, {id: '', text: textTask}])
    }
  }

  function validEmptyBox(){
    if (taskList.at(0)?.text == "") {
      return <EmptyBox />
    } else {
      const total = taskList.map(tl => {
        return <Task id={tl.id} text={tl.text} />
      })
      return total
    }
  }

  console.log(taskList)
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <AddTask onSubmitText={addNewaddTask} />
          <StatusBar totalTasks={20} doneTasks={5} />
          {validEmptyBox()}
        </div>
      </div>
    )
}

export default App
