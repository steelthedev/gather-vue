import axios from "axios";
import { ref } from "vue";
import router from "../../router";
import store from "../../store";

const login = () =>{

    const email = ref('')
    const password = ref('')
    const errors = ref([])

    const handlesubmit = async () =>{
        errors.value = []
        if (email == ""){
            return errors.value.push("Email cannot be empty")
        }


        if (password == ""){
            return errors.value.push("Email cannot be empty")
        }

        if (!errors.value.length > 0){
            const data = {
                email:email.value,
                password:password.value
            }
            await axios
                .post('accounts/login',data)
                .then(response=>{
                   
                    if (response.data.token){
                        
                        const token = response.data.token
                        store.commit('setToken', token)
                        axios.defaults.headers.common['Authorization'] = "Token " + token
                        localStorage.setItem('token', token)
                        router.push("/dashboard")
                    }
                })
                .catch(err=>{
                    console.log("An error occured")
                })
        }
    }

    return {handlesubmit, email,password}
}

export default login;