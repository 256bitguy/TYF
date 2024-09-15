import React, { useState } from "react";
 
import Details from "./Details";
import Judge from "./judge";
 const prize=[
  {
    src:'user.png',
    alt:'user',
    title:"First Prize",
    cash:'200$/-'
  },
  {
    src:'tyf.png',
    alt:'asdf',
    title:"Second Prize",
    cash:'100$/-'
  }, {
    src:      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
    alt:'user',
    title:"Third Prize",
    cash:'50$/-'
  },  
 ]

const Competition = () => {
  const [i,setI]=useState(0);
  function plusOne(){
    setI((i)=>i==(prize.length-1)?0:i+1);
     
  }
  function minusOne(){
    setI((i)=>i==0?(prize.length-1):i-1)
  }
  return (
    <div>
      {" "}
      <div>
        {" "}
        <header className=" bg-transparent  ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 gap-4 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight  text-center text-purple-500 pb-4 ">
              Speech Competition
            </h1>
            <h1 className="text-xs w-full font-bold tracking-tight text-center text-purple-200 ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </h1>
          </div>
        </header>
        <main className="flex flex-col ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-custom-blue-dark lg:px-8">
            <h1 className="text-center text-gray-600 text-3xl font-semibold">
              Bliss Orator
            </h1>
            <h1 className="text-center text-gray-600 text-xl font-semibold">
               Topic of the Speech
            </h1>

            <div className="items-center flex flex-col mt-5 gap-4">
              <div className="rounded-lg border min-h-64">
                <img
                  src={prize[i].src}
                  className="h-80 w-80 border rounded-lg p-2"
                ></img>
              </div>
              
              <div className="flex justify-between w-full text-purple-300">
                <div>
                  <button className="border border-white rounded-lg p-1" onClick={()=>minusOne()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl">{prize[i].title}</h1>
                  <h1 className="font-bold text-md">{prize[i].cash}</h1>
                </div>
                <div>
                  <button className="border border-white rounded-lg p-1" onClick={()=>plusOne()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
           <Details/>
          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            
          <Judge/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Competition;
