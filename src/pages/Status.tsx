import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import "./Status.css"

const answers = [
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo prograsso.'
]

export function Status () {
    return (
        <main className="status">          
          <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas nobis eius ducimus, quod doloribus harum facere saepe alias omnis. Corrupti quisquam blanditiis vero distinctio nesciunt! Ab repellat adipisci officia!
" />
            <Separator />

          <form className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Mr1984-Pinheiro.png" alt="Carlos Pinheiro" />
              <textarea id='tweet' placeholder='Tweet your answer' />
            </label>
            <button type='submit'>Answer</button>
          </form>
          

          {answers.map(answer => { 
            return <Tweet key={answer} content={answer} /> 
          })}
          
        </main>
    )
}