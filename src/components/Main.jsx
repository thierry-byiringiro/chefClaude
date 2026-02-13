import { useState } from "react";
export default function Main() {
  const [arrayOfIngredients, setIngredients] = useState([]);
  const displayIngredients = arrayOfIngredients.map((el, id) => (
    <li key={id}>{el}</li>
  ));
  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.length == 0) {
      alert("You can not add an empty text");
    } else {
      setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    }
  };

  return (
    <>
      <main className="mt-12 flex flex-col  justify-center items-center space-y-10">
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
          <section className="pr-10 flex flex-col space-y-20">
            <div>
              <h2 className="font-bold text-3xl">Ingredients on hand:</h2>
              <ul className="list-disc pl-5 mt-5">{displayIngredients}</ul>
            </div>
            {arrayOfIngredients.length > 3 && (
              <div className="bg-[#F0EFEB] w-148.5 h-27.25 flex items-center justify-center rounded-md space-x-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="font-bold text-xl">Ready for a recipe?</h3>
                  <p className="text-[#6B7280]">
                    Generate a recipe from your list of ingredients.
                  </p>
                </div>
                <button className="bg-[#D17557] h-9.5 flex items-center">
                  Get a recipe
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}
