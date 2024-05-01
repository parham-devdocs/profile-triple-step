<template>
    <form @submit.prevent="login">
<div class="signin-container mr-auto ml-auto h-96 pt-10 bg-orange-300 w-96 rounded">
    <div class=" flex h-64 flex-col justify-between">
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
             placeholder="کلمه عبور خود را وارد کنید"
             v-model="user.password">
        <button class=" w-2/3 ml-auto mr-auto border-2 border-black rounded h-10 hover:bg-white ">ورود</button>
    </div>
</div>
    </form>
</template>

<script setup>
import axios from 'axios';

definePageMeta({
    layout:'sign-in-sign-up'
})
const user = ref({
    username: '',
    password:''
})
const login =async () => {
try {
     const data = await axios.post('https://api.moallem.sch.ir/hire/v1/auth/jwt/login/',

    user.value
    )
    console.log(data);
} catch (error) {
    console.log(error);
}
   

}
</script>

<style  scoped>

</style>