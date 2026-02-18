import ReactMarkdown from "react-markdown";
export default function ClaudeRecipe(props) {
  return (
    <section className="flex flex-col space-y-4 w-148.5">
      <h2 className="font-bold text-3xl">Chef Claude Recommends:</h2>
      <ReactMarkdown>
        {props.recipe}
      </ReactMarkdown>
    </section>
  );
}
