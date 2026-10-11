import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://myspace.lebathong.com', 
  integrations: [
    starlight({
      title: 'Tài liệu của Thông',
      components: {
        Header: './src/components/CustomHeader.astro',
      },
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
