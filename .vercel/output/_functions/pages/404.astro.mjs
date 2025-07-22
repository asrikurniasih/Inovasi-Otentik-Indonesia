/* empty css                                 */
import { c as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfXpVUH_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CejJP6nA.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Error Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Content404", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/asri/work/astro-launch-ui/src/components/404/content", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/asri/work/astro-launch-ui/src/pages/404.astro", void 0);

const $$file = "/Users/asri/work/astro-launch-ui/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
