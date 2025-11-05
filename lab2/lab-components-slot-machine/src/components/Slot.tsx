import stylesSlot from "./Slot.module.css";


type SlotProps = {
/** 0 = kers, 1 = citroen, 2 = bel, 3 = druiven, 4 = seven */
value: number;
/** beschrijvende label (optioneel) */
label?: string;
};


// Gebruik public/ of imports uit src/assets
// PUBLIC (plaats afbeeldingen in public/images):
const SYMBOLS_PUBLIC = [
    '/slot-cherry.png',
    '/slot-lemon.png',
    '/slot-melon.png',
    '/slot-prune.png',
    '/slot-seven.png'
];


// Labels voor toegankelijkheid
const LABELS = ["Kers", "Citroen", "Bel", "Druiven", "Seven"];


export function Slot({ value, label }: SlotProps) {
const src = SYMBOLS_PUBLIC[value];
const alt = label ?? LABELS[value] ?? `Symbool #${value}`;


return (
<div className={stylesSlot.slot} aria-label={`Slot: ${alt} (#${value})`}>
<img className={stylesSlot.img} src={src} alt={alt} />
<span className={stylesSlot.caption}>
{alt} <span className={stylesSlot.muted}>#{value}</span>
</span>
</div>
);
}