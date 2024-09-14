import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Competition from './components/Competition.jsx'
import Team from './components/Team.jsx'
import Contest from './Contest.jsx'
import Connect from './components/Connect.jsx'
 
 
const router=createBrowserRouter([
  {
    path:'/',
     
    element:<Header/>,
    
    children:[
      {path:'/',
      element:<Home/>

      }, 
       
      {
        path:'/competition',
        element:<Competition/>
      },
      {
        path:'/team',
        element:<Team/>
      },
      {
        path:'/contact',
        element:<Connect/>
      },
      {
        path:'/contests',
        element:<Contest/>
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
