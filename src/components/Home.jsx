import React from 'react'
import Above from './shared/Above'
import Data from './shared/Data'
import Bottom from './Bottom'

export default  function Home() {
  return (
    <div> <header className=" bg-transparent  ">
    <Above/>
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 gap-4 lg:px-8">
    <h1 className="text-4xl font-bold tracking-tight  text-center text-purple-500 pb-4 ">The Yogesh Forum</h1>
    <h1 className="text-xs w-full font-bold tracking-tight text-center text-purple-200 ">🌟 A platform for poets, debaters, youth parliamentarians & orators to shine! 🌟</h1>
  </div>
</header>
<main className='flex flex-col '>
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
         
        <div className='items-center flex flex-col gap-4'>
            <div className='rounded-lg border h-94'>
            <img src='tyf.png' className='h-96 border rounded-lg p-2'></img>
            </div>
            <h1 className='text-center text-purple-400 text-3xl font-semibold'>Name of the Founder panel / designed page</h1>
            <div className='text-center w-11/12 text-purple-200'>
                <p>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore quisquam illo ut labore aperiam sit iusto adipisci laudantium aut, saepe provident dolor suscipit. Eos officiis architecto fuga impedit inventore?                </p>
            </div>
         </div>
  </div>
  <Data/>
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className='m-2'>
        <h1 className='text-purple-200 font-semibold text-center text-2xl'><span className='text-purple-500 font-bold text-3xl'>UpComing </span>Events</h1>
            <h1 className='text-purple-200 text-center'>The hardly speech comp</h1>

        </div>
        <div className='items-center flex flex-col gap-4'>
            <div className='rounded-lg border border-custom-purple-light h-94'>
            <img src='uset.jpg' className='h-96 border rounded-lg p-2'></img>
            </div>
            <h1 className='text-center text-purple-400 text-5xl font-semibold'>Bliss Orator</h1>
            <ul className='text-white text-sm flex flex-col gap-y-2'>
            <li><span className='text-purple-400 font-bold'>Info:</span>    August 8, 2028, Online mode</li>
            <li><span className='text-purple-400 font-bold'>Register:</span>    August 8, 2028, Online mode</li>
            <li><span className='text-purple-400 font-bold'>Entry fees:</span>    August 8, 2028, Online mode</li>
                <li><span className='text-purple-400 font-bold'>Prize Pool:</span>    August 8, 2028, Online mode</li>
                
                 
            </ul>
            <button className='h-12 w-32 text-purple-600 border rounded-md bg-purple-200 border-white'>Register</button>
        </div>
  </div>
  
</main>
<Bottom/></div>
  )
}

