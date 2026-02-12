export default function Main() {
  const arrayOfIngredients = ["carrots", "tomatoes", "oranges"];
  const displayIngredients = arrayOfIngredients.map((el, id) => (
    <li key={id}>{el}</li>
  ));
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient)
    arrayOfIngredients.push(newIngredient);
    console.log(arrayOfIngredients);
  };

  return (
    <>
      <main className="mt-12 flex justify-center">
        <form action="" className="flex gap-5" onSubmit={handleSubmit}>
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
      </main>
      <ul>{displayIngredients}</ul>
    </>
  );
}
