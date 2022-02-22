import AcountApi from './api/acount'
import MmrApi from './api/mmr'

export default ({
  $axios
}, inject) => {
  const api = {
    acount: new AcountApi($axios),
    mmr: new MmrApi($axios),
  }

  inject('_api', api)
}
