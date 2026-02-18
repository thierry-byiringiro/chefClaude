import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromMistral } from "../assets/ai";
export default function Main() {
  const [arrayOfIngredients, setIngredients] = useState([]);
  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  };

  const [recipe, setRecipe] = useState(false);
  const getRecipe = async () => {
    setRecipe(await getRecipeFromMistral(arrayOfIngredients));
  };
  return (
    <>
      <main className="mt-12 flex flex-col  justify-center items-center space-y-10 ml-30 mr-20">
        <form action={handleSubmit} className="flex gap-5" autoComplete="off">
          <input
            type="text"
            name="ingredient"
            id=""
            placeholder="e.g. oregano"
            className="h-12 w-100 border rounded-md border-[#D1D5DB] pl-4"
          />
          <input
            type="submit"
            value="+ Add ingredient"
            className="h-12  bg-[#141413]  rounded-md text-white w-60 flex items-center"
          />
        </form>
        {arrayOfIngredients.length > 0 && (
          <IngredientList
            ingredientsList={arrayOfIngredients}
            getRecipe={getRecipe}
          />
        )}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </main>
    </>
  );
}
