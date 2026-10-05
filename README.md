# Lonerpixels website

Static site (HTML, CSS, JavaScript). No build step and no server code. Upload the contents of this folder to any static host.

## Structure

```
index.html              Home page (all sections)
404.html                Custom "not found" page
favicon.svg, apple-touch-icon.png, og-image.jpg
robots.txt, sitemap.xml
_headers                Security + caching headers (Netlify / Cloudflare Pages)
.htaccess               Same, for Apache / cPanel hosting
assets/
  css/style.css
  js/main.js            Gallery, lightbox, pixel background, contact form
  img/thumb/            Small images (hero + gallery ring)
  img/full/             Large images (enlarged gallery view, wide banner)
  img/logos/            Client logos
```

## Deploy

**Netlify (easiest):** drag this folder onto app.netlify.com/drop. `_headers` is picked up automatically.
**Cloudflare Pages / Vercel / GitHub Pages:** point the project at this folder, no build command, output directory `/`. (Vercel and GitHub Pages ignore `_headers`; add equivalent headers in their settings if you want them.)
**cPanel / FTP host:** upload everything, including the hidden `.htaccess`, into `public_html`.

## Connect lonerpixels.com

1. Add `lonerpixels.com` as a custom domain in your host's dashboard.
2. At your domain registrar, create the DNS records the host shows you (usually an A record or ALIAS for `lonerpixels.com` and a CNAME for `www`).
3. Wait for DNS and the free SSL certificate (minutes to a few hours), then open https://lonerpixels.com.
4. Submit `https://lonerpixels.com/sitemap.xml` in Google Search Console.

## Contact form: automatic delivery

Out of the box the form opens the visitor's email app with the request addressed to lonerpixels@gmail.com. To have leads arrive in your inbox automatically:

1. Create a free form at formspree.io using lonerpixels@gmail.com and copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. In `assets/js/main.js` set `const FORM_ENDPOINT="https://formspree.io/f/abcdwxyz";`
3. Redeploy. If sending fails, the form falls back to the email app.

The Content-Security-Policy in `_headers` / `.htaccess` already allows formspree.io. If you use a different service, add its domain to `connect-src` and `form-action`.

## Editing content

- Text: edit `index.html`.
- Colours and fonts: variables at the top of `assets/css/style.css`.
- Gallery frames: the `GALLERY` list at the top of `assets/js/main.js` (thumbnail, large image, description).
- Videos: each `.reel` in `index.html` has a `data-id` (the YouTube Short ID).
- Replace an image by overwriting the file with the same name. Keep thumbs around 800px on the long side and full images around 1600px.

## Pre-launch checklist

- [ ] Open the site on phone and desktop and click every menu link
- [ ] Send a test lead through the form
- [ ] Play each Visual reference video
- [ ] If you change the Content-Security-Policy, re-test fonts, videos and the form
