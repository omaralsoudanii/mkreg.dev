# mkreg.dev


My personal site powered by

- [NGINX](https://www.nginx.org/)
- [HAProxy](https://www.haproxy.org/) (stopped using it for now)
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

Create a `.env` file similar to [`.env.example`](https://github.com/omaralsoudanii/mkreg.dev/blob/main/.env.example)

```bash
$ git clone https://github.com/omaralsoudanii/mkreg.dev
$ cd mkreg.dev
$ yarn
$ yarn dev
```

## Self hosted with Docker

You can check the [`docker`](https://github.com/omaralsoudanii/mkreg.dev/tree/main/docker) folder to have an idea on how to deploy the app.

## Shell script helper for common tasks
There is also a shell script helper for building, restarting the app, pull from git etc..

Read about the [installation](https://github.com/omaralsoudanii/mkreg.dev/tree/main/docker/scripts/install.md)

## Vercel

The app can be deployed to Vercel without extra dependencies. 

Fork or clone the app then deploy, don't forget to add the environment variables through Vercel dashboard.

## Speedlify

[Speedlify](https://github.com/zachleat/speedlify) is a tool that automate continuous performance measurements.

Check here to see my results: [mkreg-speedlify](https://mkreg-speedlify.netlify.app)

To generate the results, I have this [Repository](https://github.com/omaralsoudanii/speedlify) deployed on Netlify