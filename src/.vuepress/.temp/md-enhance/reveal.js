import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/home/jayczee/Desktop/Code/CodeDocs/JayczeeDocs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.103/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()
];