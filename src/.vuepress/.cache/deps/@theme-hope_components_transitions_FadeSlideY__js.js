import {
  useScrollPromise
} from "./chunk-R3QG3ZU5.js";
import "./chunk-I5SREYWP.js";
import "./chunk-ANKY43RT.js";
import "./chunk-TYRIGETP.js";
import "./chunk-E7KEG4JQ.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-ZYRIB4P5.js";
import "./chunk-YTQSFUAA.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.103/node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "C:/Users/Jayczee/Desktop/\u4EE3\u7801/JayczeeDocs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.103/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
