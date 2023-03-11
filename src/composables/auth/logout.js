import axios from "axios"
import router from "../../router";
import store from "../../store";

const logout = () => {
    
    
    const signout = () =>{
       
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('token')
        store.commit('removeToken')
        router.push('/login')     

    }
    
    return {signout}
}
 
export default logout;