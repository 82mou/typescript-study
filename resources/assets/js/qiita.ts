export interface Qiita {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: null;
}