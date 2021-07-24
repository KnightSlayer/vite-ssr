import reactRefresh from "@vitejs/plugin-react-refresh";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  resolve: {
    alias: {
      // We can now `import '~/path/to/module'` where `~` references the project root
      "~": `${__dirname}/pages`,
    }
  },
  plugins: [reactRefresh(), ssr()],
};

export default config;
