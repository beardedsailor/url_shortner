// const Url = 'https://www.youtube.com/watch?v=FGvOdbkQbsI',
const myurl = 'https://raghav.com',
  db: info[] = []

const _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
  _base = _alphabet.length
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//   })

//   res.end(`${Url}`)
// })

function encode(num: number): string {
  let str = ''
  while (num > 0) {
    str = _alphabet.charAt(num % _base) + str
    num = Math.floor(num / _base)
  }
  return str
}

function decode(str: string): number {
  let num = 0
  for (var i = 0; i < str.length; i++) {
    num = num * _base + _alphabet.indexOf(str.charAt(i))
  }
  return num
}

function checkUrl() {
  const inputBox = document.getElementById('inp'),
    originalUrl = inputBox?.innerText

  const id = generateRandomId(),
    encodedId = encode(id)

  addDataToDb(originalUrl as string, id, encodedId)
}

function generateRandomId(): number {
  const no = Math.random() * 10000011
  return no
}

function addDataToDb(
  originalUrl1: string,
  randomId1: number,
  encodedId1: string
) {
  db.push({ id: randomId1, originalUrl: originalUrl1, shortUrlId: encodedId1 })
  const newUrl = document.getElementById('main')
  const b = document.createElement('p')
  const c = document.createElement('a')
  c.innerText = myurl + '/' + encodedId1
  c.href = myurl + '/' + encodedId1
  b.appendChild(c)
  newUrl?.appendChild(b)
}

type info = {
  id: number
  originalUrl: string
  shortUrlId: string
}

// server.listen(9000)
// console.log(`server started at http://localhost:9000`)
