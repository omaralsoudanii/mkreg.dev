import { PSDB } from 'planetscale-node'

const branch = process.env.PLANETSCALE_BRANCH === 'main' ? 'main' : 'dev'
const db = new PSDB(branch)

export default db
