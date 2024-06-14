import React from 'react'
import Signup from './Components/Signup'

export default function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-full flex items-center justify-center ">
      <Signup/>
      </div>
      {/* <div className='hidden lg:flex relative w-1/2 h-full items-center justify-center bg-gray-200'>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin'/>
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
      </div> */}
      
    </div>
    
  )
}



// import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';
// import { useEffect, useState } from 'react'
// import Home from './home'
// import Login from './login'

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [email, setEmail] = useState('')

//   return (
//     <div className="App">
//      <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
