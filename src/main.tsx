import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css';
import "./App.less";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
