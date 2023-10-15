import { runAsWorker } from 'synckit'
import { fetchChesscomData } from "./fetch.js";

runAsWorker(async (...args) => {
	return await fetchChesscomData(...args)
})
