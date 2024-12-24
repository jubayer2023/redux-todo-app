import { Button } from "./components/ui/button";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline text-center my-5">
      My Todo App!
      <div className="h-52 my-32">
        <Button variant="default">Click me</Button>
      </div>
    </h1>
  );
}
