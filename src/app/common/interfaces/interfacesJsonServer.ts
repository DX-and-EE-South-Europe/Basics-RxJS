interface Post {
  id?: number;
  title?: string;
  author?: string;
}

interface Comments {
  id: number;
  body?: string;
  postId?: string;
}

interface AppInfo extends LastModified {
  author: string;
  created: Date;
}

interface LastModified {
  lastModified: Date;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Empty {}

export { Post, Comments, AppInfo, Empty, LastModified };
