/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CIrsuv4y.mjs';
import { g as getCollection } from '../chunks/_astro_content_Vd7V4NCa.mjs';
export { renderers } from '../renderers.mjs';

const $$Members = createComponent(async ($$result, $$props, $$slots) => {
  const members = await getCollection("members");
  const sortedMembers = members.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u30E1\u30F3\u30D0\u30FC\u7D39\u4ECB" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12"> <div class="text-center mb-16"> <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Members</h1> <p class="text-slate-500">研究室のメンバーを紹介します</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${sortedMembers.map((member) => renderTemplate`<a${addAttribute(`/members/${member.slug}`, "href")} class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">  <div class="relative w-32 h-32 mb-6"> <div class="w-full h-full rounded-full overflow-hidden border-4 border-blue-50 shadow-md group-hover:border-blue-200 transition-colors duration-300"> <img${addAttribute(member.data.image, "src")}${addAttribute(member.data.name, "alt")} class="w-full h-full object-cover"> </div>  <div class="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div> </div>  <h2 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors"> ${member.data.name} </h2> <span class="inline-block bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full mb-4"> ${member.data.role} </span>  <p class="text-slate-500 text-sm line-clamp-2 leading-relaxed"> ${member.body} </p> <div class="mt-4 text-blue-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
もっと詳しく
</div> </a>`)} </div> </main> ` })}`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members.astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members.astro";
const $$url = "/Lab/members";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Members,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
