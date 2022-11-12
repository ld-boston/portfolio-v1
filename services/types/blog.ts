export interface BlogType {
  id: string
  slug: string
  title: string
  content: string
  bucket: string
  created_at: Date
  created_by: string
  modified_at: Date
  created: Date
  status: string
  thumbnail: string
  published_at: Date
  modified_by: string
  publish_at?: any
  unpublish_at?: any
  type: string
  metadata: {
    description: string
    image: {
      url: string
      imgix_url: string
    }
    author: {
      id: string
      slug: string
      title: string
      content: string
      metafields: any[]
      bucket: string
      created: Date
      created_at: Date
      modified_at: Date
      status: string
      locale?: any
      published_at: Date
      type: string
    }
  }
}
