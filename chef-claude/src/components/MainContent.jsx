import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getAiRecipe } from "../ai";
import { useRef } from "react";
import { useEffect } from "react";

export default function MainContent() {
  const [ingredients, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState('');
  const newRecipe = useRef(null)

  useEffect(() => {
    if(newRecipe.current !== null && recipe !== '') {
      console.log(newRecipe)
    return newRecipe.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])
  async function handleGetRecipe() {
    const aiRecipe = await getAiRecipe(ingredients)
    setRecipe(aiRecipe);
  }

  const addIngredient = (formData) => {
    const newEngridient = formData.get("ingredient");

    setIngredient((prevIngredient) => [...prevIngredient, newEngridient]);
  };
  return (
    <main className="py-4 px-7.5">
      <form
        action={addIngredient}
        className="flex justify-center items-center gap-3 h-[34px]"
      >
        <input
          className="grow-1 min-w-[150px] max-w-[400px] focus:outline-gray-400 rounded-[6px] border border-[#D1D5DB] py-[9px] px-[13px]"
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g eregano"
          name="ingredient"
        />
        <button
          type="submit"
          className="rounded-[6px] font-inter cursor-pointer bg-[#141413] text-[#fafaf8] before:content-['+'] before:mr-[5px] px-3 py-2"
        >
          Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && <IngredientsList onGetRecipe = {handleGetRecipe} ingredients= {ingredients} ref={newRecipe}/>}

      {recipe && <ClaudeRecipe recipe= {recipe}/>}
    </main>
  );
}
