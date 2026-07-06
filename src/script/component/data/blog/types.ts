export interface BlogPost {
  id: number;
  title: string;
  /** Format: YYYY/MM/DD */
  date: string;
  content: string;
  readTime?: number;
}
