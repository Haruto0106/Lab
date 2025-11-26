import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_DXQgKMil.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/","cacheDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/node_modules/.astro/","outDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/","srcDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/src/","publicDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/public/","buildClientDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/client/","buildServerDir":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/server/","adapterName":"","routes":[{"file":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/members/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/members","isIndex":false,"type":"page","pattern":"^\\/members\\/?$","segments":[[{"content":"members","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/members.astro","pathname":"/members","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/professor/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/professor","isIndex":false,"type":"page","pattern":"^\\/professor\\/?$","segments":[[{"content":"professor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/professor.astro","pathname":"/professor","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/research/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/research","isIndex":false,"type":"page","pattern":"^\\/research\\/?$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research.astro","pathname":"/research","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://haruto0106.github.io","base":"/Lab/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/members@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/members/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/news/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/news/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/research@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/research/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/professor.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/members@_@astro":"pages/members.astro.mjs","\u0000@astro-page:src/pages/members/[...slug]@_@astro":"pages/members/_---slug_.astro.mjs","\u0000@astro-page:src/pages/news/[...slug]@_@astro":"pages/news/_---slug_.astro.mjs","\u0000@astro-page:src/pages/professor@_@astro":"pages/professor.astro.mjs","\u0000@astro-page:src/pages/research@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/research/[...slug]@_@astro":"pages/research/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_UoNb7UQV.mjs","/Users/tanakaharuto/Documents/02_Program/Web/lab/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/tanakaharuto/Documents/02_Program/Web/lab/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DzMwvET3.mjs","/Users/tanakaharuto/Documents/02_Program/Web/lab/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Du3UGNte.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/Lab/file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/members/index.html","/Lab/file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/professor/index.html","/Lab/file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/research/index.html","/Lab/file:///Users/tanakaharuto/Documents/02_Program/Web/lab/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"QZhzD5vEbNZByuSUuxkEns+dpKxyB+WbUZMxExGVNw8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
