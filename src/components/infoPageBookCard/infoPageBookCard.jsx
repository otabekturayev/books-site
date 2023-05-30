import styles from "./infoPageBookCard.module.scss"

export const InfoPageBookCard = ({img, bookName, author, createdAt, rate }) => {
    function cutTittle(str){
        let arr = str.split('')
        if(arr.length > 20){
            let newArr = arr.slice(0, 17)
            return `${newArr.join('')}...`
        }else{
            return str
        }
    }
    return(
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.bookImg}><img src={img} alt="book photo" /></div>
                <div className={styles.bookName}>{cutTittle(bookName)}</div>
                <div className={styles.author}>{author}, {createdAt}</div>
                <div className={styles.rating}>{rate}<span>/5</span></div>
            </div>
        </div>
    )
}