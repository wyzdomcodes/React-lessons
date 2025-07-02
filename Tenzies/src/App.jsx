import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid";
import Confetti from 'react-confetti'
import Die from "./components/Die"

function App() {

    function generateAllNewDice() {
  const numbers = []

      for(let i = 0; i < 10; i++) {
        const randomNumber = Math.ceil(Math.random() * 6)
        numbers.push({value: randomNumber, isHeld: false, id: uuidv4()})
      }
      return numbers
    }
    const [values, setValues] = useState(generateAllNewDice())
    let gameWon = false

    if(values.every(val => val.value === values[0].value)
       && 
      values.every(val => val.isHeld === values[0].isHeld)
    ) {
         gameWon = true
      } 
  
    function handleRollDice() {
      const getNewDice = generateAllNewDice()
      if(gameWon === false) {
        return setValues(values.map((die, index) => {
        if(die.isHeld) {
          return die
        } else {
          // return {...die, value: Math.ceil(Math.random() * 6)}
         return getNewDice[index]
        }
      }))
      
      } else {
        gameWon = false
        return setValues(getNewDice)
      }
    }

    function handleDicePick(id) {
      setValues(values.map(value => {
        if(value.id === id) {
          return {...value, isHeld: !value.isHeld}
          
        } else {return value}
        
      }))
    }
  return (
    <>
      <main className="bg-[#f5f5f5] h-[100%] rounded-[5px] w-[400px] flex flex-col items-center justify-center">
        {gameWon && <Confetti />}
        <div className="grid grid-cols-5 gap-5 content-center place-content-center px-8 pb-8">
          {values.map((value, index) => {
            return <Die key={index} value={value} pick={handleDicePick}/>
          })}
        </div>
          <button onClick={handleRollDice} className="cursor-pointer bg-indigo-700 px-5 py-2 rounded text-white text-xl">{gameWon ? "New game" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
