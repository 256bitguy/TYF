import React from "react";

const Competition = () => {
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
              <div className="rounded-lg border h-94">
                <img
                  src="user.png"
                  className="h-3/6 border rounded-lg p-2"
                ></img>
              </div>
              
              <div className="flex justify-between w-full text-purple-300">
                <div>
                  <button className="border border-white rounded-lg p-1">
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
                  <h1 className="font-bold text-xl">First Prize</h1>
                  <h1 className="font-bold text-md">200$/-</h1>
                </div>
                <div>
                  <button className="border border-white rounded-lg p-1">
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
            <div className="m-2">
              <h1 className="text-purple-200 font-semibold text-center text-2xl">
                <span className="text-purple-500 font-bold text-3xl">
                  Judges{" "}
                </span>
               for the Events
              </h1>
              <h1 className="text-purple-200 text-center">
                The hardly speech comp
              </h1>
            </div>
            <div className="flex flex-col gap-4">
            <div className="text-center h-96 border border-black rounded-lg p-4">
              <div className="flex gap-x-5 items-center">
                <div>
                  <img
                  src='user.png'
                  className="h-14 w-14 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-purple-400 text-2xl">Vivek Raj srivstava</h1>
                </div>
              </div>
              <div className=" m-2 h-60 mt-5  ">
                <p className="text-lg text-purple-200">jsdfhksd klsdfsl kdfhsdfjhdshlfasjkdf lsdfldskjfslkf
                  skjdflkjsdflsk slkdjfslk fdskjlfhslkfhdskl skjfhslfkjs lj
                </p>
              </div>
             </div>
             <div className="text-center h-96 border border-black rounded-lg p-4">
              <div className="flex gap-x-5 items-center">
                <div>
                  <img
                  src='user.png'
                  className="h-14 w-14 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-purple-400 text-2xl">Vivek Raj srivstava</h1>
                </div>
              </div>
              <div className=" m-2 h-60 mt-5  ">
                <p className="text-lg align-left text-purple-200">jsdfhksd klsdfsl kdfhsdfjhdshlfasjkdf lsdfldskjfslkf
                  skjdflkjsdflsk slkdjfslk fdskjlfhslkfhdskl skjfhslfkjs ljjsdfhksd klsdfsl kdfhsdfjhdshlfasjkdf lsdfldskjfslkf
                  skjdflkjsdflsk slkdjfslk fdskjlfhslkfhdskl skjfhslfkjs lj
                </p>
              </div>
             </div>
             <div className="text-center h-96 border border-black rounded-lg p-4">
              <div className="flex gap-x-5 items-center">
                <div>
                  <img
                  src='user.png'
                  className="h-14 w-14 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-purple-400 text-2xl">Vivek Raj srivstava</h1>
                </div>
              </div>
              <div className=" m-2 h-60 mt-5  ">
                <p className="text-lg text-purple-200">jsdfhksd klsdfsl kdfhsdfjhdshlfasjkdf lsdfldskjfslkf
                  skjdflkjsdflsk slkdjfslk fdskjlfhslkfhdskl skjfhslfkjs lj
                </p>
              </div>
             </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Competition;
