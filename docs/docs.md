<img src="/screenshot.jpg" style="width:100%">

Remote debugging tool like [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html), replacing web inspector with the latest [chrome devtools frontend](https://github.com/ChromeDevTools/devtools-frontend).

## Demo

![Demo](/qrcode.png)

Browse it on your phone: [https://chii.liriliri.io/playground/test/demo.html](https://chii.liriliri.io/playground/test/demo.html)

Open [https://chii.liriliri.io/playground/](https://chii.liriliri.io/playground/) and click inspect to start debugging the demo page.

In order to try it for different sites, execute the script below on browser address bar.

```javascript
javascript:(function () { var script = document.createElement('script'); script.src="//chii.liriliri.io/playground/target.js"; document.body.appendChild(script); })();
```

## Install

You can get it on npm.

```bash
npm install chii -g
```

## Usage

Start the server with the following command.

```bash
chii start -p 8080
```

Use this script to inject the target code into your webpage.

```html
<script src="//host-machine-ip:8080/target.js"></script>
```

Then browse to localhost:8080 to start debugging your page.

It's also possible to embed devtools in the same page using iframe. All you have to do is setting an extra embedded attribute on the script element.

```html
<script src="//host-machine-ip:8080/target.js" embedded="true"></script>
```

Visit [Embedded Iframe](https://chii.liriliri.io/playground/test/demo.html?embedded=true) or [Separate Iframe](https://chii.liriliri.io/playground/test/iframe.html) to see how it works.

## Related Projects

* [whistle.chii](https://github.com/liriliri/whistle.chii): Whistle Chii plugin.
* [chobitsu](https://github.com/liriliri/chobitsu): Chrome devtools protocol JavaScript implementation.
* [vivy](https://github.com/liriliri/vivy-docs): Icon image generation.
