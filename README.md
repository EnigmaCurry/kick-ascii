# kick-ascii

A mobile-first responsive layout implemention of
[asciinema-player](https://github.com/asciinema/asciinema-player). Self host
your own ASCII theatre on the web.

[![asciicast](http://enigmacurry.github.io/kick-ascii/cast/index.jpg)](http://enigmacurry.github.io/kick-ascii/v.htm?cast=index&bg=matrix.jpg)

 * Fork this repository on GitHub.

 * Go to the repository Settings -> Options -> GitHub Pages -> Source -> **choose master branch dropdown** 
 
 * Visit `http://USERNAME.github.io/kick-ascii` (change USERNAME to your github username or organization name.)

   * Link to index.cast:
     * [http://enigmacurry.github.io/kick-ascii](http://enigmacurry.github.io/kick-ascii)
   * Link to a specific cast:
     * [http://enigmacurry.github.io/kick-ascii/v.htm?cast=matrix](http://enigmacurry.github.io/kick-ascii/v.htm?cast=matrix)
   * Specify a custom background image:
     * [http://enigmacurry.github.io/kick-ascii/v.htm?cast=k8s-lbry&bg=lbry.png](http://enigmacurry.github.io/kick-ascii/v.htm?cast=k8s-lbry&bg=lbry.png)
     
 * Make new recordings with [asciinema](https://asciinema.org/). Put cast files
   in the `cast` directory. Commit your changes to git, and push to GitHub.
 
 * Alternatively, upload this entire directory to any webhost. It's just a
   static website.

## What is v.htm? (and why not just index.html???)

Not all webhosts support directory indexes. **[I'm looking at you DigitalOcean Spaces.](https://www.digitalocean.com/community/questions/spaces-set-index-html-as-default-landing-page)**

On DigitalOcean Spaces my URLs look like this:

```
https://asciicast.sfo2.digitaloceanspaces.com/v.htm?cast=k8s-lbry&bg=lbry.png
```

But why `v.htm`?
 
 * `index.html` in the URL is ugly.
 * It needs to be `.html` or `.htm` to automatically be categorized as
   content-type `text/html`.
 * `v.htm` is shorter than `v.html`.

