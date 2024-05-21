import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

export const useUserStore = defineStore(
  'bblog-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref({})
    const getUser = async () => {
      user.value = (await userGetInfoService()).data.data
    }
    const removeUser = () => {
      user.value = {}
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      removeUser
    }
  },
  {
    persist: true
  }
)
