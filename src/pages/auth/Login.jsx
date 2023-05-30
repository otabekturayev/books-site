import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'
import loginBg from '../../image/login-bg.jpg'
import loginBgRed from '../../image/login-bg-red.jpg'

export const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    const navigate = useNavigate()
    
    function onChangeEmail(str){
        return setEmail(str)
    }

    function onChangePassword(str){
        return setPassword(str)
    }

    async function getTooken(e){
        e.preventDefault()
        let result = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        
        result = await result.json()
        
        if(result.token){
            navigate('/home')
            localStorage.setItem(
                'accessToken',
                result.token
            )
            setError('')
        }else{
            setError('Login or password is incorrect, please try again')
        }
    }   

    return(
        <div className={styles.wrapper}>
            <main>
                <div className={styles.signIn}>
                    <form onSubmit={getTooken}>
                        <h2>Sign In</h2>
                        <div className={styles.email}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" onChange={(e) => {onChangeEmail(e.target.value)}} value={email} name="email" id="email" />
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">Your Password</label>
                            <input type="password"  onChange={(e) => {onChangePassword(e.target.value)}} value={password} name="password" id="password" />
                        </div>
                        <div className={styles.error}>{error}</div>
                        <button type='submit'>Sign In</button>
                        <div className={styles.signUp}>
                            <div className={styles.forgetPassword}>Forget Password?</div>
                            <div className={styles.signUpRight}>Don't have an account? <a href="#">Sign Up</a></div>
                        </div>
                    </form>
                </div>
                <div className={styles.loginImg}>
                    {
                        localStorage.getItem('mode') == 'true' ? <img src={loginBgRed} alt="photo" /> : <img src={loginBg} alt="photo" /> 
                    }
                </div>
            </main>
        </div>   
    )
}
