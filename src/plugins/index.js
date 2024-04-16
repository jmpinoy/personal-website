import router from '../router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Wind from '@/presets/wind';

// PrimeVue Components
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// PrimeVue Assets
import 'primeicons/primeicons.css';

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

      // PrimeVuew Components
      .component('Button', Button)
      .component('Toast', Toast)
  }
