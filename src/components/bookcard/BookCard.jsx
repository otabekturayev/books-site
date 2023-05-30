import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./BookCard.module.scss"

export const BookCard = ({img, bookName, author, createdAt, rate, id, like, changeLike}) => {

    function cutTittle(str){
        let arr = str.split('')
        if(arr.length > 30){
            let newArr = arr.slice(0, 27)
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
                <div className={styles.ratingLike}>
                    <div className={styles.rating}>{rate}<span>/5</span></div> 
                    <div className={styles.like} onClick={() => {changeLike(id)}}> 
                        {
                            !like ? <div className={styles.likeWhite}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.73373 14.683L7.72883 14.6804L7.71184 14.6712C7.69737 14.6633 7.67668 14.6519 7.65018 14.6372C7.59719 14.6076 7.52093 14.5643 7.42472 14.5077C7.23237 14.3945 6.95988 14.2279 6.63391 14.0112C5.98306 13.5786 5.11341 12.9426 4.24145 12.1297C2.51586 10.5212 0.6875 8.13133 0.6875 5.1875C0.6875 2.99146 2.5352 1.25 4.76562 1.25C6.07729 1.25 7.25174 1.84932 8 2.7887C8.74826 1.84932 9.92271 1.25 11.2344 1.25C13.4648 1.25 15.3125 2.99146 15.3125 5.1875C15.3125 8.13133 13.4841 10.5212 11.7586 12.1297C10.8866 12.9426 10.0169 13.5786 9.36609 14.0112C9.04012 14.2279 8.76763 14.3945 8.57528 14.5077C8.47907 14.5643 8.40281 14.6076 8.34982 14.6372C8.32332 14.6519 8.30263 14.6633 8.28816 14.6712L8.27117 14.6804L8.26627 14.683L8.2642 14.6841C8.09923 14.7717 7.90077 14.7717 7.7358 14.6841L7.73373 14.683Z" stroke="#2B3844" strokeLinejoin="round"/>
                            </svg></div> : 
                            <div><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.30731 13.9307L7.30223 13.928L7.28461 13.9185C7.26961 13.9103 7.24815 13.8985 7.22067 13.8832C7.16571 13.8525 7.08662 13.8076 6.98685 13.7489C6.78738 13.6316 6.50479 13.4588 6.16674 13.2341C5.49177 12.7854 4.5899 12.1258 3.68563 11.2829C1.8961 9.61468 0 7.1363 0 4.08339C0 1.80598 1.91616 0 4.22923 0C5.58949 0 6.80746 0.621522 7.58345 1.59571C8.35943 0.621522 9.5774 0 10.9377 0C13.2507 0 15.1669 1.80598 15.1669 4.08339C15.1669 7.1363 13.2708 9.61468 11.4813 11.2829C10.577 12.1258 9.67513 12.7854 9.00015 13.2341C8.66211 13.4588 8.37952 13.6316 8.18004 13.7489C8.08027 13.8076 8.00118 13.8525 7.94623 13.8832C7.91875 13.8985 7.89729 13.9103 7.88228 13.9185L7.86467 13.928L7.85959 13.9307L7.85744 13.9319C7.68636 14.0227 7.48054 14.0227 7.30946 13.9319L7.30731 13.9307Z" fill="#F34040"/>
                            </svg></div>
 
                        }
                    </div>   
                </div>
                <div className={styles.btns}>
                    <Link className={styles.infoBtn} to={`/home/${id}`}>Info</Link>
                    <button className={styles.readBtn} >Read</button>
                </div>
            </div>
        </div>
    )
}