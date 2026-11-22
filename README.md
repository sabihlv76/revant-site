# Portfolio

A personal portfolio site built with Next.js 16 and Tailwind CSS 4. It has a home page (intro, selected work, about, experience, toolkit and contact), a case-study page for each project, light and dark themes, and SEO extras (sitemap, robots.txt and a generated social preview image).

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Make it yours

All of the text lives in [`content/site.ts`](content/site.ts). Edit it and every page updates:

- **`profile`**: your name, role, email, intro, about paragraphs and social links. In `headline` and `contactHeadline`, wrap words in `*asterisks*` to set them in the italic accent style.
- **`projects`**: one entry per project. Each one gets its own page at `/projects/<slug>`. To show a screenshot instead of the generated title card, put an image in `public/` (for example `public/projects/ledger.jpg`) and set `cover: "/projects/ledger.jpg"`.
- **`experience`** and **`skills`**: your work history and toolkit.

To change the colors, edit the tokens at the top of [`app/globals.css`](app/globals.css). The favicon is [`app/icon.svg`](app/icon.svg).

## Deploy

The site is fully static, so it deploys anywhere that runs Next.js. On [Vercel](https://vercel.com/new), import the repository and it works with no extra setup.

If you deploy somewhere else, set the `SITE_URL` environment variable to your domain (for example `https://yourname.com`) so the sitemap and social preview links point to the right place.
