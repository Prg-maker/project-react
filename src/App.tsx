import { useState } from 'react'
import {Tweet} from './components/Tweet'
import './App.css'
import {RoutesExport} from './Routes'

function App() {

  const [tweets , setTweets] = useState<string[]>([
    "Tweet1",
    "Tweet2",
    "Tweet3",
    "Tweet4"
  ])

  function createTweet(){
    setTweets([...tweets , `tweet ${tweets.length + 1}`])
  }

  return (
    <RoutesExport/>

   /*<div>
      {
        tweets.map(tweet => {
          return(
            <Tweet title={tweet}/>
          )
        })
      }
      <button 
        onClick={createTweet}
        style={
          {
            backgroundColor:'#8257e6',
            border: 0,
            padding: '6px 12px',
            color: 'white'
          }}
      >
        Add new Tweet
      </button>
   </div>*/
  )
}

export default App
