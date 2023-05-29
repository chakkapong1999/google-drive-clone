export function markFields (text, length) {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
  return text
}

export function successToast (vueRef, msg) {
  vueRef.$bvToast.toast(msg, {
    title: 'Success',
    autoHideDelay: 5000,
    variant: 'success',
    appendToast: true,
    solid: true
  })
}

export function errorToast (vueRef, msg) {
  vueRef.$bvToast.toast(msg, {
    title: 'Error',
    autoHideDelay: 5000,
    variant: 'danger',
    appendToast: true,
    solid: true
  })
}
