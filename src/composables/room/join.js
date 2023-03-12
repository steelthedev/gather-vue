import { ref} from "vue";
import router from "../../router";

const joinMeeting = () =>{

const room_id = ref("")
const errors = ref([])

const handlesubmit = async() =>{
    errors.value = []

    if (room_id == ""){
        return errors.value.push("Room cannot be empty")
    }

    if (!errors.value.length){
       
        router.push('/room/' + room_id.value)

    }


    
}
return {room_id, handlesubmit}
}

export default joinMeeting;