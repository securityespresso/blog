---
title: Chrome and Safari UXSS (translation)
layout: post
date: '2017-11-14 16:30:00 +0000'
categories: translations
image: browsers-it.png
---

Hello! In addition to client side vulnerabilities in webapps, a security risk is introduced by the client side *software* itself. No, we're not talking about Java or Flash, we're talking about the browsers themselves.

I want to show you examples in two competing browsers with an UXSS (Universal Cross-site Scripting), one of them being closed source, and the other open source. UXSS is a flaw in a browser' logic, which allows an attacker to execute arbitrary JavaScript on arbitrary sites, in other words - perform an XSS attack where there're none.

## Safari

What good things can I say about Safari? It's a simple, lightweight browser without any bloat. To be fair, it's the fastest browser that I have used. What's wrong with that? Well... Safari's weird.

Perhaps you've already read my article about [reading local files (in russian)](https://xakep.ru/2017/07/06/safari-localfile-read/) using the browser. Briefly - by opening [the following HTML](https://bo0om.ru/safari_poc/) file in Safari it will read files on the local machine and will try to leak them out, in the PoC - to the same local machine (you'll see the errors in the developer console).

More than this, the functions in the console are executed while writing them - horror!

<style type="text/css">
    .video-container-youtube { border-radius: 3px; overflow: hidden; position: relative; height: 0; padding-bottom: 56.25% }
    .video-container-youtube iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>

<div class="video-container-youtube">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Imt4N7xP12w" frameborder="0" gesture="media" allowfullscreen></iframe>
</div>

But what did you hear about the pseudo-extension `parent-tab://`? Yes, nothing, only a few reminders. However it is present in Safari.

![parent-tab]({{ site.baseurl }}/content/images/parent-tab.jpg)

Noteworthy, until the 11th version (already), parent-tab has still the same access privileges to domain objects, for example to cookies.

![parent-tab-apple]({{ site.baseurl }}/content/images/parent-tab-apple.png)

What's even way cooler than this - you can write them as well. You can just create a local HTML file, write `<iframe>` with parent-tab and using JavaScript you can write arbitrary contents to it! That's how the first exploit is born, where `parent-tab.html` is a redirect to `parent-tab://+domain`.

![first_exploit]({{ site.baseurl }}/content/images/first_exploit.png)

However, you cannot call it from another site, which is a bit saddening. Local exploits are not so fun (well, file reading is a bit more fun).

![bo0om-apple]({{ site.baseurl }}/content/images/bo0om-apple.png)

Here [Frans Rosén](https://twitter.com/fransrosen) comes to the rescue, who figured out that you can also write your payload using `window.open` with the `_top` argument. Whoosh - and we get access to site data.

![safari_uxss]({{ site.baseurl }}/content/images/safari_uxss.png)

It turned out that this is a WebKit bug, hence it's probably applicable to Chrome as well. A proof of concept for [CVE-2017-7089](https://support.apple.com/ru-ru/HT208112) is waiting for you on [GitHub](https://github.com/Bo0oM/CVE-2017-7089).

## Chrome

Chrome is a more secure browser. Probably. It's an open source browser afterwards. Besides that, ignoring the modernity - it still supports old things, for example the support for the ancient [MHTML (MIME-HTML)](https://en.wikipedia.org/wiki/MHTML) format.

What does this format represents? It's a text document with written down header, content type (`Content-Type: multipart/related`) and a content separator (boundary). Yes yes, multipart in a file. Further there are additional parameters, encoding type (it may be base64).

It's simpler [to see for yourself](https://www.google.com/search?q=mhtml%20example).

So yeah, you can write down in this file the `Content-location` attribute and then refer to it in the HTML itself.

For example, we can write under `Content-location: /abc` the contents of the file and refer to it using `<img src=/abc>`. We also can write `Content-location: https://example.com/abc` and load it using `<img https://example.com/abc>`.

If that's an image - it will be displayed on the page when attempting to open this file.

All would be fine, but JavaScript is forbidden in it. At all.

But there's a "but": everywhere except in [XSLT](https://en.wikipedia.org/wiki/XSLT).

We set the `Content-Type: application/xml`, insert the XSLT, and we get `alert()`:

```
MIME-Version: 1.0
Content-Type: multipart/related;
type="text/html";
boundary="----MultipartBoundary--"
------MultipartBoundary--
Content-Type: application/xml;
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xml" href="#stylesheet"?>
<!DOCTYPE catalog [
<!ATTLIST xsl:stylesheet
id ID #REQUIRED>
]>
<xsl:stylesheet id="stylesheet" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="*">
<html><script>alert()</script></html>
</xsl:template>
</xsl:stylesheet>
------MultipartBoundary----
```

As you already figured out, in such a document we can write `Content-location: https://example.com` and call JavaScript from there, bypassing the sandbox despite all [SOP](https://en.wikipedia.org/wiki/Same-origin_policy) laws. We're adding to the previous file the following, and we're calling the alert in a frame:

```
------MultipartBoundary--
Content-Type: text/html
Content-Location: https://google.com
<script>alert('Location origin: '+location.origin)</script>
```

In order to open `MHTML`, we have to set the content type in the server's response to `multipart/related`, and we get the following DOM-tree:

![DOM=tree]({{ site.baseurl }}/content/images/html.jpg)

Chrome applied the coresponding patch (thanks to which the exploit was found). Pros - open source software allows one to monitor the changes. Cons: the same.

A proof of concept is available here (Chrome < 62), the source code for [CVE-2017-5124 on GitHub](https://github.com/Bo0oM/CVE-2017-5124).

## Conclusion

What conclusion? Well, be more careful, update your software to minimize the risks, but you've already heard this thousands of times. There's nothing new I can tell you :).

**Editor's note: This is a translation of the following article [bo0om.ru/chrome-and-safari-uxss](https://bo0om.ru/chrome-and-safari-uxss).**
