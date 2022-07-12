import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    // port: 8080, //启动端口
    // hmr: {
        host: '0.0.0.0',
    //     port: 8080
    // },
    // 设置 https 代理
    proxy: {
      '/api': { // 每个请求带上api字段，然后置空
          target: 'https://netease-cloud-music-api-bay-six-41.vercel.app',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
