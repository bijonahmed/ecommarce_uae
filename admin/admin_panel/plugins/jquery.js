// plugins/jquery.js
import jQuery from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/jquery.dataTables.css'

if (process.browser) {
  window.jQuery = jQuery
  window.$ = jQuery
  require('datatables.net')
}
