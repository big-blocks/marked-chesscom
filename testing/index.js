import { marked } from 'marked'
import markedLichess from '../src/index.js'

const text = `# heading

before

\`\`\`lichess
hyperupcall
\`\`\`

after
`

marked.use(markedLichess())
console.info(marked.parse(text))
