import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const paths = posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));

  paths.push({
    params: { slug: 'default' },
    props: { post: null },
  });

  return paths;
}

export const GET: APIRoute = async ({ params, props }) => {
  const { slug } = params;
  const { post } = props;

  const robotoData = fs.readFileSync(path.resolve('public/fonts/Roboto-Regular.ttf'));

  let title = 'Pavis';
  let description = 'A Dumb Proxy for Boring Reloads';
  let footer = 'fabian4.site';
  let date = '';

  if (slug !== 'default' && post) {
    title = post.data.title;
    description = post.data.description;
    date = post.data.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else {
      // Use site constants if available, or the prompt defaults
      // The prompt explicitly asked for: "Pavis", "A Dumb Proxy for Boring Reloads", "fabian4.site"
      // So we keep the defaults set above.
  }

  const svg = await satori(
    {
      type: 'div',
      props: {
        children: [
          {
            type: 'div',
            props: {
              children: [
                {
                  type: 'div',
                  props: {
                    children: title,
                    style: {
                      fontSize: '64px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '20px',
                      lineHeight: '1.1',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    children: description,
                    style: {
                      fontSize: '32px',
                      color: '#4a5568',
                      lineHeight: '1.4',
                    },
                  },
                },
              ],
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
              },
            },
          },
          {
            type: 'div',
            props: {
              children: [
                date && {
                  type: 'div',
                  props: {
                    children: date,
                    style: {
                      fontSize: '24px',
                      color: '#718096',
                      marginRight: 'auto',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    children: footer,
                    style: {
                      fontSize: '24px',
                      color: '#718096',
                    },
                  },
                },
              ],
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginTop: 'auto',
                paddingTop: '40px',
                borderTop: '2px solid #e2e8f0',
              },
            },
          },
        ],
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#f7fafc',
          padding: '80px',
          fontFamily: 'Roboto',
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Roboto',
          data: robotoData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
};
