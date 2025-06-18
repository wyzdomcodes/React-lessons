export default function Jokes(props) {
    return (
        <div className="bg-gray-400">
        {props.setup && <h2>Setup: {props.setup}</h2>}
        <p>PunchLine: {props.punchline}</p>
        <p>upvote: {props.upvote}</p>
        <hr />
    </div>
    )
}