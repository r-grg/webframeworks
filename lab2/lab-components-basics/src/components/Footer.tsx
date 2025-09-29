type FooterProps = {
  copy: string;
  year: number;
};

export default function Footer({ copy, year }: FooterProps) {
  return (
    <footer>
      <p>
        © {copy} ({year})
      </p>
    </footer>
  );
}
