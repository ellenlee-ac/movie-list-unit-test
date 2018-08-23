function searchTitle (dataList, str) {
  const regex = RegExp(str, 'i')
  return dataList.filter(item => item.title.match(regex))
}
