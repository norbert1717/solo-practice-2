import { useEffect, useState } from 'react'
import Page from './components/Page'
import './App.css'

function App() {

  const [data, setData] = useState(null);


  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1")
    .then(res => res.json())
    .then(resData => setData(resData));
  }, [])

  return (
    <>
    {data ? <Page data={data} />: "loading..."}
    </>
  )
}

export default App
