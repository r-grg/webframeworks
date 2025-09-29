import styles from "../App.module.css";

export default function Social() {
  return (
    <>
        <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className="fa fa-thumbs-up"></i>Paws Up!
            </span>
            <span>
              <i className="fa fa-comment"></i>Meow-back
            </span>
            <span>
              <i className="fa fa-share"></i>Share the Cat-titude
            </span>
          </div>
        </div>
    </>
  );
}