/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DXQgKMil.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_Vd7V4NCa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CIrsuv4y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://haruto0106.github.io");
async function getStaticPaths() {
  const members = await getCollection("members");
  return members.map((member) => ({
    params: { slug: member.slug },
    props: { member }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { member } = Astro2.props;
  const { Content } = await member.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${member.data.name} | \u30E1\u30F3\u30D0\u30FC\u7D39\u4ECB` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-12 max-w-4xl"> <!-- 戻るボタン --> <a href="/members" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-bold group"> <span class="mr-2 transform group-hover:-translate-x-1 transition">←</span>
メンバー一覧に戻る
</a> <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"> <div class="md:flex"> <!-- 左側：写真と基本情報 --> <div class="md:w-1/3 bg-slate-50 p-8 flex flex-col items-center text-center border-r border-slate-100"> <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6"> <img${addAttribute(member.data.image, "src")}${addAttribute(member.data.name, "alt")} class="w-full h-full object-cover"> </div> <h1 class="text-2xl font-bold text-slate-800 mb-2">${member.data.name}</h1> <div class="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full mb-4"> ${member.data.role} </div> </div> <!-- 右側：Markdownの本文（自己紹介など） --> <div class="md:w-2/3 p-8 md:p-12"> <article class="prose prose-slate max-w-none prose-headings:text-slate-700 prose-a:text-blue-600"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> </main> ` })}`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members/[...slug].astro", void 0);

const $$file = "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/pages/members/[...slug].astro";
const $$url = "/Lab/members/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
