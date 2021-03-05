import * as http from 'http'

const Url = 'https://www.youtube.com/watch?v=JQDHz72OA3c'

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })

  res.end(`${Url}`)
})

const _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
  _base = _alphabet.length

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

// console.log(encode(123456789))

server.listen(9000)
console.log(`server started at http://localhost:9000`)
