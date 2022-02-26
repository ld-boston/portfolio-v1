import Cosmic from 'cosmicjs';
import settings from '@/services/settings';

const api = Cosmic();
const bucket = api.bucket({
  slug: settings.cosmic_slug,
  read_key: settings.cosmic_key,
});

export async function getPosts() {
  let posts;
  try {
    posts = await bucket.getObjects({
      query: {
        type: 'posts',
      },
      props: 'slug,title,content,metadata',
    });
  } catch (error) {
    console.log(error);

    return {
      success: false,
      posts: [],
    };
  }

  return {
    success: true,
    posts: posts,
  };
}

export async function getPost(slug: string) {
  let post;
  try {
    post = await bucket.getObjects({
      query: { slug },
      props: 'slug,title,content,metadata',
    });
  } catch (error) {
    console.log(error);

    return {
      success: false,
      post: null,
    };
  }

  return {
    success: true,
    post: post.objects[0],
  };
}
