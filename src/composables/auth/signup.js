import axios from "axios";
import { ref } from "vue";
import router from "../../router";

const signup = () =>{

    const email = ref('')
    const full_name = ref('')
    const password = ref('')
    const errors = ref([])

    const handlesubmit = async () =>{
        errors.value = []
        if (email == ""){
            return errors.value.push("Email cannot be empty")
        }

        if (full_name == ""){
            return errors.value.push("Email cannot be empty")
        }

        if (password == ""){
            return errors.value.push("Email cannot be empty")
        }

        if (!errors.value.length > 0){
            const data = {
                full_name:full_name.value,
                email:email.value,
                password:password.value
            }
            await axios
                .post('accounts/signup',data)
                .then(response=>{
                    console.log(response.data)
                    if (response.status == 201) {
                        router.push('/login')
                    }
                   
                })
                .catch(err=>{
                    console.log("An error occured")
                })
        }
    }

    return {handlesubmit, email,password,full_name}
}

export default signup;