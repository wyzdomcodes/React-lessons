import jokesData from "./jokesData";
import Jokes from "./Jokes";

export default function TheJoke () {
    const jokesElement = jokesData.map(joke => {
       return <Jokes 
        setup={joke.setup} 
        punchline={joke.punchline} 
        />
    })
    return (
        <div>
            {jokesElement}
        </div>
    )
}