import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { StatusBar } from './components/StatusBar'

function App() {
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <AddTask />
          <StatusBar />
        </div>
      </div>
    )
}

export default App
