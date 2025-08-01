export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  demoUrlAdmin?: string;
  sourceCode?: string;
  username?: string;
  pass?: string;
}

export const mockProjects = [
  {
    id: 'food-ordering',
    title: 'Food Ordering Website',
    description: 'An online food ordering platform that allows users to browse menus, place orders, make payments, and track delivery status.',
    imageUrl: '/images/food-ordering.png',
    technologies: ['MERN Stack', 'Tailwind CSS'],
    demoUrl: 'https://food-frontend-rouge.vercel.app/',
    demoUrlAdmin:'https://food-admin-rosy.vercel.app/',
    sourceCode: 'https://github.com/sarah111-art/Food',
    username:'admin@foodsun.com',
    pass:'admin123'
  },
  {
    id: 'chat-app',
    title: 'Chat Real-time App',
    description: 'A real-time chat application that supports instant messaging between multiple users.',
    imageUrl: '/images/chat-app.png',
    technologies: ['Socket.IO', 'Node.js', 'React'],
    demoUrl: 'https://chat-five-pink.vercel.app/',
    sourceCode: 'https://github.com/sarah111-art/chat',
  },
  {
    id: 'bonsai-ecommerce',
    title: 'Bonsai Ecommerce',
    description: 'An ecommerce website for selling bonsai trees with cart features and an admin dashboard for managing orders.',
    imageUrl: '/images/bonsai.png',
    technologies: ['MERN Stack', 'Admin Dashboard'],
    demoUrl: 'https://tree-eosin.vercel.app/',
    sourceCode: 'https://github.com/sarah111-art/tree',
  },
];
