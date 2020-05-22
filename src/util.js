let VueSet = null

let VueDelete = null

module.exports.setVueDelete = function (vueDelete) {
  VueDelete = vueDelete
}

module.exports.getVueDelete = function () {
  return VueDelete
}

module.exports.setVueSet = function (vueSet) {
  VueSet = vueSet
}

module.exports.getVueSet = function () {
  return VueSet
}

module.exports.createIdentifier = function () {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`
}
