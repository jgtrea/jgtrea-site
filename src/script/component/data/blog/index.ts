import { blog1 } from './blog-1';
import { blog2 } from './blog-2';
import { blog3 } from './blog-3';
import { blog4 } from './blog-4';
import type { BlogPost } from './types';

export type { BlogPost } from './types';

export const readMinutes = (post: BlogPost) =>
  post.readTime ?? Math.max(1, Math.round(post.content.split(/\s+/).length / 200));

export const BlogData = [
  blog1,
  blog2,
  blog3,
  blog4,
];
