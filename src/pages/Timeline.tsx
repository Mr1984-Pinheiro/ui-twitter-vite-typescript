import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import "./Timeline.css"
import { FormEvent, useState } from 'react';



let newTweet = ''

export function Timeline () {
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'teste',
    'Deu certo tweetar!'
  ]);

  function createNewTweet (event: FormEvent) {
    event.preventDefault();

    console.log(newTweet);
  }

    return (
        <main className="timeline">          
          <Header title="Home" />
          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Mr1984-Pinheiro.png" alt="Carlos Pinheiro" />
              <textarea
               id='tweet' 
               placeholder='O que é que há, velhinho?' 
               onChange={(event) => {
                  newTweet = event.target.value;
               }}
               />
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