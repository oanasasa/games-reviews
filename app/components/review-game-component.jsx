
import styles from "../style_components/games.module.css";

export default function ReviewGameComponent(){

    function checkScore(){
        var score = document.getElementById("score").textContent();

        if(!isNaN(string) && score!=0 && (score <= 10) ){
            return score;
        }
    }

    return(
    <div className={styles.review_form_container}>
        <p>ALl fileds that are marked with * are mendatory.</p>
        <form className={styles.review_form} action="submit">
            <div className={styles.field_container}>
                <label for="score">Your review score*<span className={styles.info_note}>Write a number from 1 to 10</span></label>
                <input name="score_number" type="text" id="score" />
            </div>
            <div className={styles.field_container}>
                <label for="score">Your review text*</label>
                <textarea name="review_message" id="reviewMessage"></textarea>
            </div>
        </form>


    </div>);
}       