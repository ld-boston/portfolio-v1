import RSS from 'rss'
import { bucket } from '@/server/cosmic'
import { BlogType } from '@/services/types/blog'

const BASE_URL = 'https://www.ld-boston.cf'

export default defineEventHandler(async ({ res }) => {
  const feed = new RSS({
    title: 'LD Boston Blog',
    description:
      'Hi. My name is Lokmane, but I go by the name L.D. Boston, I’m an author who writes sci-fi thrillers.',
    site_url: BASE_URL,
    feed_url: `${BASE_URL}/rss.xml`,
  })

  try {
    let posts = (await bucket.getObjects({
      query: {
        type: 'posts',
      },
      props: 'slug,title,created_at,metadata.description',
    })) as {
      objects: BlogType[]
      total: number
    }

    for (const post of posts.objects) {
      feed.item({
        title: post.title,
        url: `${BASE_URL}/${post.slug}`,
        date: post.created_at,
        description: post.metadata.description,
      })
    }
  } catch {}

  res.setHeader('content-type', 'text/xml')
  res.setHeader(
    'cache-control',
    'public, maxage=86400, s-maxage=86400, stale-while-revalidate',
  )
  res.end(feed.xml({ indent: true }))
})
