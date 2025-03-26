export default function Jedi({ title, children, onToggle, isActive }) {
  return (
    <div>
      <button onClick={onToggle}>{title}</button>
      {isActive && <div>{children}</div>}
    </div>
  );
}
