import React from 'react'
import ReactDOM from 'react-dom/client'
import PokedexApp from './Components/PokedexApp.jsx'
import "./assets/css/styles.css"
import { Provider } from "react-redux"
import { store } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokedexApp />
    </Provider>
  </React.StrictMode>,
)
