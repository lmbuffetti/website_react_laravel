export default ({ body, menu, title, meta, url, initialState }) => {
	return `
    <!DOCTYPE html><html>
      <head>
        ${title}
        ${meta}
        <link rel="canonical" href="${url}" />
        <link rel="icon" href="/Img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta property="og:url" content="${url}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="${url}" />
        <meta name="google-site-verification" content="Hd7t3CJL5OvuTqDT5sqCGErBB_-qi1Icisq_OxtFF40" />
        <style>#preload {z-index:9000;position: fixed;left: 0;top:0;width: 100%;height: 100%;background: #605b85;background: -moz-linear-gradient(-45deg, #605b85 0%, #918dab 100%);background: -webkit-linear-gradient(-45deg, #605b85 0%,#918dab 100%);background: linear-gradient(135deg, #605b85 0%,#918dab 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#605b85', endColorstr='#918dab',GradientType=1 );}#preload div {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%);}@-webkit-keyframes scaling {From {-webkit-transform: scale(1.0);}To {-webkit-transform: scale(1.1);}}#preload div img {-webkit-animation: scaling 1s infinite alternate;}</style>
         <noscript id="deferred-styles">
      <link rel="stylesheet" href="/assets/index.css" />
    </noscript>
      </head>
      
      <body>
      <div id="preload">
    <div>
        <img src="/Img/c90602f4039c2c99ca1a7ed66f47af4c.png" alt="Logo Luigi Mattia Buffetti - Web Developer">
    </div>
</div>
      	<header>${menu}</header>
        <div id="menu"></div>
        <div id="contentSite">
        	<div id="root">${body}</div>
		</div>
        <footer>
			<div>
				<p>VAT: IT03253260545 <span>·</span> <a href="mailto:mattia.buffetti@gmail.com"  title="Personal Mail">mattia.buffetti@gmail.com</a> <span>·</span> <a href="skype:mattia.buffetti" title="Personal Skype">mattia.buffetti</a> <span>·</span> <a href="tel:+393286930881" title="Personal Mobile">+39 328.6930881</a></p>
			</div>
		</footer>
      
     
    <script>
      var loadDeferredStyles = function() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement);
        addStylesNode.parentElement.removeChild(addStylesNode);
      };
      var raf = requestAnimationFrame || mozRequestAnimationFrame ||
          webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
      else window.addEventListener('load', loadDeferredStyles);
    </script>
      <script async src="/assets/bundle.js"></script>
      <script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Organization",
  "name": "Luigi Mattia Buffetti",
  "image": "http://www.mattiabuffetti.org/Img/32f110118706a00a1ca5b5e03ec5e6b2.jpg",
  "logo": "http://www.mattiabuffetti.org/Img/32f110118706a00a1ca5b5e03ec5e6b2.jpg",
  "description": "I'm a Web Developer specialized in Web Development",
  "url": "http://www.mattiabuffetti.org/",
  "contactPoint": [{
    "@type": "ContactPoint",
    "name": "Luigi Mattia Buffetti",
    "telephone": "+393286930881",
  	"email": "mattia.buffetti@gmail.com",
  	"url": "http://www.mattiabuffetti.org/",
    "contactType": "customer service"
  }]
}
</script>
</body>
    </html>
  `;
};