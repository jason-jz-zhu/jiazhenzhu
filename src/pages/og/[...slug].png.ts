import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { title: post.data.title, tags: post.data.tags },
  }));
}

export async function GET({ props }: APIContext) {
  const { title, tags } = props as { title: string; tags: string[] };

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          padding: '60px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '24px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '48px',
                      fontWeight: 700,
                      color: '#ededed',
                      lineHeight: 1.2,
                      maxWidth: '900px',
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', gap: '12px' },
                    children: tags.slice(0, 3).map((tag) => ({
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '18px',
                          color: '#14B8A6',
                          backgroundColor: '#171717',
                          padding: '6px 16px',
                          borderRadius: '20px',
                        },
                        children: tag,
                      },
                    })),
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column', gap: '4px' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '28px', fontWeight: 600, color: '#ededed' },
                          children: 'Jiazhen Zhu',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: { fontSize: '18px', color: '#a3a3a3' },
                          children: 'jiazhenzhu.com',
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#0D9488',
                    },
                    children: 'JZ',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch('https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.ttf').then(r => r.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await fetch('https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjQ.ttf').then(r => r.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
