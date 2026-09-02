import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://globalcertsit.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Adjust as needed if you add private routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
