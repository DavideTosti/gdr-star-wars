export default function Jedi({ title, children }) {
  return (
    <div>
      <button>{title}</button>
      <div>{children}</div>
    </div>
  );
}
