interface QuickLesson {
  id: string;
  title: string;
  description: string;
  duration: number;
}

export const quickLessons: QuickLesson[] = [
  {
    id: '1',
    title: 'Git Basics in 15 Minutes',
    description: 'Learn the essential Git commands and workflows quickly.',
    duration: 15
  },
  {
    id: '2',
    title: 'CSS Flexbox Crash Course',
    description: 'Master CSS Flexbox layout in this quick lesson.',
    duration: 20
  },
  {
    id: '3',
    title: 'JavaScript Array Methods',
    description: 'Essential array methods every JS developer should know.',
    duration: 25
  },
  // Add more quick lessons here
];