import Vue from 'vue'

import vueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/es'

Vue.use(vueMoment, { moment })
Vue.filter('moment', (date, format) =>
  moment
    .utc(date)
    .local()
    .format(format)
)
