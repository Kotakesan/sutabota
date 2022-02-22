export default function ({
  $axios,
  app,
  store,
  error
}) {
  $axios.onRequest((config) => {})

  $axios.onResponse((response) => {})

  $axios.onError((err) => {
    console.log(err.response)
  })
}
