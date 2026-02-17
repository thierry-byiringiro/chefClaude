export default function IngredientList({
  ingredientsList,
  getRecipe,
}) {
  const displayIngredients = ingredientsList.map((el, id) => (
    <li key={id}>{el}</li>
  ));
  return (
    <>
      <section className="pr-10 flex flex-col space-y-20">
        <div>
          <h2 className="font-bold text-3xl">Ingredients on hand:</h2>
          <ul className="list-disc pl-5 mt-5">{displayIngredients}</ul>
        </div>
        {ingredientsList.length > 3 && (
          <div className="bg-[#F0EFEB] w-148.5 h-27.25 flex items-center justify-center rounded-md space-x-6">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-xl">Ready for a recipe?</h3>
              <p className="text-[#6B7280]">
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button
              onClick={getRecipe}
              className="bg-[#D17557] h-9.5 flex items-center"
            >
              Get a recipe
            </button>
          </div>
        )}
      </section>
    </>
  );
}
