class UserService{
    getData = async (url) => {
        let res = await fetch(url)
        if(!res.ok){
            throw new Error('Xatolik yuz berdi')
        }
        return await res.json()
    }

    getUsersLIst = () => {
        return this.getData('https://owabooks.vercel.app/db.json')
    }

    
}




export default new UserService