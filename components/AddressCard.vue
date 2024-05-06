<template>
    <div class=" relative  mt-10 ">
        <div class=" absolute box-tag">نشانی</div>
    <div  class="info-box   border-blue-700 border-2  rounded pb-9 pl-5 pr-5 flex flex-col items-end justify-between min-h-48  ">
    
<div v-for="(item, index) in address_postcode" :key="index" :style="{width:item.width}" class="address_input-container border-2 rounded border-black h-12 relative   mt-6 pr-2">
<input type="text" class=" w-full text-right outline-none mt-2 " name="address" v-model="item.value">
<div class="lable absolute"><label for="address">{{ item.label }}</label></div>
</div>
<!-- <div class="postcode_container border-2 rounded border-black h-12 relative w-56">
<input type="text" class=" w-full text-right outline-none mt-2 " name="address" v-model="address_postcode[1].value">
<div class="address-lable absolute"><label for="address">کد پستی</label></div>
</div> -->
        </div>
    </div>
</template>

<script setup>
import { userInfo } from '~/pages/profile/composables/stores/user';

const address_postcode = ref([
    { title: 'address' ,label:'نشانی',value:'',width:'90%' },
    { title: 'postCode',label:'کد پستی',value:'',width:'15%' },
    
])
const Info=userInfo()
watch(address_postcode.value, () => {
console.log(userInfo().address);
    Info.address = address_postcode.value[0].value

    Info.post_code = Number(address_postcode.value[1].value)

})
</script>

<style  scoped>

.box-tag{
    top: -15px;
    right: 10px;

    height: auto;
    background-color: white;
}

.lable{
    top: -15px;
    right: 6px;
    height: 30px;
    background-color: white;
}
</style>