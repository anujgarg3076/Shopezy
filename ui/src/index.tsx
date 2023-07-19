import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const app = document.getElementById('app')
console.log(app)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(app!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
