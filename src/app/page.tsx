"use client"
import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const {push} = useRouter()
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Enter Your Name</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" 
          placeholder="Type Your Name" 
          value={inputValue}
          className="text-black rounded border-gray-300 border p-2 w-full outline-none" 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white duration-300">Submit</button>
      </form>
      </div>
    </div>
  )
}
