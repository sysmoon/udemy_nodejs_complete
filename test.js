const fetchData = (callback) => {
  setTimeout(() => {
    callback('Done!');
  }, 1500);
}

setTimeout(() => {
  console.log('Timeout is done!')
  fetchData( text => {
    console.log(text)
  })
}, 2000)
