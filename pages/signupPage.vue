<template>
    <form @submit.prevent="sign_up">
<div class="signin-container mr-auto ml-auto  pt-10 bg-orange-300 w-96 rounded">
    <div class=" flex h-96 flex-col justify-between">
        <h1 class=" text-center mt-3 text-2xl">صفحه ورود </h1>
        <input type="text" class=" w-2/3 mr-auto ml-auto
         bg-orange-300 border-2
          border-black rounded
           placeholder:text-black p-2
            text-black text-right
             outline-none" 
             placeholder="نام کاربری خود را وارد کنید"
             v-model="user.username">
               <input type="text" class=" w-2/3 mr-auto ml-auto
         bg-orange-300 border-2
          border-black rounded
           placeholder:text-black p-2
            text-black text-right
             outline-none" 
             placeholder="شماره تلفن همراه خود را وارد کنید"
             v-model="user.mobile"> 
        <input type="text" class=" w-2/3 mr-auto ml-auto
         bg-orange-300 border-2
          border-black rounded
           placeholder:text-black p-2
            text-black text-right
             outline-none" 
             placeholder="کلمه عبور خود را وارد کنید"
             v-model="user.password">
            
             <input type="text" class=" w-2/3 mr-auto ml-auto
         bg-orange-300 border-2
          border-black rounded
           placeholder:text-black p-2
            text-black text-right
             outline-none" 
             placeholder="کلمه عبور خود را مجددا وارد کنید"
             v-model="user.confirm_password">
        <button type="submit" class=" w-2/3 ml-auto mr-auto border-2 border-black rounded h-10 hover:bg-white ">ورود</button>
    </div>
            <div v-if="errors" v-for="(item, index) in errors" :key="index" class=" text-center mt-4"> <h3 >{{ item }}</h3></div>

</div>
    </form>
</template>

<script setup>
import axios from 'axios';

definePageMeta({
    layout:'sign-in-sign-up'
})

const errors=ref([])
const user = ref({
  "username": "",
  "mobile": "",
  "password": "",
  "confirm_password": ""
})
const sign_up = async () => {
    errors.value=[]

   if (user.value.username.length<= 8) {
    errors.value.push('نام کاربری باید حداقل شامل 8 حرف باشد')
    }
   if (user.value.password.length<=8 ) {
       errors.value.push('کلمه عبور باید حداقل شامل 8 حرف باشد')
    }
   if (user.value.password ==!user.value.confirm_password) {
    errors.value.push('از درست بودن تکرار کلمه عبور اطمینان حاصل کنید')
   }
    if (errors.value.length == 0) {
        try {
            const data = await axios.post('https://api.moallem.sch.ir/hire/v1/account/register/', user.value)
                   console.log(data);

        } catch (error) {
             const {status} = error.response;
    if (status === 400) {errors.value.push('این اطلاعات اخیرا ثبت شده است')};
        }
            // .then(e => console.log(e))
       
       
    
    

}
}
</script>

<style  scoped>
.signin-container{
    min-height: 500px;
}
h3{
    color: red;
    font-weight: bold;

}
</style>