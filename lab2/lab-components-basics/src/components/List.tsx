import ListItem from "./ListItem";

type ListProps = {
  items: string[];
};

export default function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
}
