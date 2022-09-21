// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            icon: "discover",
            text: "案例",
            prefix: "contents/",
            link: "contents/",
            children: "structure",
        },
        {
            text: "文档",
            icon: "note",
            prefix: "guide/",
            children: "structure",
        },
        {
            text:'Java',
            prefix:"docs/java/",
            children:"structure"
        },
        {
            text:'Vue',
            prefix:"docs/vue/",
            children:"structure"
        },
        {
            text:'设计模式',
            prefix:"docs/design-pattern/",
            children:"structure"
        },
    ],
});
