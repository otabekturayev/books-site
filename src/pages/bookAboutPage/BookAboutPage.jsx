import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import userService from "../../resource/resourceBook"
import { InfoPageBookCard } from "../../components/infoPageBookCard/infoPageBookCard"
import styles from "./BookAboutPage.module.scss"

import shareIcon from "../../image/aboutPage/share.png"
import shareIconDark from "../../image/aboutPage/share-dark-icon.png"
import starWhite from "../../image/aboutPage/star-wite.png"
import starYellow from "../../image/aboutPage/star-yellow.png"
import authorImg from "../../image/aboutPage/author.jpg"



export const BookAboutPage = ({userData}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState('Loading...')
    const { postId } = useParams()

    const navigate = useNavigate()
    
    useEffect(() => {
        userService.getUsersLIst()
            .then(data => {
                setData([data[postId - 1]])
            }).then(loading)
    }, [postId])
    
    
    let otherBook = userData.filter(item => {
        if(item.id != postId){
            return item
        }
    })

    const stars = 5 
    const activeStars = data[0]?.rate


    
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperInner}>
                    <button className={styles.prevBtn} onClick={() => navigate(-1)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.25 7L0.75 7M0.75 7L6.375 12.625M0.75 7L6.375 1.375" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Back to results</span>
                    </button>
                    <div className={styles.bookInfo}>
                        <div className={styles.bookiInfoLeft}>
                            <div className={styles.bookPhoto}>
                                <div className={styles.bookImg}>
                                    <img src={data[0]?.img} alt="book photo" />
                                </div>
                                <div className={styles.contact}>
                                    <div className={styles.commit}>
                                        <div>
                                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.82275 17.9568C4.76606 17.9668 4.70791 17.9668 4.651 17.9568C4.47528 17.8845 4.36043 17.7135 4.3596 17.5234V14.2215H2.46214C2.00837 14.2215 1.57337 14.0412 1.25235 13.7204C0.931558 13.3997 0.751465 12.9644 0.751465 12.5109V1.94009C0.751465 1.48631 0.931558 1.05131 1.25235 0.730506C1.57334 0.409509 2.00836 0.229416 2.46214 0.229416H14.6167C14.8518 0.259223 15.0281 0.459118 15.0281 0.696323C15.0281 0.933319 14.8518 1.13342 14.6167 1.16323H2.46214C2.04964 1.16323 1.71509 1.49757 1.71509 1.91028V12.5184C1.71509 12.7166 1.79388 12.9067 1.93396 13.0468C2.07403 13.1869 2.26392 13.2655 2.46214 13.2655H4.82272C5.08264 13.2655 5.29337 13.4762 5.29337 13.7361V16.2762L8.03521 13.4748C8.1213 13.3799 8.24323 13.3257 8.37122 13.3253H18.6506C18.8489 13.3253 19.0388 13.2467 19.1788 13.1064C19.3191 12.9664 19.3977 12.7765 19.3977 12.5782V5.89214C19.3808 5.75812 19.4223 5.62325 19.5115 5.52195C19.6009 5.42044 19.7295 5.36249 19.8646 5.36249C19.9999 5.36249 20.1285 5.42044 20.2177 5.52195C20.3071 5.62325 20.3486 5.75812 20.3315 5.89214V12.5185C20.3296 12.9658 20.1527 13.3946 19.8385 13.7131C19.5242 14.0314 19.0979 14.2142 18.6506 14.2219H8.57291L5.16635 17.7854C5.07985 17.8867 4.95583 17.9486 4.82264 17.9571L4.82275 17.9568Z" fill="black"/>
                                                <path d="M12.0766 3.98695H3.26888C3.03355 3.95714 2.85742 3.75704 2.85742 3.52004C2.85742 3.28304 3.03356 3.08294 3.26888 3.05313H12.0766C12.2106 3.03625 12.3455 3.07773 12.447 3.16694C12.5483 3.25636 12.6065 3.38497 12.6065 3.52004C12.6065 3.65532 12.5483 3.78393 12.447 3.87314C12.3455 3.96256 12.2106 4.00404 12.0766 3.98695Z" fill="black"/>
                                                <path d="M9.30505 6.81826H3.26888C3.03355 6.78846 2.85742 6.58835 2.85742 6.35136C2.85742 6.11415 3.03356 5.91426 3.26888 5.88445H9.30505H9.30484C9.43907 5.86736 9.57394 5.90884 9.67524 5.99826C9.77675 6.08747 9.8347 6.21608 9.8347 6.35136C9.8347 6.48642 9.77675 6.61503 9.67524 6.70446C9.57394 6.79367 9.43907 6.83515 9.30484 6.81826H9.30505Z" fill="black"/>
                                                <path d="M9.30505 9.64213H3.26888C3.03355 9.61232 2.85742 9.41222 2.85742 9.17522C2.85742 8.93822 3.03356 8.73812 3.26888 8.70831H9.30505H9.30484C9.43907 8.69143 9.57394 8.7327 9.67524 8.82212C9.77675 8.91154 9.8347 9.04015 9.8347 9.17522C9.8347 9.31029 9.77675 9.4389 9.67524 9.52832C9.57394 9.61774 9.43907 9.65922 9.30484 9.64213H9.30505Z" fill="black"/>
                                                <path d="M11.24 9.64212C11.0818 9.64546 10.933 9.56771 10.8452 9.43597C10.7573 9.30424 10.7429 9.13707 10.8067 8.9922L11.9571 6.16824H11.9573C11.984 6.10509 12.0248 6.04881 12.0767 6.00399L17.9112 0.169526C18.094 -0.00890138 18.3858 -0.00890138 18.5686 0.169526L20.2943 1.91021C20.3852 1.99526 20.4367 2.11427 20.4363 2.23892C20.4342 2.36274 20.3831 2.48092 20.2943 2.56763L14.6092 8.24522C14.5678 8.29066 14.5167 8.3263 14.4598 8.34986L11.4193 9.6199C11.3614 9.63782 11.3007 9.64533 11.24 9.6422L11.24 9.64212ZM12.8238 6.6091L12.0767 8.31248L14.0117 7.49809L19.2859 2.26873L18.2249 1.17798L12.8238 6.6091Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <p>Review</p>
                                    </div>
                                    <div className={styles.note}>
                                        <div>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.139 16.7157H9.80496C9.86097 16.7151 9.91649 16.7044 9.96869 16.6843C10.0209 16.6637 10.0689 16.6338 10.1105 16.5961L15.753 11.262C15.7972 11.2213 15.8327 11.1719 15.8569 11.1171C15.8792 11.0652 15.892 11.0097 15.8948 10.9533V6.14824C15.8948 5.88727 15.6832 5.67581 15.4224 5.67581C15.1616 5.67581 14.9501 5.88725 14.9501 6.14824V10.4461H12.0469C11.3269 10.4478 10.6371 10.7347 10.1283 11.2442C9.6195 11.7535 9.33341 12.4436 9.3326 13.1635V15.7707H3.13899C2.66958 15.7707 2.21945 15.5844 1.88767 15.2524C1.55572 14.9207 1.3692 14.4705 1.3692 14.0011V3.95347C1.3692 3.4839 1.55554 3.03343 1.88733 2.70113C2.21911 2.36868 2.66924 2.18151 3.13899 2.1807H10.9922C11.253 2.1807 11.4644 1.96927 11.4644 1.70845C11.4644 1.44748 11.253 1.23602 10.9922 1.23602H3.13899C2.41907 1.23769 1.72907 1.52475 1.22043 2.03407C0.711625 2.54338 0.425369 3.23355 0.424561 3.95343V14.0011C0.425392 14.7207 0.711629 15.4107 1.2206 15.9195C1.72941 16.4283 2.41924 16.7145 3.13899 16.7153L3.139 16.7157ZM12.0471 11.3911H14.2512L10.2775 15.1477V13.1638C10.2775 12.6943 10.4638 12.2438 10.7956 11.9115C11.1274 11.579 11.5775 11.3919 12.0471 11.3911Z" fill="black"/>
                                                <path d="M14.7709 0.146804C14.6458 0.147635 14.5261 0.197336 14.4371 0.285268L7.26735 7.45505C7.21632 7.50775 7.17759 7.57125 7.15399 7.64089L6.30692 10.2418C6.25373 10.4105 6.29861 10.595 6.42345 10.7203C6.54895 10.8453 6.73329 10.8902 6.90217 10.8369L9.50307 9.98665V9.98682C9.57255 9.96321 9.63604 9.92449 9.68874 9.87345L16.8555 2.70366C17.0381 2.51849 17.0381 2.22128 16.8555 2.03609L15.1049 0.285238C15.0163 0.196642 14.8963 0.14694 14.7711 0.146774L14.7709 0.146804ZM9.10283 9.12383L7.49696 9.64974L8.02288 8.04387L14.7705 1.28642L15.8536 2.36953L9.10283 9.12383Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <p>Notes</p>
                                    </div>
                                    <div className={styles.share}>
                                        <span>
                                            {
                                                localStorage.getItem('mode') === 'true' ? <img src={shareIconDark} alt="share icon" /> : <img src={shareIcon} alt="share icon" />
                                            }
                                        </span>
                                        <p>Share</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bookiInfoMiddle}>
                            <div className={styles.title}>{data[0]?.title}</div>
                            <div className={styles.author}>By <span className={styles.authorName}>{data[0]?.author}</span>, {data[0]?.createdAt}</div>
                            <div className={styles.editionNumber}>{data[0]?.editionNumber}</div>
                            <div className={styles.rate}>
                                <div className={styles.rateStar}>
                                {
                                    [...new Array(stars)].map((arr, index) => { 
                                        return index < activeStars ?  <img key={index} src={starYellow} alt='star' />  :  <img key={index} src={starWhite} alt='star' /> 
                                    })
                                }
                                </div>
                                <div className={styles.rateNumber}>
                                    <span>{data[0]?.rate}</span>.0 Ratings
                                </div>
                                <div className={styles.reading}><span>{data[0]?.curentlyReading}</span> Currently reading</div>
                            </div>
                            <div className={styles.checkBook}>
                                <div className={styles.check}>
                                    <p>Availability</p>
                                    <div>
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" fill="#42BB4E"/>
                                        </svg>
                                        <span>Hard Copy</span>
                                    </div>
                                    <div>
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" fill="#42BB4E"/>
                                        </svg>
                                        <span>E - Book</span>
                                    </div>
                                    <div>
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" fill="#42BB4E"/>
                                        </svg>
                                        <span>Audio book</span>
                                    </div>
                                </div>
                                <div className={styles.status}>
                                    <p>Status</p>
                                    <button>In-Shelf</button>
                                    <div>
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.69008 17.433L6.69288 17.4342C6.89 17.52 7 17.5 7 17.5C7 17.5 7.11 17.52 7.30791 17.4339L7.30992 17.433L7.31565 17.4304L7.33381 17.422C7.34884 17.415 7.36967 17.4052 7.39591 17.3926C7.44837 17.3673 7.52255 17.3306 7.61533 17.2822C7.80078 17.1855 8.06121 17.0419 8.37166 16.8495C8.99123 16.4655 9.81736 15.8826 10.6455 15.0844C12.3022 13.4876 14 10.9925 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 10.9925 1.69783 13.4876 3.35452 15.0844C4.18264 15.8826 5.00877 16.4655 5.62834 16.8495C5.93879 17.0419 6.19922 17.1855 6.38467 17.2822C6.47745 17.3306 6.55163 17.3673 6.60409 17.3926C6.63033 17.4052 6.65116 17.415 6.66619 17.422L6.68435 17.4304L6.69008 17.433ZM7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" fill="#F76B56"/>
                                        </svg>
                                        <span>CS A-15</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btns}>
                                <button className={styles.borrowBtn}>Borrow</button>
                                <div className={styles.readListenBtns}>
                                    <button className={styles.readBtn}>Read Now</button>
                                    <button className={styles.listenBtn}>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_29_539)">
                                                <path d="M20.3125 15.1042H18.2292C17.6539 15.1042 17.1875 15.5705 17.1875 16.1458V23.4375C17.1875 24.0128 17.6539 24.4792 18.2292 24.4792H20.3125C20.8878 24.4792 21.3542 24.0128 21.3542 23.4375V16.1458C21.3542 15.5705 20.8878 15.1042 20.3125 15.1042Z" fill="white"/>
                                                <path d="M23.4377 16.6667H22.396V22.9167H23.4377C23.7139 22.9167 23.9789 22.8069 24.1742 22.6116C24.3696 22.4162 24.4793 22.1513 24.4793 21.875V17.7083C24.4793 17.4321 24.3696 17.1671 24.1742 16.9718C23.9789 16.7764 23.7139 16.6667 23.4377 16.6667Z" fill="white"/>
                                                <path d="M6.771 15.1042H4.68766C4.11237 15.1042 3.646 15.5705 3.646 16.1458V23.4375C3.646 24.0128 4.11237 24.4792 4.68766 24.4792H6.771C7.34629 24.4792 7.81266 24.0128 7.81266 23.4375V16.1458C7.81266 15.5705 7.34629 15.1042 6.771 15.1042Z" fill="white"/>
                                                <path d="M0.520996 17.7083V21.875C0.520996 22.1513 0.630743 22.4162 0.826093 22.6116C1.02144 22.8069 1.2864 22.9167 1.56266 22.9167H2.60433V16.6667H1.56266C1.2864 16.6667 1.02144 16.7764 0.826093 16.9718C0.630743 17.1671 0.520996 17.4321 0.520996 17.7083ZM19.4637 10.3385C19.6041 10.7917 19.848 11.206 20.1761 11.5486C20.5043 11.8912 20.9077 12.1527 21.3543 12.3125C21.3543 9.96423 20.4215 7.71213 18.761 6.05165C17.1005 4.39118 14.8484 3.45833 12.5002 3.45833C10.1519 3.45833 7.8998 4.39118 6.23932 6.05165C4.57884 7.71213 3.646 9.96423 3.646 12.3125C4.09171 12.152 4.49404 11.8902 4.82124 11.5476C5.14844 11.2051 5.39156 10.7911 5.53141 10.3385C7.65641 3.5052 17.3647 3.53125 19.4637 10.3385Z" fill="white"/>
                                                <path d="M20.9689 4.03125C13.4741 -3.46354 0.520996 1.82812 0.520996 12.5V15.9062C1.14079 15.5521 1.59912 15.625 2.60433 15.625C2.60433 12.3229 2.16683 8.85416 5.50537 5.5052C11.672 -0.677083 22.396 3.64583 22.396 12.5V15.625C23.4064 15.625 23.8699 15.5573 24.4793 15.9062C24.4793 12.2708 25.0002 8.03645 20.9689 4.03125Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_29_539">
                                                <rect width="25" height="25" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bookiInfoRight}>
                            <div className={styles.bookiInfoRightTop}>
                                <div className={styles.topLeft}>
                                    <div className={styles.authorTittle}><span>About</span> Author</div>
                                    <div className={styles.authorSurname}>{data[0]?.author}</div>
                                </div>
                                <div className={styles.topRight}><img src={authorImg} alt="author photo" /></div>
                            </div>
                            <div className={styles.bookiInfoRightBottom}>{data[0]?.aboutAuthor}</div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>Description</p>
                        <div className={styles.text}>{data[0]?.description}</div>
                    </div>
                    <div className={styles.otherBooks}>
                        <p><span>Other</span> Books</p>
                        <div className={styles.bookCards}>
                            {
                                otherBook.map((item, i) => {
                                        return <InfoPageBookCard
                                            key={i}
                                            img={item.img}
                                            bookName={item.title}
                                            author={item.author}
                                            createdAt={item.createdAt}
                                            rate={item.rate}/> 
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}