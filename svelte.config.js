import { optimizeImports } from "carbon-preprocess-svelte";
import sveltePreprocess from "svelte-preprocess";
export default {
  preprocess: [
    optimizeImports(),
    sveltePreprocess({
      postcss: true,
    }),
  ],
  kit: {},
};
