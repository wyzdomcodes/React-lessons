import { useEffect, useState } from "react";
import Header from "./components/Header";
import { languages } from "./components/languages";
import { clsx } from "clsx";
import { getFarewellText } from "./components/utils";
function App() {
  const [cureentWord, setCurrentWord] = useState("React");
  const [guessedAlphabet, setGuessedAlphabet] = useState([]);
  const [guessedWord, setGuessedWord] = useState([]);
  const [wrongGuessedWord, setWrongGuessedWord] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)
  const wrongGuessCount = wrongGuessedWord.length
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const gameWon = cureentWord.toUpperCase().split('').every(letter => guessedAlphabet.includes(letter))
  let correctAlphabet;
  let [farewellText, setFarewellText] = useState(null)
  function handleNewGame() {
    let random = Math.ceil(Math.random() * 8)
    setCurrentWord(prev => prev = languages[random].name)
    setGuessedAlphabet([])
    setGuessedWord([])
    setWrongGuessedWord([])
    setIsGameOver([])
  }
  const alphabetElements = alphabets
    .toUpperCase()
    .split("")
    .map((alphabet, index) => {
      return (
        <button
        disabled={isGameOver}
          key={index}
          onClick={() => storeGuessedGame(alphabet)}
          className={clsx(
            "px-3 py-2 font-bold shadow-2xl/30 border border-y-amber-500",
            guessedAlphabet.includes(alphabet)
              ? cureentWord.toUpperCase().includes(alphabet)
                ? "bg-green-600"
                : "bg-red-600"
              : "bg-yellow-600",
              isGameOver ? "opacity-45 cursor-default" : "cursor-pointer opacity-100"
          )}
        >
          {alphabet}
        </button>
      );
    });
  function storeGuessedGame(alphabet) {
    setGuessedAlphabet((prev) => {
      if (prev.includes(alphabet)) {
        return prev;
      } else {
        return [...prev, alphabet];
      }
    });
     correctAlphabet = cureentWord.toUpperCase().includes(alphabet);
    setGuessedWord((prev) =>
      correctAlphabet && !prev.includes(alphabet) ? [...prev, alphabet] : prev
    );
    const wrongAlphabet = !cureentWord.toUpperCase().includes(alphabet);
    setWrongGuessedWord(prev => wrongAlphabet && !wrongGuessedWord.includes(alphabet) ? [...prev, alphabet] : prev)

    const l = languages.map(lang => getFarewellText(lang.name))
    setFarewellText(prev => !correctAlphabet ? l[wrongGuessCount] : prev )
    
  }
  useEffect(() =>  {
    setIsGameOver(wrongGuessCount === 8 ? true : false)
  }, [wrongGuessCount])
  function text() {
    if(!correctAlphabet && !gameWon && !isGameOver && wrongGuessCount > 0) {
      return farewellText
    }
  }
  function displayFarewell() {
    if(!correctAlphabet && !gameWon && !isGameOver && wrongGuessCount > 0) {
      return "bg-purple-900"
    } else return
  }
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center py-10">
        <div className={clsx("rounded flex justify-center items-center min-w-70 h-15 px-3", isGameOver && "bg-red-700", gameWon && "bg-emerald-500", displayFarewell())}>
          <h3 className={"text-lg font-bold text-center"}>{isGameOver && "Opps You lost"} {gameWon && "You Won"} {text()}</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 py-8 max-w-[500px]">
          {languages.map((language, index) => {
            return (
              <p
                key={index}
                style={{
                  background: language.backgroundColor,
                  color: language.color,
                }}
                className={clsx("rounded py-2 px-4",
                  index < wrongGuessCount && 'opacity-35' 
                )}
              >
                {language.name}
              </p>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-0.5">
          {guessedWord.map((word, index) => {
            return (
              <span
                key={index}
                className="bg-gray-800 shadow-2xl border-b-3 inline-block font-bold text-lg px-4 py-1"
              >
                {word.toUpperCase()}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 py-8 max-w-[400px]">
          {alphabetElements}
        </div>

        {isGameOver || gameWon && <button onClick={handleNewGame} type="button" className="bg-[#0cc2da] text-[#1E1E1E] px-5 py-2">New Game</button>}
      </main>
    </>
  );
}

export default App;
