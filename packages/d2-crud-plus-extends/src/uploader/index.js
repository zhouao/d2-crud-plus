import choose from './choose'
import config from './config'
import lodash from 'lodash'
function install (Vue, options) {
  lodash.merge(config, options)
}
function init (uploader, type) {
  if (!uploader.inited) {
    uploader.inited = true
  }
  const buildKey = config.buildKey
  let options = {
    alioss: config.alioss,
    cos: config.cos,
    form: config.form,
    qiniu: config.qiniu
  }
  if (options[type].buildKey == null) {
    options[type].buildKey = buildKey
  }
  console.log('uploader [' + type + '] init ....')
  uploader.init(options[type])
}
export default {
  install,
  choose,
  getUploader (type) {
    if (type == null || type === '') {
      type = this.getDefaultType()
    }
    return choose.get(type).then(uploader => {
      init(uploader, type)
      return uploader
    })
  },
  getConfig () {
    return config
  },
  getDefaultType () {
    return config.defaultType ? config.defaultType : 'cos'
  }
}
