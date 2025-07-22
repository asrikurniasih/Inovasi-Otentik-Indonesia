import { c as createComponent, a as createAstro, r as renderTemplate, b as renderSlot, d as renderHead, e as renderScript, f as addAttribute } from './astro/server_CfXpVUH_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, metaDescription } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="favicon.svg"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet"><title>', ' by Creative Tim</title><meta name="description"', '><meta name="generator"', '><link rel="canonical" href="https://www.creative-tim.com/astro/"><!-- Google Tag Manager -->', "<!-- End Google Tag Manager -->", '</head> <body class="overflow-x-hidden"> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden">\n      </iframe> </noscript> <!-- End Google Tag Manager (noscript) --> ', ' <script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"><\/script> </body> </html>'])), title, addAttribute(metaDescription, "content"), addAttribute(Astro2.generator, "content"), renderScript($$result, "/Users/asri/work/astro-launch-ui/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/asri/work/astro-launch-ui/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
