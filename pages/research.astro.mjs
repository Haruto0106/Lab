/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CIrsuv4y.mjs';
import { g as getCollection } from '../chunks/_astro_content_Vd7V4NCa.mjs';
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(async ($$result, $$props, $$slots) => {
  const researchProjects = await getCollection("research");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u7814\u7A76\u7D39\u4ECB" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12"> <div class="text-center mb-16"> <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Research</h1> <p class="text-slate-500">当研究室の主要な研究テーマについて紹介します</p> </div> <!-- 
      ↓↓↓ ここを修正しました ↓↓↓
      grid-cols-1     : スマホなどは1列
      md:grid-cols-2  : タブレットや狭いPCウィンドウでは2列 (←NEW!)
      lg:grid-cols-3  : 大きな画面では3列
    --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${researchProjects.map((project) => renderTemplate`<a${addAttribute(`/research/${project.slug}`, "href")} class="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group">  <div class="h-56 md:h-48 overflow-hidden relative bg-slate-100"> ${project.data.thumbnail ? renderTemplate`<img${addAttribute(project.data.thumbnail, "src")}${addAttribute(project.data.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : (
    // 画像がない場合のフォールバック
    renderTemplate`<div${addAttribute(`w-full h-full flex items-center justify-center ${project.data.color || "bg-blue-500"}`, "class")}> <span class="text-white opacity-25 font-bold text-xl tracking-widest">NO IMAGE</span> </div>`
  )}  <div${addAttribute(`absolute bottom-0 left-0 w-full h-1 ${project.data.color || "bg-blue-500"}`, "class")}></div> </div> <div class="p-6 flex-1 flex flex-col"> <h2 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors"> ${project.data.title} </h2> <p class="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">  ${project.body} </p> <div class="mt-auto flex flex-wrap gap-2"> ${project.data.tags.map((tag) => renderTemplate`<span class="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded"> ${tag} </span>`)} </div> </div> </a>`)} </div> </main> ` })}`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research.astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research.astro";
const $$url = "/Lab/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
