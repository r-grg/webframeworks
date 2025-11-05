type RowProps = { factor: number; max: number };

export default function MultiplicationRow({ factor, max }: RowProps) {
  return (
    <tr>
      <td>{factor}</td>
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <td key={n}>{factor * n}</td>
      ))}
    </tr>
  );
}
