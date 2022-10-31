import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { StatusBar } from './components/StatusBar'
import { Task } from './components/Task'
import { EmptyBox } from './components/EmptyBox'
import {v4 as uuidv4} from 'uuid'


function App() {
  
  const [taskList, newTaskList] = useState([{id: '', text: '', isChecked: false}])

  function addNewaddTask(textTask: string) {//adição de tarefa submetida pelo formulário
    if(taskList.at(0)?.text == ""){ //substituição do valor padrão pela primeira tarefa da lista
      newTaskList([{id: uuidv4(), text: textTask, isChecked: false}])
    } else {
      newTaskList([...taskList, {id: uuidv4(), text: textTask, isChecked: false}])
    }
  }

  function handleChangeCheck (toChangeID: string, newCheck: boolean) {//controlador de mudança de status das tarefas
    const taskListWithCheck = taskList.map(tl => {
        if (tl.id == toChangeID){
          return {id: tl.id, text: tl.text, isChecked: newCheck}
        }else {
          return {id: tl.id, text: tl.text, isChecked: tl.isChecked}
        }
    })
    console.log(taskListWithCheck)
    newTaskList(taskListWithCheck)
  }

  function validEmptyBox(){ //controlador do conteúdo da tela
    if (taskList.at(0)?.text == "") {
      return (
        <>
          <StatusBar />
          <EmptyBox />
        </>
      )
    } else 
    {
      let done = 0
      const total = taskList.map(tl => {
        if(tl.isChecked) done++
        return <Task key={tl.id} id={tl.id} text={tl.text} isChecked={tl.isChecked} changeCheck={handleChangeCheck} deleteThis={deleteTask}/>
      })

      return (<><StatusBar totalTasks={total.length} doneTasks={done} />  {total}</>)
    }
  }

  function deleteTask(toDeleteID: string){
    const listWithoutDeletedTask = taskList.filter(tl => {return tl.id != toDeleteID})
    newTaskList(listWithoutDeletedTask)
  }

  console.log(taskList)
    
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTask onSubmitText={addNewaddTask} />
        {validEmptyBox()}
      </div>
    </div>
  )
}

export default App
