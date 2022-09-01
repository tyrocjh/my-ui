/* 清除两端空格 */
export default function(el) {
  if (el.nodeName != 'INPUT') {
    let cels = [...el.childNodes]

    cels.forEach((item) => {
      if (item.nodeName === 'INPUT') {
        el = item
      }
    })
  }
  el.onchange = function() {
    let val = el.value

    if (val) {
      el.value = val.replace(/^\s+|\s+$/gm, '')
    } else {
      el.value = ''
    }
  }
}
