import router from '../router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Wind from '@/presets/wind';

// PrimeVue Assets
import 'primeicons/primeicons.css';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export function registerPlugins (app) {
    const pinia = createPinia()
    app
      .use(router)
      .use(pinia)
      .use(PrimeVue, {
        unstyled: true,
        pt: Wind
      })
      .use(ToastService)
      .component('Toast', Toast)
  }
