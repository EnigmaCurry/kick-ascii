# kick-ascii

A mobile-first responsive layout implemention of
[asciinema-player](https://github.com/asciinema/asciinema-player). Self host
your own ASCII theatre on the web.

[![asciicast](https://asciicast.rymcg.tech/cast/index.jpg)](https://asciicast.rymcg.tech/v.htm?cast=index&bg=matrix.jpg)

 * Put your cast files in the `cast` directory.

 * Run Python web server to serve locally:

  ```
  python3 -m http.server
  ```

 * View in your browser:

   * Link to index.cast:
     * [http://localhost:8000](http://localhost:8000)
   * Link to a specific cast:
     * [http://localhost:8000/v.htm?cast=matrix](http://localhost:8000/v.htm?cast=matrix)
   * Specify a custom background image:
     * [http://localhost:8000/v.htm?cast=k8s-lbry&bg=lbry.png](http://localhost:8000/v.htm?cast=k8s-lbry&bg=lbry.png)

 * Upload this whole directory to your webhost.
 

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

