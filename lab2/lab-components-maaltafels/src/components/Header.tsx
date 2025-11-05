type HeaderProps = { max: number };

export default function Header({ max }: HeaderProps) {
  return (
    <thead>
      <tr>
        <th /> {/* lege hoekcel */}
        {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
          <th key={n}>{n}</th>
        ))}
      </tr>
    </thead>
  );
}
