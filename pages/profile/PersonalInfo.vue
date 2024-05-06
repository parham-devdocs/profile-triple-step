<template>
    <div class=" h-auto container">
         <form @submit.prevent="submitForm">

    <InformationCard></InformationCard>
    <AddressCard></AddressCard>
    <ContactInfoCard></ContactInfoCard>
    <MaritalStatus></MaritalStatus>
<button type="submit"  class="register-btn bg-green-500 h-12 w-40 rounded mt-9 mb-60 hover:bg-white hover:text-green-500 border-2 border-solid border-green-500 text-white">ثبت مشخصات</button>
   
 </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { userInfo } from './composables/stores/user';
import { useRoute , useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
const user = userInfo()
const {marital_status ,first_name,last_name,gender,father_name,shenasneme_id,place_issue,date_birth,place_birth,address,phone,email}=userInfo()
const submitForm = async () => {

                    user.$reset
            if ( phone.length>0  && marital_status.length>0 && first_name.length>0 && last_name.length>0 &&gender.length>0 && father_name.l>0 && shenasneme_id.length>0 &&place_issue.length>0 && date_birth.length>0 && place_birth.length>0 && address.length>0 && email.length>0) {
            

    const todo = await axios.post('https://api.moallem.sch.ir/hire/v1/account/personal-data/create/',user.$state).then(e => {

router.push('/profile/EducationalInfo')
        
    }).catch(e=>console.log(e.response.data))
    

    }
 

    
    
}
</script>

<style  scoped>

</style>