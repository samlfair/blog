const getPath = (path, prefix = '') => {
  const regex = /[\w\-\/]+/
  return prefix + path.match(regex)
}

const globToArray = (glob) => {
  const array = Object.keys(glob).map((key) => {
    const path = getPath(key)
    const post = glob[key]
    return {
      key,
      path,
      ...post,
    }
  })

  return array
}

export default globToArray
