import React, { useEffect } from 'react'

import { useIndexQuery } from './store/api';

import { store } from './store/store';
import reactLogo from './assets/react.svg'
import './App.css'
import { FileInput } from './FileInput'
import { PropsComponent } from '../PropsComponent';

function App() {

  const { data, isLoading, error } = useIndexQuery();


  useEffect(() => {
    console.log('Result of useGetIndexQuery ', data);
  }, [data])

  const options = {
    name: 'Tamy',
    lastname: 'Vivas',
    age: 31
  }
  const condition = true;
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <FileInput />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    // <>
    //   {condition ? <PropsComponent {...options} /> : false
    //   }
    // </>

  )
}

export default App
