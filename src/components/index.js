import BaseTable from './BaseTable'
import Paging from './Paging'
import ImgUpload from './ImgUpload'
import Query from './Query'
import MediaUpload from './MediaUpload'

const components = [
  { name: 'BaseTable', component: BaseTable },
  { name: 'Paging', component: Paging },
  { name: 'ImgUpload', component: ImgUpload },
  { name: 'Query', component: Query },
  { name: 'MediaUpload', component: MediaUpload },
]

export default function (Vue) {
  components.forEach(v => {
    Vue.component(v.name, v.component)
  })
}