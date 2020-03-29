import axios from 'axios'

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

export const apiRecovery = {
    sendMail(email:string) {
        return instance.post(`auth/forgot`,
            {
                email: email
            }).then(res=>res.data.success)
    }
}