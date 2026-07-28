import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Notfound from './components/Notfound/Notfound'
import Postdetails from './components/Postdetails/Postdetails';

let router = createBrowserRouter([
  {path : "" , element : <Layout/> , children : [
    {index : true , element : <Home/>},
    {path : 'blog' , element : <Blog/>},
    {path : 'blog/:slug' , element : <Postdetails/>},
    {path : 'about' , element : <About/>},
    {path : '*' , element : <Notfound/> }
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
