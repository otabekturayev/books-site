import { BookCardLike } from "../BookCardLike/BookCardLike"
import styles from "./BookMarks.module.scss"

export const BookMarks = ({userData, changeLike}) => {
    return(
        <>
           <aside className={styles.sideBar}>
               <p>Bookmarks</p> 
               {
                userData.map(item => {
                    if(item.like){
                        return <BookCardLike
                                img={item.img}
                                title={item.title}
                                author={item.author}
                                changeLike={changeLike}
                                id={item.id}/>
                    }
                })
               }
           </aside>
        </>
    )
}