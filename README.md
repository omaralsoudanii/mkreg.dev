# mkreg.dev

My personal site powered by

- [NGINX](https://www.nginx.org/)
- [Docker](https://www.docker.com/)
- [Cloudflare](https://cloudflare.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [PlanetScale](https://www.planetscale.com/)

## Compatibility

If for some reason the app fails to start, it might be due incompatible Node version.

I use NVM with Yarn, and the repo have [.nvmrc](https://github.com/omaralsoudanii/mkreg.dev/blob/main/.nvmrc) file, so you can check what's the current version I'm using.

## Running Locally

```bash
$ git clone https://github.com/omaralsoudanii/mkreg.dev
$ cd mkreg.dev
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/omaralsoudanii/mkreg.dev/blob/main/.env.example)

Also you need a [PlanetScale](https://www.planetscale.com/) database, check their docs and setup one.

If you are using vscode, my workspace settings are commited to git – if you hate it then just delete the folder and reload vscode.



