import { PSDB } from 'planetscale-node'

const db = new PSDB(process.env.PLANETSCALE_BRANCH)

export default db
