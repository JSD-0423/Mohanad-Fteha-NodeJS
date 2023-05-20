const http = require('http')
const fs = require('fs')

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
	const dataToAppend = `${req.url}\t\t${new Date().toDateString()}\n`

	fs.appendFile('./log.txt', dataToAppend, err => {
		if (err) throw err
		res.end('Data is appended correctly.')
	})
})

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
})
