# Meme Generator

Type top and bottom text, then click a meme template to caption it. Templates and captioned images come from the [imgflip API](https://imgflip.com/api). Uses Redux with redux-thunk.

## Setup

Captioning memes needs a free imgflip account. Copy `.env.example` to `.env.local` and fill in your username and password. `.env.local` is gitignored.

Vite bundles `VITE_` variables into the browser JavaScript, so anyone who can load the built app can read them. Use this for local development only, and don't deploy a build that contains your credentials.

## Running it

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```
