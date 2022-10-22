import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { StatusBar } from './components/StatusBar'
import { Task } from './components/Task'

function App() {
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <AddTask />
          <StatusBar />
          <Task />
          <Task />
        </div>
      </div>
    )
}

export default App
