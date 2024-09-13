import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Competition from './components/Competition.jsx'
 
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {path:'home',
      element:<Home/>

      }, 
      {
        path:'/tour',
        element:<div>home page</div>
      },
      {
        path:'competition',
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
