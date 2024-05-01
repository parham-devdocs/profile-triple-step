<template>
    <div class=" relative  mt-10 ">
        <div class=" h-auto  bg-white absolute box-tag">اطلاعات تماس</div>
    <div dir="rtl" class="info-box pt-6   border-blue-700 border-2  rounded pb-9 pl-5 pr-5 grid grid-cols-4   ">
    

<div v-for="(item, index) in contactInfo" :key="index" class="postcode_container border-2 rounded border-black h-12 relative w-56">

    <input type="text" class=" w-full text-right outline-none mt-2 " name="contact" v-model="item.value"    >

<div class="address-lable absolute"><label for="contact">{{ item.lable}}</label></div>

</div>
        </div>
    </div>
    
</template>

<script setup>
import { userInfo } from '~/pages/profile/composables/stores/user';

const personalinfo = reactive({
    phone:'',
    email:''

})

const contactInfo = ref([
    
    { title: 'phone', lable: 'شماره همراه',value:'' },
    {title:'email' , lable:'ایمیل',value:''}
])
const Info=userInfo()
watch(contactInfo.value, () => {
    contactInfo.value.forEach(e => {
        Info.$state[e.title] = e.value
      console.log(Info.$state);
    })
    
})


</script>

<style  scoped>

.box-tag{
    top: -15px;
    right: 10px;
    
    
}
.address_input-container{
width: 90%;
}
.address-lable{
    top: -15px;
    right: 6px;
    height: 30px;
    background-color: white;
}
</style>