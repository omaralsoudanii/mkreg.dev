import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { kebabCase } from '@/lib/utils'

const root = process.cwd()

export async function getAllTags(type) {
  const files = fs.readdirSync(path.join(root, 'src', 'data', type))

  const tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(
      path.join(root, 'src', 'data', type, file),
      'utf8'
    )
    const { data } = matter(source)
    if (data.tags) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}