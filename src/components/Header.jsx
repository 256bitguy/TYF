import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Data from './shared/Data'
import Above from './shared/Above'
import Bottom from './Bottom'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full  bg-gradient-to-r from-custom-purple-dark from-5% via-custom-purple-medium via-55% to-custom-purple-medium to-70% ">

        <Disclosure as="nav" className="bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-purple-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            
          </DisclosurePanel>
        </Disclosure>

        <header className=" bg-transparent  ">
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
                    <img src='user.png' className='h-96 border rounded-lg p-2'></img>
                    </div>
                    <h1 className='text-center text-purple-400 text-3xl font-semibold'>Vivek Raj Srivastava</h1>
                    <div className='text-center w-11/12 text-purple-200'>
                        <p>
                        Currently pursuing Journalism, Soumya Mishra is an aspiring news anchor with extensive oratory expertise and ample experience in Model UN, debates, and youth parliaments.
                        </p>
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
        <Bottom/>
      </div>
    </>
  )
}
