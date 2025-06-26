import { useState } from "react"

export default function MainContent() {
const [ingredients, setIngredient] = useState([])
// const ingredients = ["chicken", "onion", "Egg"]

    const ingredientsElement = ingredients.map(ingredient => {
    
    return <li key={ingredient}>{ingredient}</li>
})

const addIngredient = (formData) => {
    // e.preventDefault()
    // const formData = new FormData(e.currentTarget)
    const newEngridient = formData.get("ingredient")

    setIngredient(prevIngredient => [...prevIngredient, newEngridient])
}
  return (
    <main className="py-4 px-7.5">
      <form action={addIngredient} className="flex justify-center items-center gap-3 h-[34px]">
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

      {ingredients.length > 0 && 
      <section className="flex flex-col pt-8 px-14">
        <h2 className="mb-5 text-3xl font-inter font-bold">Ingredients on hand:</h2>
        <ul className="mb-12 list-disc mx-6">
        {ingredientsElement}
      </ul>

      {ingredients.length >= 4 ? <div className="bg-gray-100 flex items-center justify-between px-10 py-6 rounded">
        <div className="">
          <h3 className="pb-5 font-inter text-xl font-semibold">Ready for a recipe?</h3>
          <p className="font-inter text-sm">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="bg-amber-800 px-3 py-2 rounded text-white font-inter">Get a recipe</button>
      </div> : null}
      </section>}
    </main>
  );
}
