import { mdsvex } from 'mdsvex'

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: mdsvex({
    extensions: ['.svx', '.md'],
  }),
}

export default config
