/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CIrsuv4y.mjs';
export { renderers } from '../renderers.mjs';

const $$Professor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6559\u6388\u7D39\u4ECB" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12"> <div class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"> <div class="md:flex"> <div class="md:w-1/3 bg-slate-100 flex items-center justify-center p-8"> <div class="w-48 h-48 rounded-full bg-slate-300 overflow-hidden border-4 border-white shadow-lg"> <img src="/images/prof.jpg" alt="教授写真" class="w-full h-full object-cover"> </div> </div> <div class="md:w-2/3 p-8"> <div class="mb-6"> <h1 class="text-3xl font-bold text-slate-800 mb-2">山下 礼 <span class="text-lg font-normal text-slate-500 ml-2">教授</span></h1> <p class="text-blue-600 font-medium">専門分野：ソニックブーム、数値シミュレーション</p> </div> <div class="mb-8"> <h2 class="text-lg font-bold text-slate-800 border-b pb-2 mb-4">メッセージ</h2> <p class="text-slate-600 leading-relaxed">
山下先生からの言葉が入ります
</p> </div> <div> <h2 class="text-lg font-bold text-slate-800 border-b pb-2 mb-4">経歴</h2> <ul class="space-y-2 text-sm text-slate-600"> <li class="flex"><span class="font-bold w-20">20xx年</span> 〇〇大学 工学研究科 博士課程修了</li> <li class="flex"><span class="font-bold w-20">20xx年</span> 〇〇大学 助教</li> <li class="flex"><span class="font-bold w-20">20xx年</span> 〇〇大学 准教授</li> </ul> </div> </div> </div> </div> </main> ` })}`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/professor.astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/professor.astro";
const $$url = "/Lab/professor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Professor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
