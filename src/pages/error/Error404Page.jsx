import { Link } from 'react-router-dom'
import styles from './Error404Page.module.scss'

export const Error404Page = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.errorNumber}>
                    404
                </div>
                <p className={styles.errorText1}>Oops! That page can’t be found</p>
                <p className={styles.errorText2}>The page you are looking for it maybe deleted</p>
                <Link className={styles.btn} to='/home'>Go To Home</Link>
            </div>
        </>
    )
}