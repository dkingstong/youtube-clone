async function a() {
  setTimeout(() => {
    console.log('aaa')
  },0)
  b() //await b has a different log
  console.log('hey')
}

async function b() {
  const a = await 'ees'
  console.log(a)
}

a()

