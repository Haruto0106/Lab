/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_Vd7V4NCa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CIrsuv4y.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://haruto0106.github.io");
async function getStaticPaths() {
  const researchEntries = await getCollection("research");
  return researchEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12"> <!-- 戻るボタン --> <a href="/research" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-bold group"> <span class="mr-2 transform group-hover:-translate-x-1 transition">←</span>
研究紹介一覧に戻る
</a> <!-- 記事ヘッダー --> <div class="mb-12 border-b border-gray-200 pb-8"> <div class="flex flex-wrap gap-2 mb-4"> ${entry.data.tags.map((tag) => renderTemplate`<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"> ${tag} </span>`)} </div> <h1 class="text-4xl font-bold text-slate-900 mb-4 leading-tight">${entry.data.title}</h1> </div> <!-- 記事本文 --> <article class="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed markdown-content mb-16"> ${renderComponent($$result2, "Content", Content, {})} </article> <!-- ↓↓↓ 追加: ギャラリーセクション ↓↓↓ --> ${entry.data.gallery && entry.data.gallery.length > 0 && renderTemplate`<section class="border-t border-gray-200 pt-12"> <h2 class="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-blue-500 pl-4">
関連画像
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${entry.data.gallery.map((imagePath) => renderTemplate`<div class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"> <img${addAttribute(imagePath, "src")} alt="研究イメージ" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"> </div>`)} </div> </section>`} </main> ` })} `;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research/[...slug].astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/research/[...slug].astro";
const $$url = "/Lab/research/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
