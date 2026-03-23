import snow from '../assets/Snow.png';
import styles from './Card.module.css';
function Card(){
    return(
        <div className={styles.cardSt}>
            <img className={styles.cardImage} src={snow} alt="Profile Picture" />
            <h2 className={styles.cardTitle}>Snow</h2>
            <p className={styles.cardText}>I am Snow who is learning react and I like to code</p>
        </div>
    );
}
export default Card