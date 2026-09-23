import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://lethong.github.io', 
  base: '/my-space', 
  integrations: [
    starlight({
      title: 'Tài liệu của Thông',
      sidebar: [
        {
          label: 'C# Nâng cao',
          items: [{ autogenerate: { directory: 'csharp-nang-cao' } }]
        },
        {
          label: 'Cơ sở dữ liệu SQL Server',
          items: [{ autogenerate: { directory: 'sql-server' } }]
        }
      ],
    }),
  ],
});
