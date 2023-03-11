import axios from "axios";
import { ref } from "vue";

const getUser = () =>{

    const user = ref({})
    const errors = ref([])

    const getuser = async () =>{
        errors.value = []

        await axios
            .get('accounts/get-user')
            .then(response =>{
               
                if (response.status == 200){
                    
                    user.value = response.data
                    console.log(user)
                }
                
            })
        
    }

    return {user, getuser}
}

export default getUser;