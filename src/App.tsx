import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import Header from './components/Header'
import AddTask from './components/AddTask'

function App() {
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <AddTask />

        </div>
      </div>
    )
}

export default App
