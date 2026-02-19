// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-ai_blue mb-2">
          Kenza TAZI
        </h1>
        <p className="text-slate-300">Portfolio Ingénierie AI & DATA en construction...</p>
        <div className="mt-4 px-4 py-2 bg-ai_blue/20 text-ai_blue rounded-full inline-block text-sm font-mono">
          Status: Ready for deployment
        </div>
      </div>
    </div>
  )
}

export default App