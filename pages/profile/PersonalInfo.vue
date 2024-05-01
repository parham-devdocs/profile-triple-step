<template>
    <div class=" h-auto container">
         <form @submit.prevent="submitForm">

    <InformationCard></InformationCard>
    <AddressCard></AddressCard>
    <ContactInfoCard></ContactInfoCard>
    <MaritalStatus></MaritalStatus>
<button  class="register-btn bg-green-500 h-12 w-40 rounded mt-9 mb-60 hover:bg-white hover:text-green-500 border-2 border-solid border-green-500 text-white">ثبت مشخصات</button>
   
 </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { userInfo } from './composables/stores/user';



const user = userInfo()

const submitForm = async () => {
    const todo = await axios.post('https://api.moallem.sch.ir/hire/v1/account/personal-data/create',

    user.$state
    )
    

    console.log(todo.status)
}
</script>

<style  scoped>

</style>