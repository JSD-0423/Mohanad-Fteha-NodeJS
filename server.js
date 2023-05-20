const http = require('http')
const fs = require('fs/promises')

const host = 'localhost'
const port = 8000

const server = http.createServer(async (req, res) => {
	const dataToAppend = `${req.url}\t\t${new Date().toLocaleTimeString()}\n`

	try {
		await fs.appendFile('./requests.txt', dataToAppend)
	} catch (e) {
		throw e
	}
	res.end('Data is appended')
})

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
})
