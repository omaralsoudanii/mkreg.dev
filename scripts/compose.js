const fs = require('fs')

const args = process.argv.slice(2)
const title = args[0]
const ext = typeof args[1] !== 'undefined' ? args[1] : 'mdx'
// Remove special characters and replace space with -
const fileName = title
  .toLowerCase()
  .replace(/[^a-zA-Z0-9 ]/g, '')
  .replace(/ /g, '-')
  .replace(/-+/g, '-')
const d = new Date()
const date = [
  d.getFullYear(),
  ('0' + (d.getMonth() + 1)).slice(-2),
  ('0' + d.getDate()).slice(-2),
].join('-')

const frontMatter = `---
title: ${title}
publishedAt: '${date}'
description:
featuredImage: 
images: []
---
`

fs.writeFile(`src/data/${fileName}.${ext}`, frontMatter, (err) => {
  if (err) throw err
})
