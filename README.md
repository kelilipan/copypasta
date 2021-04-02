# Copypasta - A copypasta archive app

<p align="center"><img src="public/logo.png" width="360"></p>

A copypasta is a block of text which is copied and pasted across the Internet by individuals through online forums and social networking websites. Copypastas are said to be similar to spam. [(src:Wikipedia)](https://en.wikipedia.org/wiki/Copypasta#:~:text=A%20copypasta%20is%20a%20block,to%20be%20similar%20to%20spam.).

This apps was made to archive [copypasta](https://copypasta.wisesa.dev) and copy/paste copypasta easily 🙃.

# Run development server?

First, install all packages:

```
yarn install
#or
npm install
```

then, run the development server:

```
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser.

# API Documentation

- GET https://copypasta.wisesa.dev/api/random

get random copypasta

- GET https://copypasta.wisesa.dev/api/all

get all copypasta

- GET https://copypasta.wisesa.dev/api/{id}

get copypasta by idx (see [dataset](data/copypasta.js))

# Contribute?

Wanna add a funny copypasta that you just found on the internet? read our [contribution guide](CONTRIBUTING.md).

# Credits

Tools used

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [next-pwa](https://github.com/shadowwalker/next-pwa)

# License

[MIT](LICENSE)
