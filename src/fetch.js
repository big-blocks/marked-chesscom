import fs from 'fs'

export async function fetchChesscomData(token, username) {
	try {
		const res = await fetch(`https://api.chess.com/pub/player/${username}`)

		const json = await res.json()
		await fs.promises.writeFile('token', token)
		await fs.promises.writeFile('file.json', JSON.stringify(json, null, '\t'))
		return {
			id: username,
			json,
		}
	} catch {
		return {
			id: 'unknown',
			json: {}
		}
	}
}
