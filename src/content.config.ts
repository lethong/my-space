import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({ 
        loader: docsLoader(), 
        schema: docsSchema({
            // Mở rộng schema mặc định của Starlight
            extend: z.object({
                // Khai báo trường thumbnail là một chuỗi (string) và không bắt buộc (optional)
                thumbnail: z.string().optional(),
            }) 
        }) // Đóng docsSchema
    }) // Đóng defineCollection (Đoạn code của bạn bị thiếu dòng này)
};