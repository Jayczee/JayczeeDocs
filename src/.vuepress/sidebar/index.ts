// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            text:'Java',
            icon: "java",
            prefix:"docs/java/",
            children:"structure"
        },
        {
            text:'Vue',
            icon: "vue",
            prefix:"docs/vue/",
            children:"structure"
        },
        {
            text:'设计模式',
            prefix:"docs/design-pattern/",
            icon:"alias",
            children:"structure"
        },
        {
            text:'树莓派Raspberry Pi',
            icon: "router",
            prefix:"docs/raspberry-pi/",
            children:"structure"
        },
    ],
});
