import type { MetaFunction } from "@remix-run/node";
import Template  from "./template"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
            <header>
            
            </header>
            <menu>
            <Template />
            </menu>
            <footer>

            </footer>
        </div>
  );
}
