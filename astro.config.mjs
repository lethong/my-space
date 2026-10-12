import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://myspace.lebathong.com', 
  integrations: [
    starlight({
      title: 'Tài liệu của Thông',
      components: {
        // Xóa (hoặc comment) dòng Header cũ đi:
        // Header: './src/components/CustomHeader.astro',
        
        // Thêm dòng mới này để ghi đè SiteTitle:
        SiteTitle: './src/components/CustomSiteTitle.astro',
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
