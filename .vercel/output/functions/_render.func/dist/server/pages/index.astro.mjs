/* empty css                                 */
import { c as createComponent, a as createAstro, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfXpVUH_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CejJP6nA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inovasi Otentik Indonesia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/header", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/feature", "client:component-export": "default" })} ${renderComponent($$result2, "LogosPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/logos", "client:component-export": "default" })} ${renderComponent($$result2, "DevFreePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/developerFree", "client:component-export": "default" })} ${renderComponent($$result2, "PalettePresentationFree", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/palette", "client:component-export": "default" })} ${renderComponent($$result2, "CodePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/code", "client:component-export": "default" })} ${renderComponent($$result2, "FreeToProPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/freeToPro", "client:component-export": "default" })} ${renderComponent($$result2, "AstroPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/astro", "client:component-export": "default" })} ${renderComponent($$result2, "PagesFreePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/pagesFree", "client:component-export": "default" })} ${renderComponent($$result2, "PricingPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/pricing", "client:component-export": "default" })} ${renderComponent($$result2, "GithubPresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/github", "client:component-export": "default" })} ${renderComponent($$result2, "FooterFreePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/presentation/footerFree", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/asri/work/astro-launch-ui/src/pages/index.astro", void 0);

const $$file = "/Users/asri/work/astro-launch-ui/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
