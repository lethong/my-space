import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Tài liệu của tôi',
      sidebar: [
        {
          label: 'Lập trình',
          autogenerate: { directory: 'lap-trinh' },
        },
        {
          label: 'Thiết kế',
          autogenerate: { directory: 'thiet-ke' },
        },
      ],
    }),
  ],
});