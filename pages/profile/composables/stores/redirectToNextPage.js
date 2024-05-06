import { defineStore } from "pinia";

export const redirect= defineStore('userInfo',{
    state: () => (
        {redirect:false}
  )
})
