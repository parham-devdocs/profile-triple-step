<template>
    <div class=" relative ">
        <div class=" absolute box-tag">اطلاعات اولیه</div>
    <div  dir="rtl" class="info-box grid grid-cols-4  gap-x-8 border-blue-700 border-2 place-content-between rounded pb-9 pl-5 pr-5 ">
        
<div class="detail-box border-2 border-solid rounded border-black  flex justify-center items-center h-11 relative mt-10"
 v-for="(item, index) in personalInfo" :key="index">
 
    <input type="text" name="field" class="input outline-none text-right" v-if="!item.selection" v-model="item.value" >
    <select name="field" v-else class=" outline-none w-auto" v-model="item.value">
<option v-for="(i,index) in item.options" :key="index"  :value="i.option">{{ i.lable }}</option>
    </select>


   <div class="field-box absolute  bg-white"> <label for="field" >{{ item.lable }}</label></div>
</div>

        </div>
    </div>
</template>

<script setup>
import { userInfo } from '~/pages/profile/composables/stores/user';




const personalInfo = ref([
    {
        title: 'gender', lable: 'جنسیت', value: '', selection: true,
        options: [
            { option: 'male', lable: 'مرد' },
            {option:'female',lable:'زن'}
]
    },
    { title: 'first_name', lable: 'نام',value:'',selection:false },
    { title: 'last_name', lable: 'نام خانوادگی',value:'',selection:false },
    { title: 'father_name', lable: 'نام پدر', value: '',selection:false },
    { title: 'shenasneme_id', lable: 'شماره شناسنامه',value:'',selection:false },
    { title: 'place_issue', lable: 'محل صدور',value:'' ,selection:false },
    { title: 'date_birth', lable: 'تاریخ تولد',value:'',selection:false },
    { title: 'place_birth', lable: 'محل تولد',value:'',selection:false }
    
])
const user=userInfo()
watch(personalInfo.value, () => {
    personalInfo.value.forEach(e => {
        user.$state[e.title] = e.value

    })
    

    
})
</script>

<style  scoped>
.info-box{
    height: auto;
    
}
.box-tag{
    top: -15px;
    right: 10px;
    width: 100px;
    height: auto;
    background-color: white;
}
.field-box{
top: -14px;
right: 0px;
}
.sex-lable{
    top:-14px;
    right: 0px;
    }
</style>