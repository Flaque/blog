---
path: "/bootstrapping-comments-github"
title: "Bootstrapping Comments with Github"
date: "2018-08-13T22:49:41Z"
---

You can use Github in a lot of different ways if you want. It's pretty easy to figure out that you can link to a "new" issue with something like this:

```
https://github.com/Flaque/blog/issues/new
```

But did you know that that link supports `title` and `body` queries?

```
https://github.com/flaque/blog/issues/new?title=my+title&body=my+body+text
```

This lets you use github in a lot of different ways if you want. For example, this site uses github issues as a comment system to avoid having a database or server running somewhere.

At the bottom of the page, you can click "Ask a question" and it will take you to a prefilled out link where you can leave an issue on the repo itself.

But we could take this a step further; create your own react form and let people create issue with your own UI:

```js
<div>
  <input type="text" placeholder="Jane Jacobs" name="name" />
  <input type="email" placeholder="jane@example.com" name="email" />

  <textarea type="text" placeholder="Your messsage" />

  <button>Submit</button>
</div>
```

Unstyled, that might look something like this:

<div>
  <input type="text" placeholder="Jane Jacobs" name="name" /> <br><br>
  <input type="email" placeholder="jane@example.com" name="email" />

<textarea type="text" placeholder="Your messsage"></textarea>
<br/><br/>
<button>Submit (Doesnt actually do anything)</button>

</div>

Then, we could then use this to generate a thread for a particular person:

```
<!-- in a Github issue -->
---
name: "Jane Jacobs"
email: "jane@example.com"
---

Your Message
```

## github-paths

If you'd like to do this on your site, I built [a small npm module](https://github.com/flaque/github-paths), `github-paths`, that generates various github "api" links.

Use it like this:

```js
const github = require("github-paths");

// https://github.com/flaque/blog/issues/new?title=my+title&body=my+body+text
const href = github("flaque/blog").issue("my title", "my body text");
```

### Installation

```
$ yarn add github-paths
```
