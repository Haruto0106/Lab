/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CIrsuv4y.mjs';
import { g as getCollection } from '../chunks/_astro_content_Vd7V4NCa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allNews = await getCollection("news");
  const sortedNews = allNews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u30DB\u30FC\u30E0" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24"> <div class="container mx-auto px-6 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
未知なる流れを、<br>解き明かす。
</h1> <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
当研究室では、流体力学・宇宙空気力学・数値解析を駆使し、
        次世代の航空宇宙開発に貢献する先端研究を行っています。
</p> <div class="mt-8"> <a href="/research" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-full transition shadow-lg">
研究内容を見る
</a> </div> </div> </section>  <section class="container mx-auto px-6 py-16"> <h2 class="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">最新情報</h2> <div class="bg-white rounded-lg shadow overflow-hidden"> <ul class="divide-y divide-gray-100"> ${sortedNews.map((news) => renderTemplate`<li>  <a${addAttribute(`/news/${news.slug}`, "href")} class="block p-6 hover:bg-blue-50 transition duration-200 group"> <div class="flex flex-col md:flex-row md:items-baseline mb-2"> <span class="text-sm text-blue-600 font-bold w-32 shrink-0 group-hover:text-blue-700"> ${news.data.date.toLocaleDateString("ja-JP")} </span> <span class="text-slate-800 font-bold text-lg group-hover:text-blue-800 transition-colors"> ${news.data.title} </span> </div> <p class="text-slate-600 text-sm pl-0 md:pl-32 leading-relaxed line-clamp-2">  ${news.body} </p> <div class="md:pl-32 mt-2 text-blue-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
続きを読む →
</div> </a> </li>`)} </ul> </div> </section> ` })}`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/index.astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/index.astro";
const $$url = "/Lab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
