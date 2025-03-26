import { Children, useState } from "react";
import Jedi from "./Jedi";

export default function Holocron({ children }) {
  const [activeJedi, setActiveJedi] = useState(null)
  return (
    <div>
      {Children.map(children, (child, index) => {
        
        return (<Jedi onToggle={()=> setActiveJedi(index ===activeJedi? null : index)} isActive={index === activeJedi} title={child.props.title}>{child.props.children}</Jedi>)
        
})}
    </div>
  );
}
