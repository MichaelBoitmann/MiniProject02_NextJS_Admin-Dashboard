"use client"

import { SearchIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Search() {
  const params = new URLSearchParams(window.location.search)
  const router = useRouter()
  const pathname = usePathname()

  function handleSearch(value: string) {
    if (value) {
      params.set('b', value)
    } else {
      params.delete('b')
    }
    
    router.replace(`${pathname}?${params.toString()}`)


    // console.log(params.get("b"))
  }

  return (
    <div className="relative mt-5 max-w-md">
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 items-center pl-3">
          <SearchIcon className="mt-3 h-4 w-4 text-gray-400" />
        </div>
        <input 
          type="text"
          name="search"
          autoComplete="off"
          id="search"
          className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search by name..."
          onChange={event => handleSearch(event.target.value)}
        />
      </div>
    </div>
  )
}
