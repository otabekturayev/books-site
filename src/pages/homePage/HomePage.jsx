import { BookCard } from "../../components/bookcard/BookCard"
import { BookMarks } from "../../components/bookmarks/Bookmarks"
import { Search } from "../../components/search/Search"
import { useState } from "react"
import styles from "./HomePage.module.scss"

export const HomePage = ({userData, changeLike}) => {
    let [temp, setTemp] = useState('')

    function searchItem(temp, books){
        if(temp){
            return books.filter(item => {
                return item.title.toLowerCase().includes(temp.toLowerCase())
            })
        }else{
            return books
        }
    }

    function onChangeStr(str){
        return setTemp(str)
    }   

    let newData = searchItem(temp, userData)

    return (
        <>  
            <main>
                <BookMarks userData={userData} changeLike={changeLike}/>
                <div className={styles.mainRight}>
                    <Search onChangeStr={onChangeStr} temp={temp}/>
                    <div className={styles.bookCards}>
                        {
                            newData.map((item, i) => {
                                return(
                                    <BookCard key={i}
                                            img={item.img}
                                            bookName={item.title}
                                            author={item.author}
                                            createdAt={item.createdAt}
                                            rate={item.rate}
                                            id={item.id}
                                            changeLike={changeLike}
                                            like={item.like}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            
        </>
    )
}