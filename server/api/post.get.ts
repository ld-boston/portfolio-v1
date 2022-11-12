import { bucket } from '@/server/cosmic'
import { BlogType } from '@/services/types/blog'

export default defineEventHandler(async event => {
  const query = getQuery(event)

  let posts = await bucket.getObjects({
    query: { slug: query.slug },
    props: 'slug,title,content,metadata',
  })

  return posts.objects[0] as BlogType
})
