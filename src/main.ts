import { createApp } from "vue";
import "vant/lib/index.css"; // 引入vant样式
import "./assets/css/style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { Button, NavBar, Tabbar, TabbarItem, Checkbox, Toast, Icon } from "vant";
import "@/utils/rem.ts";
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Checkbox);
app.use(Icon);
app.use(Toast);
app.config.globalProperties.$toast = Toast;
app.mount("#app");
