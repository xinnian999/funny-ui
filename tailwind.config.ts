import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  daisyui: {
    prefix: 'funny-'
  }
}
