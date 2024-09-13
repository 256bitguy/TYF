import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Competition from './components/Competition.jsx'
 
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    errorElement:      <div className="h-screen  bg-gradient-to-r from-custom-purple-dark from-5% via-custom-purple-medium via-55% to-custom-purple-medium to-70% ">
    <div className='flex justify-center items-center bg-transparent'>
      <h1 className='font-bold text-2xl text-purple-400'>
        Sorry!! for the inconvenience caused you can go back </h1>
    </div>
    </div>,
    children:[
      {path:'home',
      element:<Home/>

      }, 
      {
        path:'contests',
        element:<div>
           <h1 className='font-bold text-2xl text-purple-400'>
        contest page </h1>
     
        </div>
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
