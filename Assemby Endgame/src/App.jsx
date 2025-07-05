import { useEffect, useState } from "react";
import Header from "./components/Header";
import { languages } from "./components/languages";
import { words } from "./components/words";
import { clsx } from "clsx";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { getFarewellText } from "./components/utils";

function App() {
  const [cureentWord, setCurrentWord] = useState(getNewWord);
  const [guessedAlphabet, setGuessedAlphabet] = useState([]);
  const [guessedWord, setGuessedWord] = useState([]);
  const [wrongGuessedWord, setWrongGuessedWord] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const wrongGuessCount = wrongGuessedWord.length;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const gameWon = cureentWord
    .toUpperCase()
    .split("")
    .every((letter) => guessedAlphabet.includes(letter));
  const { width, height } = useWindowSize();
  let correctAlphabet;
  let [farewellText, setFarewellText] = useState(null);
  function getNewWord() {
    let random = Math.floor(Math.random() * words.length);
    return words[random];
  }

  function handleNewGame() {
    getNewWord();
    setGuessedAlphabet([]);
    setGuessedWord([]);
    setWrongGuessedWord([]);
    setIsGameOver(false);
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
            isGameOver
              ? "opacity-45 cursor-default"
              : "cursor-pointer opacity-100",
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
      correctAlphabet && !prev.includes(alphabet) ? [...prev, alphabet] : prev,
    );
    const wrongAlphabet = !cureentWord.toUpperCase().includes(alphabet);
    setWrongGuessedWord((prev) =>
      wrongAlphabet && !wrongGuessedWord.includes(alphabet)
        ? [...prev, alphabet]
        : prev,
    );

    const l = languages.map((lang) => getFarewellText(lang.name));
    setFarewellText((prev) => (!correctAlphabet ? l[wrongGuessCount] : prev));
  }
  useEffect(() => {
    setIsGameOver(wrongGuessCount === 8 ? true : false);
  }, [wrongGuessCount]);
  function text() {
    if (!correctAlphabet && !gameWon && !isGameOver && wrongGuessCount > 0) {
      return farewellText;
    }
  }
  function displayFarewell() {
    if (!correctAlphabet && !gameWon && !isGameOver && wrongGuessCount > 0) {
      return "bg-purple-900";
    } else return;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center py-10">
        <div
          className={clsx(
            "rounded flex justify-center items-center min-w-70 h-15 px-3",
            isGameOver && "bg-red-700",
            gameWon && "bg-emerald-500",
            displayFarewell(),
          )}
        >
          <h3 className={"text-lg font-bold text-center"}>
            {isGameOver && "Opps You lost"} {gameWon && "You Won"} {text()}
          </h3>
        </div>

        {gameWon && <Confetti width={width} height={height} />}

        <div className="flex flex-wrap justify-center gap-3 py-8 max-w-[500px]">
          {languages.map((language, index) => {
            return (
              <p
                key={index}
                style={{
                  background: language.backgroundColor,
                  color: language.color,
                }}
                className={clsx(
                  "rounded py-2 px-4",
                  index < wrongGuessCount && "opacity-35",
                )}
              >
                {language.name}
              </p>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-0.5">
          {cureentWord
            .toUpperCase()
            .split("")
            .map((letter, index) => {
              return (
                <span
                  key={index}
                  className={clsx(
                    "w-10 h-12 flex items-center justify-center border-b-4 border-gray-600 bg-[#1E1E1E] text-2xl font-bold",
                  )}
                >
                  {guessedAlphabet.includes(letter) ? letter : ""}
                </span>
              );
            })}
        </div>

        <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 py-8 max-w-[400px]">
          {alphabetElements}
        </div>

        {(isGameOver || gameWon) && (
          <button
            onClick={handleNewGame}
            type="button"
            className="bg-[#0cc2da] text-[#1E1E1E] px-5 py-2 cursor-pointer"
          >
            New Game
          </button>
        )}
      </main>
    </>
  );
}

export default App;
