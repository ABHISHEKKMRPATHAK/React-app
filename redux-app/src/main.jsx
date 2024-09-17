
import { createRoot } from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import Counter from './features/counter/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Counter/>
  </Provider>
  
  
)