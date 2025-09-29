import styles from "../App.module.css";

type HeaderProps = {
  pageName: string;
  avatarUrl: string;
  timestamp: string;
  pageUrl?: string;
  timeUrl?: string;
};

export default function Header({
  pageName,
  avatarUrl,
  timestamp,
  pageUrl = "#",
  timeUrl = "#",
}: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.options}>
        <i className="fa fa-chevron-down" />
      </div>

      <img className={styles.co_logo} src={avatarUrl} alt={`${pageName} logo`} />

      <div className={styles.co_name}>
        <a href={pageUrl}>{pageName}</a>
      </div>

      <div className={styles.time}>
        <a href={timeUrl}>{timestamp}</a> · <i className="fa fa-globe" />
      </div>
    </div>
  );
}
