import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, h as renderHead, r as renderComponent, i as renderSlot } from './astro/server_DXQgKMil.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const base = "/Lab/";
  return renderTemplate`${maybeRenderHead()}<header class="..."> <!-- ...省略... --> <!-- ロゴ部分のリンク --> <!-- 「/」だけだとドメインルートに戻ってしまうので修正 --> <a${addAttribute(base, "href")} class="...">
〇〇研究室
</a> <!-- PC用ナビゲーション --> <nav class="hidden md:flex space-x-8"> <!-- 2. hrefの書き方を変更 --> <!-- 「base + '/パス'」という書き方にします --> <a${addAttribute(base + "/", "href")} class="...">ホーム</a> <a${addAttribute(base + "/professor", "href")} class="...">教授紹介</a> <a${addAttribute(base + "/members", "href")} class="...">メンバー</a> <a${addAttribute(base + "/research", "href")} class="...">研究紹介</a> </nav> <!-- スマホ用メニューの中身も同様に修正 --> <nav id="mobile-menu" class="..."> <a${addAttribute(base + "/", "href")} class="...">ホーム</a> <a${addAttribute(base + "/professor", "href")} class="...">教授紹介</a> <a${addAttribute(base + "/members", "href")} class="...">メンバー</a> <a${addAttribute(base + "/research", "href")} class="...">研究紹介</a> </nav> </header> <!-- ...スクリプト... -->
\`\`\`

---

### 修正2：トップページなどの動的なリンク

\`index.astro\`、\`research.astro\`、\`members.astro\` などの一覧ページにあるカードのリンクも修正が必要です。

**例：\`src/pages/research.astro\` の場合**

\`\`\`astro
---
// ファイルの上の方で base を定義
const base = import.meta.env.BASE_URL;
// ...
---
<!-- ... --> ${researchProjects.map((project) => renderTemplate`<!-- リンク先を修正 -->
    <!-- 変更前: href={\`/research/\${project.slug}\`} -->
    <!-- 変更後: -->
    <a${addAttribute(`${base}/research/${project.slug}`, "href")} class="..."> <!-- ... --> </a>`)} <!-- ... -->
\`\`\`

※ \`index.astro\` の最新情報や、\`members.astro\` のメンバー詳細リンクも同様に \`$${base}\` を先頭につけてください。

---

### 修正3：「戻るボタン」などの固定リンク

詳細ページ（\`[...slug].astro\`）にある「一覧に戻る」ボタンも忘れずに。

**例：\`src/pages/research/[...slug].astro\`**

\`\`\`astro
---
const base = import.meta.env.BASE_URL;
// ...
---
<!-- 変更前: href="/research" --> <a${addAttribute(base + "/research", "href")} class="...">
← 研究紹介一覧に戻る
</a>`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://haruto0106.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="description" content="山下研究室のWebサイト"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} | 山下研究室</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <!-- ↓↓↓ 変更点1：bodyに 'min-h-screen flex flex-col' を追加 --> <body class="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <!-- ここに中身が入る --> ${renderSlot($$result, $$slots["default"])} <!-- ↓↓↓ 変更点2：footerに 'mt-auto' を追加 --> <footer class="bg-slate-900 text-white text-center py-6 mt-auto"> <p class="text-sm opacity-60">&copy; 2025 Yamashita Laboratory. All Rights Reserved.</p> </footer> </body></html>`;
}, "/Users/tanakaharuto/Documents/02_Program/Web/lab/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
