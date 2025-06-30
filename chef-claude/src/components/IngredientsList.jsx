export default function IngredientsList ({onGetRecipe, ingredients, ref}) {
    const ingredientsElement = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
    return (
        <section className="flex flex-col pt-8 px-14">
          <h2 className="mb-5 text-3xl font-inter font-bold">
            Ingredients on hand:
          </h2>
          <ul className="mb-12 list-disc mx-6">{ingredientsElement}</ul>

          {ingredients.length >= 4 ? (
            <div className="bg-gray-100 flex items-center justify-between px-10 py-6 rounded">
              <div ref={ref} className="">
                <h3 className="pb-5 font-inter text-xl font-semibold">
                  Ready for a recipe?
                </h3>
                <p className="font-inter text-sm">
                  Generate a recipe from your list of ingredients
                </p>
              </div>
              <button
                onClick={onGetRecipe}
                className="bg-amber-800 px-3 py-2 rounded text-white font-inter"
              >
                Get a recipe
              </button>
            </div>
          ) : null}
        </section>
    )
}