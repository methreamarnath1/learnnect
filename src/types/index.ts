export interface Course {
  id: string;
  title: string;
  instructor: {
    name: string;
    avatar: string;
  };
  views: number;
  timeAgo: string;
  thumbnail: string;
  videoUrl: string;
}

// ... rest of the types remain the same