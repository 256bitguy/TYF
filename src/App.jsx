import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/shared/header'
import Home from './components/shared/header'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/tour',
    element:<div>home page</div>
  },
  {
    path:'/comp',
    element:<div>home page</div>
  },
  {
    path:'/team',
    element:<div>home page</div>
  },
  {
    path:'/contact',
    element:<div>home page</div>
  },
])

function App() {
  

  return (
   <RouterProvider router={router}/>

    
  )
}

export default App
