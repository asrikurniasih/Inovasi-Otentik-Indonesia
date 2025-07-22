/* empty css                                 */
import { c as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfXpVUH_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CejJP6nA.mjs';
export { renderers } from '../renderers.mjs';

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderLanding", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/header", "client:component-export": "default" })} ${renderComponent($$result2, "CategoriesSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/categories", "client:component-export": "default" })} ${renderComponent($$result2, "ContentSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/content", "client:component-export": "default" })} ${renderComponent($$result2, "BasicSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/starterPack", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "FooterSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/landing/footer", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/asri/work/astro-launch-ui/src/pages/landing.astro", void 0);

const $$file = "/Users/asri/work/astro-launch-ui/src/pages/landing.astro";
const $$url = "/landing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Landing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
