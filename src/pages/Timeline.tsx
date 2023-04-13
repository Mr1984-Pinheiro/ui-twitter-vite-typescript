import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import "./Timeline.css"

const tweets = [
    'Meu primeiro tweet',
    'teste',
    'Deu certo tweetar!'
  ]

export function Timeline () {
    return (
        <main className="timeline">          
          <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Mr1984-Pinheiro.png" alt="Carlos Pinheiro" />
              <textarea id='tweet' placeholder='O que é que há, velhinho?' />
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <Separator />
          {tweets.map(tweet => { 
            return <Tweet key={tweet} content={tweet} /> 
          })}
        </main>
    )
}