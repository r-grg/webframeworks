import Header from "./Header";
import MultiplicationRow from "./MultiplicationRow";

type TableProps = { max: number };

export default function MultiplicationTable({ max }: TableProps) {
  const factors = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <table aria-label={`Maaltafels tot en met ${max}`}>
      <Header max={max} />
      <tbody>
        {factors.map((f) => (
          <MultiplicationRow key={f} factor={f} max={max} />
        ))}
      </tbody>
    </table>
  );
}
