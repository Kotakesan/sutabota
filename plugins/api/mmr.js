/* eslint-disable camelcase */

const resource = 'api.henrikdev.xyz/valorant/v1/by-puuid/mmr'

export default class {
  constructor(axios) {
    this.axios = axios
  }

  list(params) {
    return this.axios.get(resource, {
      params
    }).then(({
      data
    }) => data)
  }

  post(new_schedule) {
    return this.axios.post(resource, {
      new_schedule
    }).then(({
      data
    }) => data)
  }

  delete(id) {
    return this.axios.delete(`${resource}/${id}`).then(({
      data
    }) => data)
  }

  put(id, update_schedule) {
    return this.axios
      .put(`${resource}/${id}`, {
        update_schedule
      })
      .then(({
        data
      }) => data)
  }
}
