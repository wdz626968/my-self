import Vue from 'vue'
import dateFns from 'date-fns'
Vue.filter('timeFormat', function (value, format) {
  return dateFns.format(value, format)
})
