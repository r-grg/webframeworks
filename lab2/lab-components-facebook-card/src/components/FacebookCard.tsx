import Content from "./Content";
import Header from "./Header";
import Social from "./Social";
import styles from "../App.module.css";

export default function FacebookCard() {
  return (
    <div className={styles.f_card}>
      <Header pageName="Paw-Newffs" avatarUrl="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png" timestamp="3hr"/>
      <Content 
        text="Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
        thumbUrl="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"
        title="The Ultimate Guide to Napping Like a Cat | CatNapTips"
        subtitle="Learn the art of napping, feline style! Just follow these simple tips."
        domain="catnaptips.com" />
      <Social/>
    </div>
  );
}