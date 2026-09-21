import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Tài liệu của Thông',
      social: {
        github: 'https://github.com/lethong',
      },
      sidebar: [
        {
          label: 'C# Nâng cao',
          autogenerate: { directory: 'csharp-nang-cao' },
        },
        {
          label: 'Cơ sở dữ liệu SQL Server',
          autogenerate: { directory: 'sql-server' },
        },
      ],
    }),
  ],
});