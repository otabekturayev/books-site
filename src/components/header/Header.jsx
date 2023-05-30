import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.scss'
import logoImg from '../../image/logo.png'
import logoImgRed from '../../image/logo-red.png'

export const Header = () => {

    const [mode, setMode] = useState(localStorage.getItem('mode') === "true" || false)

    return(
        <header>
            <nav>
                <div className={styles.container}>
                    <Link className={styles.logo} to='/home'>
                        {
                            !mode ? 
                            <img src={logoImg} alt="logo photo" /> :
                            <img src={logoImgRed} alt="logo photo" />
                        }
                    </Link>
                    <div className={styles.headerRight}>
                        <div className={styles.luna}
                        >
                            {
                                mode ? 
                                <div onClick={() => {
                                    document.body.classList.remove('dark')
                                    setMode(!mode)
                                    localStorage.setItem('mode', !mode)
                                }}>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4V1ZM18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13ZM13 21C12.4477 21 12 21.4477 12 22V25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25V22C14 21.4477 13.5523 21 13 21ZM25 12C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H25ZM5 13C5 12.4477 4.55228 12 4 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H4C4.55228 14 5 13.5523 5 13ZM20.7782 3.80761C21.1687 3.41709 21.8019 3.41709 22.1924 3.80761C22.5829 4.19814 22.5829 4.8313 22.1924 5.22183L20.0711 7.34315C19.6805 7.73367 19.0474 7.73367 18.6569 7.34315C18.2663 6.95262 18.2663 6.31946 18.6569 5.92893L20.7782 3.80761ZM7.34315 18.6569C6.95262 18.2663 6.31946 18.2663 5.92893 18.6569L3.80761 20.7782C3.41709 21.1687 3.41709 21.8019 3.80761 22.1924C4.19814 22.5829 4.8313 22.5829 5.22183 22.1924L7.34315 20.0711C7.73367 19.6805 7.73367 19.0474 7.34315 18.6569ZM22.1924 20.7782C22.5829 21.1687 22.5829 21.8019 22.1924 22.1924C21.8019 22.5829 21.1687 22.5829 20.7782 22.1924L18.6569 20.0711C18.2663 19.6805 18.2663 19.0474 18.6569 18.6569C19.0474 18.2663 19.6805 18.2663 20.0711 18.6569L22.1924 20.7782ZM7.34315 7.34315C7.73367 6.95262 7.73367 6.31946 7.34315 5.92893L5.22183 3.80761C4.8313 3.41709 4.19814 3.41709 3.80761 3.80761C3.41709 4.19814 3.41709 4.8313 3.80761 5.22183L5.92893 7.34315C6.31946 7.73367 6.95262 7.73367 7.34315 7.34315Z" fill="#F27851"/>
                                    </svg>
                                </div> : 
                                <div onClick={() => {
                                    setMode(!mode)
                                    document.body.classList.add('dark')
                                    localStorage.setItem('mode', !mode)
                                }}>
                                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M15.3033 0.215831C10.546 1.19962 6.96889 5.4302 6.96889 10.5C6.96889 16.299 11.649 21 17.4222 21C20.4047 21 23.0955 19.7454 25 17.7328C23.1159 22.5722 18.4276 26 12.9422 26C5.79443 26 0 20.1797 0 13C0 5.8203 5.79443 0 12.9422 0C13.7486 0 14.5378 0.0740787 15.3033 0.215831Z" fill="#41B64D"/>
                                    </svg>
                                </div>
                            }
                            
                            
                        </div>
                        <Link className={styles.btn} to='/sign-in' 
                                onClick={() => {
									localStorage.removeItem('accessToken')
							    }}>Log out</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}