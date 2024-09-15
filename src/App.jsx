import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Competition from './components/competition/Competition.jsx'
import Team from './components/Team/Team.jsx'
import Contest from './components/contests/Contest.jsx'
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
