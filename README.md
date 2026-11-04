# Jesus Film Cast receiver

Static hosting for the current custom Google Cast Web Receiver and the legacy
Styled Media Receiver skin. GitHub Pages publishes `docs/` from `main`.

## Hosting URLs

- Current receiver: https://jesusfilm.github.io/cast-receiver/index.html
- Legacy skin: https://jesusfilm.github.io/cast-receiver/chromecast/jfm_cast_receiver.css

These are replacement URLs for later testing and an explicitly authorized Cast
console cutover. Existing Cast registrations still use AWS.

## Published files

- `index.html`: current receiver entry point for the existing Cast application
  `5FE54201` (JFM Prod v2).
- `css/receiver.css`, `js/receiver.js`, `js/queuing.js`: current receiver code.
- `chromecast/jfm_cast_receiver.css`: legacy Styled Media Receiver skin.
- `chromecast/{ready,background,loading,watermark}.svg`: images shared by the skins.

The receiver plays media from URLs supplied by the sender app. Videos are not
hosted in this repository. Google Cast SDK scripts remain hosted by Google.

## Migration status

This is replacement hosting only. Publishing this repository does not redirect
existing mobile apps. AWS buckets, CloudFront distributions, and Google Cast
console settings have not been changed as part of this setup.

Before any production cutover:

1. Verify the Pages receiver and legacy CSS URLs, including all dependent assets.
2. Test the new receiver with a separate test Cast registration and registered
   device, using representative iOS and Android senders.
3. Test the legacy skin with a legacy sender. Confirm media origins permit the
   replacement receiver origin where CORS restrictions apply.
4. Update the URL on existing Cast registration `5FE54201`; preserve its ID.
5. Identify the legacy Cast registration and update its Skin URL; preserve its ID.
6. Test production casting and monitor before retiring old AWS hosting.

Country flags and thumbnails hardcoded in older mobile builds are separate from
this Cast migration and are not repaired by changing Cast registrations.

## Updating

Commit static files under `docs/` to `main`. GitHub Pages deploys the branch's
`/docs` directory; `.nojekyll` prevents Jekyll processing. Keep asset links
relative so project-path hosting works. The CSS image URLs are relative to the
stylesheet location, not to `index.html`.

To preview the static files locally:

```sh
python3 -m http.server 8000 --directory docs
```

Actual Cast playback must be tested on Cast hardware using an HTTPS deployment.

## Provenance and scope

`migration-sources.json` records the original public CloudFront source URLs and
SHA-256 hashes. The SVG images were copied without modification. Changes from
the original hosted files are limited to local image references, explicit HTTPS
for Google's SDK scripts, and removal of an unused commented signed-media URL
from `js/queuing.js`. Receiver playback logic is unchanged.

The original Google copyright and Apache 2.0 notices are retained in the source
files. See `THIRD_PARTY_NOTICES.md`. No license to Jesus Film branding is implied.
