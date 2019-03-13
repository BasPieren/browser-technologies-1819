function storeData(e) {
  console.log(!sessionStorage.getItem('data'))
  if (!sessionStorage.getItem('data')) {
    sessionStorage.setItem('data', JSON.stringify(e))
  } else {
    sessionStorage.setItem('data2', JSON.stringify(e))
  }
}

export { storeData }
