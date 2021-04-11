import path from 'path'
import { Environment } from '@/lib/environment'

const cacheRoot = path.join(process.cwd(), '.cache')
const fileCache = Environment.nextImages.cache
const fs = require('fs')

const makeDirectory = (path: string) => {
  if (fs.existsSync(path)) return true
  try {
    fs.mkdirSync(path)
  } catch {
    return false
  }
  return true
}

export function getCache<T>(key: string | null): T | null {
  if (!fileCache || !key) return null

  const filePath = path.join(cacheRoot, `${key}.txt`)
  if (fs.existsSync(filePath)) {
    const value = fs.readFileSync(filePath)
    return JSON.parse(value.toString()) as T
  }

  return null
}

export function setCache(key: string | null, object: unknown): void {
  if (!fileCache || !key) return
  if (!makeDirectory(cacheRoot)) return

  const filePath = path.join(cacheRoot, `${key}.txt`)
  try {
    fs.writeFileSync(filePath, JSON.stringify(object as JSON))
  } catch (error) {
    console.warn(
      'Could not write to file cache. This is expected during ISR, but not during deploy.',
      error
    )
  }
}
