<template>
    <div class=" relative  mt-10 ">
        <div class=" h-auto  bg-white absolute box-tag">وضعیت تاهل</div>
    <div dir="rtl" class="info-box pt-6   border-blue-700 border-2  rounded pb-9 pl-5 pr-5 grid grid-cols-4   ">
    

<div  class="postcode_container border-2 rounded border-black h-12 relative w-20">
<div class="marital_status_lable absolute bg-white "><label for="married"  >تاهل</label></div>
<select name="married" class=" mt-4 outline-none "  v-model="married.value" >
    <option value="married">متاهل</option>
    <option value="single" selected>مجرد</option>
</select>
</div>
        </div>
    </div>
</template>

<script setup>
import { userInfo } from '~/pages/profile/composables/stores/user';

const user=userInfo()
const married = ref(
    { title: 'marital_status', lable: 'وضعیت ناهل',value:'' },
)

watch(married.value, () => {
    user.marital_status = married.value.value
    console.log(user.marital_status);
    
})
</script>

<style  scoped>

.box-tag{
    top: -15px;
    right: 10px;
    
    
}
.marital_status_lable{
    top: -15px;
    right: 0px;
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