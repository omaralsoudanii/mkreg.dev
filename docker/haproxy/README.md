## HAProxy config

This is **unused** ‐ although I'm keeping it as a reference, or if in the future I need it. The reasoning is that
I believe at the time of this writing ‐ this configuration has specific optimization for serving **Next.js** ‐ I made sure to speed up every single request with different techniques based on the request, an effort for about a month ‐ then again I got bored and switched to NGINX and the cycle continues.

It's safe to delete the whole `haproxy` directory ‐ or you can read it and maybe use it on your own.

For reference there are seperate branches for every software I integrated with this app, you can checkout to any of them, do a benchmark ‐ or anything really.

- [HAProxy branch](https://github.com/omaralsoudanii/mkreg.dev/tree/with-haproxy)
- [NGINX branch](https://github.com/omaralsoudanii/mkreg.dev/tree/with-nginx)

Keep in mind they might not be synced.