type ListItemProps = {
  text: string;
};

export default function ListItem({ text }: ListItemProps) {
  return <li>{text}</li>;
}
