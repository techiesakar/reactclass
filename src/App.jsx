import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(1)



  return (
    <div className="h-screen bg-slate-100 w-full flex items-center justify-center">
      <div className="max-w-3xl flex gap-3 items-center justify-center w-full p-6 rounded-xl bg-gray-200 shadow border border-gray-200">

        {/* Increase Button */}
        <button onClick={() => setCounter(counter - 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">Decrease</button>
        <span className="inline-block px-4 py-2 bg-white rounded-lg font-semibold">
          {counter}
        </span>

        {/* Increase Button */}
        <button onClick={() => setCounter(counter + 1)} className="px-4 py-2 bg-green-500 text-white rounded-lg">Increase</button>
      </div>
    </div>

  )
}

export default App