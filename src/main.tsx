import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { useGLTF } from '@react-three/drei'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
useGLTF.preload(`${import.meta.env.BASE_URL}wall.glb`)

