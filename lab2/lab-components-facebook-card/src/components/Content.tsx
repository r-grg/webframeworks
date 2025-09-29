import styles from "../App.module.css";

type Props = {
  text: string;
  thumbUrl: string;
  title: string;
  subtitle: string;
  domain: string;
};


export default function Content({ text, thumbUrl, title, subtitle, domain }: Props) {
  return (
    <>
      <div className={styles.content}>
        <p>{text}</p>
      </div>

      <div className={styles.reference}>
        <img className={styles.reference_thumb} src={thumbUrl} alt={title} />
        <div className={styles.reference_content}>
          <div className={styles.reference_title}>{title}</div>
          <div className={styles.reference_subtitle}>{subtitle}</div>
          <div className={styles.reference_font}>{domain}</div>
        </div>
      </div>
    </>
  );
}