import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import "./Tweet.css";
import { Link } from "react-router-dom";
import Usuario from "../assets/usuario.png"

interface TweetProps {
    content: string
}

export function Tweet( props: TweetProps) {
    return(
        <Link to="/status" className="tweet">
            <img src={Usuario} alt="Usuario Tweet" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Usuario Tweeteiro</strong>
                    <span>@usuario</span>
                </div>
                
                <p>
                    {props.content}
                   {/*  Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br/>
                    <br />
                    * npm start: De 32s para 400ms (sim, demorava 30s) <br/>
                    * npm build: De 120s para 22s <br/>
                    <br/>
                    Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s
                */}
                </p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        30
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        30
                    </button>

                    <button type="button">
                        <Heart />
                        30
                    </button>

                </div>
            </div>
        </Link>
    )
}