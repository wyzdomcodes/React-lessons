import { useState } from "react"

export default function MainContent() {
const [ingredients, setIngredient] = useState([])
// const ingredients = ["chicken", "onion", "Egg"]

    const ingredientsElement = ingredients.map(ingredient => {
    
    return <li key={ingredient}>{ingredient}</li>
})

const submit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // console.log(formData)
    const newEngridient = formData.get("ingredient")
    // ingredients.push(newEngridient);
    // console.log(newEngridient, ingredients)

    setIngredient(prevIngredient => [...prevIngredient, newEngridient])
}
  return (
    <main className="py-4 px-7.5">
      <form onSubmit={submit} className="flex justify-center items-center gap-3 h-[34px]">
        <input
          className="grow-1 min-w-[150px] max-w-[400px] focus:outline-gray-400 rounded-[6px] border border-[#D1D5DB] py-[9px] px-[13px]"
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g eregano"
          name="ingredient"
        />
        <button type="submit" className="rounded-[6px] font-inter bg-[#141413] text-[#fafaf8] before:content-['+'] before:mr-[5px] px-3 py-2">
          Add ingredient
        </button>
      </form>

      <ul>
        {ingredientsElement}
      </ul>
    </main>
  );
}
