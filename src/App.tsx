import { useEffect, useState } from 'react'
import { Home, Message, Search } from 'react-iconly'
import { Link, Route, Switch, useLocation } from 'wouter'

import ContactPage from './pages/ContactPage'
import SearchAddress from './pages/SearchAddress'
import Weather from './pages/Weather'

type TOption = {
  title: string
  url: string
  icon: JSX.Element
  component: () => JSX.Element
}
type TOptions = TOption[]

const options: TOptions = [
  {
    title: 'weather',
    url: '/',
    icon: <Search size="small" set="bold" />,
    component: Weather
  },
  {
    title: 'Search Address',
    url: '/address',
    icon: <Home size="small" set="bold" />,
    component: SearchAddress
  },
  {
    title: 'contact',
    url: '/contact',
    icon: <Message size="small" set="bold" />,
    component: ContactPage
  }
]

function App(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<TOption>()
  const location = useLocation()[0] // get current path (eg, '/', 'contact')

  useEffect(() => {
    setSelectedOption(options.find((option) => option.url === location))
  }, [location])

  return (
    <div
      className="max-w-screen min-h-screen antialiased before:bg-fixed before:invert p-2 before:bg-[url(/texture.svg)] before:absolute before:w-full 
    before:left-0 before:h-full before:top-0 relative py-2 justify-center flex before:-z-10  overflow-y-auto"
    >
      <div className="max-w-[1000px] w-full flex flex-col gap-4">
        <header className="w-full">
          <h1 className="text-3xl tracking-tighter leading-tight text-rose-500 uppercase mix-blend-multiply font-title">
            <Link href="/" className="hover:underline">
              Weather
            </Link>
          </h1>
          <hr className="mix-blend-multiply border-neutral-700 border-1"></hr>
        </header>
        <nav className="flex gap-4 justify-around w-full sm:justify-start">
          {options.map((option): JSX.Element => {
            return (
              <Link
                href={option.url}
                key={option.url}
                className="flex justify-center leading-none flex-col data-[selected=true]:underline hover:underline text-neutral-700 sm:last:ml-auto hover:text-black duration-200 items-center gap-2 text-sm uppercase underline-offset-8 font-mono rounded mb-2 data-[selected=true]:text-black"
                data-selected={selectedOption?.title == option.title ? true : false}
              >
                {option.icon}
                {option.title}
              </Link>
            )
          })}
        </nav>
        <main className="h-full font-mono uppercase">
          <Switch>
            {options.map((option) => (
              <Route path={option.url} component={option.component} key={option.url} />
            ))}
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default App
