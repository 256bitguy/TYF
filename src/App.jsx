import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Competition from './components/Competition.jsx'
 
 
const router=createBrowserRouter([
  {
    path:'/',
     
    element:<Header/>,
    
    children:[
      {path:'/home',
      element:<Home/>

      }, 
      {
        path:'/contests',
        element:<div>
           <h1 className='font-bold text-2xl text-purple-400'>
        contest page </h1>
     
        </div>
      },
      {
        path:'/competition',
        element:<Competition/>
      },
      {
        path:'/team',
        element:<div>home page</div>
      },
      {
        path:'/contact',
        element:<div>home page</div>
      },
    ]
  },
 
])

function App() {
  

  return (
     <RouterProvider router={router}/>
  )
}

export default App
