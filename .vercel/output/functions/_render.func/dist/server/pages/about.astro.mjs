/* empty css                                 */
import { c as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfXpVUH_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CejJP6nA.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/about/header", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturesAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/about/features", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/about/testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "TeamAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/about/team", "client:component-export": "default" })} ${renderComponent($$result2, "FooterAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/about/footer", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/asri/work/astro-launch-ui/src/pages/about.astro", void 0);

const $$file = "/Users/asri/work/astro-launch-ui/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
