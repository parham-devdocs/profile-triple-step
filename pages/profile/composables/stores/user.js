import { defineStore } from "pinia";

export const userInfo = defineStore('userInfo',{
    state: () => ({
  "mobile": "",
  "military_status": "",
  "marital_status": "",
  "first_name": "",
  "last_name": "",
  "gender": "",
  "father_name": "",
  "shenasname_id": "",
  "place_issue": "",
  "date_birth": "",
  "place_birth": "",
  "address": "",
  "post_code": 0,
  "phone": "",
  "email": "",
  "children_count": 1,
  "dependants_count": 1,
  "partner_job": "string",
  "partner_job_address": "string"
})
})
