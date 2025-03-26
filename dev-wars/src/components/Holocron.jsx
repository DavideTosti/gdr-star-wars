import { Children } from "react";
import Jedi from "./Jedi";

export default function Holocron({ children }) {
  return (
    <div>
      {Children.map(children, (child) => (
        <Jedi title={child.props.title}>{child.props.children}</Jedi>
      ))}
    </div>
  );
}
