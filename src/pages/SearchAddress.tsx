import React, { useState } from 'react'
import { Home } from 'react-iconly'

interface IAddress {
  _id: string
  _source: {
    uf: string
    cidade: string
    bairro: string
    logradouro: string
    cep: string
    complemento: string
    nome: string
    status: string
    tipo: string
    codigo_ibge: string
    type: string
    endereco: string
  }
}

interface IResponse {
  hits: {
    total: {
      value: number
    }
    hits: IAddress[]
  }
}

function SearchAddress(): JSX.Element {
  const [address, setAddress] = useState('')
  const [addressData, setAddressData] = useState<IAddress[] | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>()

  const fetchAddressData = async (): Promise<void> => {
    if (!address.trim()) return
    setIsLoading(true)
    setAddressData([])
    try {
      const addressResponse = await fetch('https://example.api.findcep.com/v1/endereco/pesquisa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Referer: 'example.com?_fid=E1NHRO71JEONCF'
        },
        body: JSON.stringify({
          id: 'pesquisa_endereco',
          params: {
            query_string: address,
            size: 10,
            from: 0
          }
        })
      })

      const addressData = (await addressResponse.json()) as IResponse

      if (!addressData.hits.total.value) return setError('Address not found.')
      if (!addressResponse.ok) return setError('Error fetching address information.')

      setAddressData(addressData.hits.hits)
    } catch (err) {
      setError('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    fetchAddressData()
  }

  return (
    <div className="h-full w-full flex flex-col gap-2 items-center p-2">
      <form onSubmit={handleSubmit} className="w-full flex gap-2 sm:gap-4">
        <input
          type="text"
          placeholder="Address"
          maxLength={100}
          value={address}
          onChange={(e): void => setAddress(e.target.value)}
          className="flex-grow text-xs sm:text-sm uppercase p-2 py-1 rounded outline-1 outline outline-neutral-700 mix-blend-multiply selection:bg-rose-500 selection:mix-blend-multiply selection:text-white"
        />
        <button
          className="bg-none font-title text-lg sm:text-3xl uppercase border-none disabled:text-black hover:mix-blend-multiply text-rose-500 hover:underline active:underline active:text-black"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {isLoading && <p className="mt-2 text-sm">just a few seconds...</p>}
      {addressData && !isLoading && (
        <div className="w-full flex flex-col gap-2 ">
          <h2 className="text-lg">addresses</h2>
          <ul className="space-y-2">
            {addressData.map((address) => (
              <li
                key={address._id}
                className="bg-rose-500 p-3 mix-blend-multiply rounded text-black"
              >
                <div className="flex gap-1 items-center">
                  <Home size="small" set="bold" />
                  <p className="font-bold"> {address._source.endereco}</p>
                </div>
                <hr className="border-neutral-800 my-1" />
                <p className="leading-none text-sm">{address._source.bairro}</p>
                <p className="leading-none text-sm">
                  {address._source.cidade}, {address._source.uf}
                </p>
                <p className="leading-none text-sm">CEP {address._source.cep}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="text-rose-500 mt-2">{error}</p>}
    </div>
  )
}

export default SearchAddress
