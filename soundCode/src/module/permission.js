import Vue from 'vue'
import storage from './storage'
Vue.directive('permission-type', {
  inserted: function (el, binding) {
    try {
      const user = storage.getUser()
      if (user.type === 'A') {
        /* 普通用户登录 */
        if (user.moduleList) {
          if (binding.value === undefined) {
            return
          }
          let result = user.moduleList.some(item => {
            return item.id === binding.value
          })
          if (!result) {
            // $(el).remove()
          }
        } else {
          // $(el).remove()
        }
      }
    } catch (ex) {
      console.error(ex)
    }
  }
})

Vue.directive('permission-user-type', {
  inserted: function (el, binding) {
    try {
      const user = storage.getUser()
      let type = ''
      if (!user) {
        // $(el).remove()
        return
      }
      if (user.type === 'A') {
        type = '100'
      } else if (user.userType === 'S') {
        type = '001'
      } else {
        type = '010'
      }
      if (!binding.value) {
        return
      }
      if ((parseInt(binding.value, 2) & parseInt(type, 2)) !== parseInt(type, 2)) {
        // $(el).remove()
      }
    } catch (ex) {
      console.error(ex)
    }
  }
})
