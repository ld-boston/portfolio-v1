import { bucket } from '@/server/cosmic'
import { BlogType } from '~~/services/types/blog'

export default defineEventHandler(async event => {
  let posts = await bucket.getObjects({
    query: {
      type: 'posts',
    },
    props: 'slug,title,metadata',
  })

  return posts as PostsRes
})

interface PostsRes {
  objects: BlogType[]
  total: number
}
