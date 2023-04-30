import React, { useEffect, useState } from "react"
import Result from "./Result"
import { IResult } from "./types"

function App() {
  const [term, setTerm] = useState<string>("")
  const [result, setResult] = useState<[] | [string] | [IResult]>([])
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    getResult()
  }

  function getResult() {
    if (term !== "") {
      fetch(`https://dictionaryapi.com/api/v3/references/medical/json/${term}?key=${import.meta.env.VITE_APIKEY}`)
        .then((res) => { return res.json() })
        .then((data) => {
          setResult(data)
          console.log(data)
        })
    }
  }
  useEffect(() => {
    getResult()
  }, [term])
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3 bg-[url('/bg.avif')] bg-no-repeat bg-cover" >
      <h2 className="text-5xl font-mono font-bold text-blue-600">Med Dictionary</h2>
      <p className="font-mono underline">"Your comprehensive guide to medical terminology"</p>
      <div className="lg:w-1/2 w-11/12 flex flex-col gap-3">
        <form className="searchBox rounded-md flex border-blue-600 border-4 justify-between" onSubmit={handleSubmit}>
          <input type="text" name="q" className=" outline-none p-2 w-full " value={term} onChange={(e) => setTerm(e.currentTarget.value)} />
          <button type="submit" className="bg-blue-600 w-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.425 14.75l4.8 4.8a.75.75 0 1 1-1.06 1.06l-4.8-4.8a7.5 7.5 0 1 1 1.06-1.06zM7.5 12A4.5 4.5 0 1 0 12 7.5 4.5 4.5 0 0 0 7.5 12z" fill="#fff" />
            </svg>
          </button>
        </form>
        {term == "" ? "" :
          <div className="h-96 p-3 text-black bg-white border-solid  bg-opacity-50 w-full overflow-y-scroll">
            {
              result.length > 0 ?
                typeof result[0] === "string" ?
                  <>
                    <h3 className="font-bold text-lg">Did you mean </h3>
                    <div className="flex flex-wrap gap-1">
                      {result?.map((word: any) => <p key={word} className="border-2 border-black p-1 cursor-pointer" onClick={() => setTerm(word)}>{word}</p>
                      )}
                    </div>
                  </>
                  : typeof result[0] === "object" ? <Result result={result[0]} term={term} /> : ""
                : "Sorry No Result Found"
            }
          </div>
        }
      </div>
    </div>
  )
}

export default App
