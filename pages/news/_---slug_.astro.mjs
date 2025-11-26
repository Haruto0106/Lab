/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_Vd7V4NCa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CIrsuv4y.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://haruto0106.github.io");
async function getStaticPaths() {
  const newsEntries = await getCollection("news");
  return newsEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12 max-w-4xl"> <!-- 戻るボタン --> <a href="/" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-bold group"> <span class="mr-2 transform group-hover:-translate-x-1 transition">←</span>
ホームに戻る
</a> <!-- 記事ヘッダー --> <header class="mb-12 border-b border-gray-200 pb-8"> <span class="text-blue-600 font-bold block mb-2"> ${entry.data.date.toLocaleDateString("ja-JP")} </span> <h1 class="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"> ${entry.data.title} </h1> </header> <!-- 記事本文 --> <article class="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed markdown-content"> ${renderComponent($$result2, "Content", Content, {})} </article> </main> ` })} `;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/news/[...slug].astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/news/[...slug].astro";
const $$url = "/Lab/news/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
