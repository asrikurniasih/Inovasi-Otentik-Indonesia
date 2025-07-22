import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_CfXpVUH_.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CS4VlXD8.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/asri/work/astro-launch-ui/","cacheDir":"file:///Users/asri/work/astro-launch-ui/node_modules/.astro/","outDir":"file:///Users/asri/work/astro-launch-ui/dist/","srcDir":"file:///Users/asri/work/astro-launch-ui/src/","publicDir":"file:///Users/asri/work/astro-launch-ui/public/","buildClientDir":"file:///Users/asri/work/astro-launch-ui/dist/client/","buildServerDir":"file:///Users/asri/work/astro-launch-ui/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/landing","isIndex":false,"type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing.astro","pathname":"/landing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C3dHghMD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/asri/work/astro-launch-ui/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/asri/work/astro-launch-ui/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/asri/work/astro-launch-ui/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/asri/work/astro-launch-ui/src/pages/landing.astro",{"propagation":"none","containsHead":true}],["/Users/asri/work/astro-launch-ui/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/Users/asri/work/astro-launch-ui/src/pages/signup.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/landing@_@astro":"pages/landing.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/asri/work/astro-launch-ui/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B7vcSoRo.mjs","\u0000@astrojs-manifest":"manifest_06POPDRh.mjs","/Users/asri/work/astro-launch-ui/src/components/about/header":"_astro/header.DeXVYoTH.js","/Users/asri/work/astro-launch-ui/src/components/about/features":"_astro/features.CxtKgvFn.js","/Users/asri/work/astro-launch-ui/src/components/about/testimonials":"_astro/testimonials.DlH8xL-F.js","/Users/asri/work/astro-launch-ui/src/components/about/team":"_astro/team.BlTgzxP-.js","/Users/asri/work/astro-launch-ui/src/components/about/footer":"_astro/footer.BN_N0bnt.js","/Users/asri/work/astro-launch-ui/src/components/signin":"_astro/signin.DYU6cFvK.js","/Users/asri/work/astro-launch-ui/src/components/signup":"_astro/signup.DPuEc8GE.js","/Users/asri/work/astro-launch-ui/src/components/presentation/header":"_astro/header.CNFWMF7q.js","/Users/asri/work/astro-launch-ui/src/components/presentation/feature":"_astro/feature.DD7CmT6H.js","/Users/asri/work/astro-launch-ui/src/components/presentation/logos":"_astro/logos.Cyi7xq39.js","/Users/asri/work/astro-launch-ui/src/components/presentation/developerFree":"_astro/developerFree.DabbA0pk.js","/Users/asri/work/astro-launch-ui/src/components/presentation/palette":"_astro/palette.2U_a5ikk.js","/Users/asri/work/astro-launch-ui/src/components/presentation/code":"_astro/code.gnocKDvk.js","/Users/asri/work/astro-launch-ui/src/components/presentation/freeToPro":"_astro/freeToPro.Cig5pLct.js","/Users/asri/work/astro-launch-ui/src/components/presentation/astro":"_astro/astro.B0lAYAnA.js","/Users/asri/work/astro-launch-ui/src/components/presentation/pagesFree":"_astro/pagesFree.CXQ1vLVk.js","/Users/asri/work/astro-launch-ui/src/components/presentation/pricing":"_astro/pricing.DmXT0dVT.js","/Users/asri/work/astro-launch-ui/src/components/presentation/github":"_astro/github.42cEogg6.js","/Users/asri/work/astro-launch-ui/src/components/presentation/footerFree":"_astro/footerFree.Cwi7jJv6.js","/Users/asri/work/astro-launch-ui/src/components/404/content":"_astro/content.CsLuDHhk.js","/Users/asri/work/astro-launch-ui/src/components/landing/header":"_astro/header.CGnWs-lK.js","/Users/asri/work/astro-launch-ui/src/components/landing/categories":"_astro/categories.D8o5mRRV.js","/Users/asri/work/astro-launch-ui/src/components/landing/content":"_astro/content.Dcs0xDEX.js","/Users/asri/work/astro-launch-ui/src/components/landing/starterPack":"_astro/starterPack.CrpgS33Z.js","/Users/asri/work/astro-launch-ui/src/components/landing/testimonials":"_astro/testimonials.C0-KW10j.js","/Users/asri/work/astro-launch-ui/src/components/landing/footer":"_astro/footer.BXA2gp7k.js","@astrojs/react/client.js":"_astro/client.CsdpeV_2.js","/Users/asri/work/astro-launch-ui/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.D--9prYL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/asri/work/astro-launch-ui/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","(function(e,n,r,t,m){e[t]=e[t]||[],e[t].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-NKDMSK6\");"]],"assets":["/_astro/about.C3dHghMD.css","/404.jpg","/aboutus.jpg","/astro.png","/bg-billing.jpg","/billing-page.jpg","/blocks.png","/blog1.jpg","/blog2.jpg","/blog3.jpg","/blog4.jpg","/blog5.jpg","/blog6.jpg","/checkout.jpg","/code.png","/components.png","/consistenly.png","/content1.jpg","/dashboard-page.jpg","/data.json","/down-arrow-dark.svg","/down-arrow.svg","/error-500.png","/favicon.png","/favicon.svg","/features1.jpg","/features2.jpg","/features3.jpg","/features4.jpg","/github.png","/header-blue-purple.jpg","/header.png","/icon1.png","/icon2.png","/icon3.png","/image-devs.png","/landing-page.jpg","/logo-ct-dark.png","/palette.png","/signin.jpg","/store-bg.jpg","/stores-bg.jpg","/volant-unsplash.jpg","/_astro/Square3Stack3DIcon.d2g3PJ_M.js","/_astro/astro.B0lAYAnA.js","/_astro/categories.D8o5mRRV.js","/_astro/client.CsdpeV_2.js","/_astro/code.gnocKDvk.js","/_astro/content.CsLuDHhk.js","/_astro/content.Dcs0xDEX.js","/_astro/defaultNavbar.BzpT5nId.js","/_astro/developerFree.DabbA0pk.js","/_astro/feature.DD7CmT6H.js","/_astro/features.CxtKgvFn.js","/_astro/footer.BN_N0bnt.js","/_astro/footer.BXA2gp7k.js","/_astro/footerFree.Cwi7jJv6.js","/_astro/freeToPro.Cig5pLct.js","/_astro/github.42cEogg6.js","/_astro/header.CGnWs-lK.js","/_astro/header.CNFWMF7q.js","/_astro/header.DeXVYoTH.js","/_astro/index.CcuSDZ7o.js","/_astro/index.x5KWUyJd.js","/_astro/logos.Cyi7xq39.js","/_astro/navbar.fyGMZS-x.js","/_astro/pagesFree.CXQ1vLVk.js","/_astro/palette.2U_a5ikk.js","/_astro/pricing.DmXT0dVT.js","/_astro/signin.DYU6cFvK.js","/_astro/signup.DPuEc8GE.js","/_astro/starterPack.CrpgS33Z.js","/_astro/team.BlTgzxP-.js","/_astro/testimonials.C0-KW10j.js","/_astro/testimonials.DlH8xL-F.js","/_astro/theme-provider.Ckvk7gnn.js","/avatars/avatar1.jpg","/avatars/avatar2.jpg","/avatars/avatar3.jpg","/avatars/avatar4.jpg","/avatars/avatar5.jpg","/avatars/avatar6.jpg","/logos/logo-amazon-old.svg","/logos/logo-amazons.svg","/logos/logo-android.svg","/logos/logo-apple.png","/logos/logo-cisco.svg","/logos/logo-coinbase.svg","/logos/logo-facebook.png","/logos/logo-google-play.svg","/logos/logo-google.png","/logos/logo-google.svg","/logos/logo-ibm.svg","/logos/logo-ios.svg","/logos/logo-microsoft.svg","/logos/logo-netflix.svg","/logos/logo-pinterest.svg","/logos/logo-salesforce.svg","/logos/logo-spotify.svg","/logos/logo-united-nations.svg","/logos/logo-vodafone.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"0HrCz2N/tXRg9/2e4CT27jteDMZKIigdP4EG+hyQry8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
