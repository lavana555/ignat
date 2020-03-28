import axios from "axios"

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

export const api = {
    addRegistrApi(email,password) {
        return instance.post(`auth/register`,
        {
            email,
                password
        })
    }
}