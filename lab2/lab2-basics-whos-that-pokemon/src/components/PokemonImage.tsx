import styles from "./PokemonImage.module.css";

type PokemonImageProps = {
  /** ID van de Pokémon (1 = Bulbasaur, 2 = Ivysaur, …) */
  id: number;
  /** True = zichtbaar, False = zwartgemaakt */
  visible: boolean;
  /** Grootte in pixels (optioneel, standaard 200) */
  size?: number;
};

export function PokemonImage({ id, visible, size = 200 }: PokemonImageProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <img
      src={imageUrl}
      alt={`Pokémon #${id}`}
      className={visible ? styles.visible : styles.hidden}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
