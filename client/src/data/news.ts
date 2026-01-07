/*
 * NEWS DATA - IAPulse Magazine Section
 * This file contains the news articles for the IAPulse section.
 * In Lovable.dev, you can ask the AI to add new articles here.
 */

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: "INVESTIGACIÓN" | "PRODUCTOS" | "REGULACIÓN" | "ROBÓTICA" | "MODELOS IA";
  image: string;
  readTime: string;
  date: string;
  isLive?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "La Era de los Modelos de IA Refinados: Eficiencia Desbloqueada",
    excerpt: "Modelos más pequeños y especializados superan a LLMs gigantes en razonamiento y eficiencia, marcando una nueva era en la inteligencia artificial.",
    category: "INVESTIGACIÓN",
    image: "/images/ai-news-1.jpg",
    readTime: "9 min",
    date: "hace 2 días",
    isLive: true,
  },
  {
    id: "2",
    title: "Continual Learning: La IA que Aprende sin Olvidar",
    excerpt: "Google ha desarrollado arquitecturas como Titans y Nested Learning que permiten a los modelos de IA actualizar su conocimiento interno sin reentrenamiento.",
    category: "INVESTIGACIÓN",
    image: "/images/ai-news-2.jpg",
    readTime: "8 min",
    date: "hace 3 días",
    isLive: true,
  },
  {
    id: "3",
    title: "World Models: La IA que Entiende el Mundo Físico",
    excerpt: "DeepMind, World Labs y Meta están desarrollando world models que permiten a la IA entender cómo funciona el mundo físico sin datos etiquetados.",
    category: "MODELOS IA",
    image: "/images/services-ai.jpg",
    readTime: "10 min",
    date: "hace 4 días",
    isLive: false,
  },
  {
    id: "4",
    title: "OpenAI Apuesta por Audio AI: Silicon Valley Declara Guerra a las Pantallas",
    excerpt: "OpenAI está reorganizando sus equipos para desarrollar un nuevo modelo de audio y un dispositivo personal que podría cambiar cómo interactuamos con la tecnología.",
    category: "PRODUCTOS",
    image: "/images/services-web.jpg",
    readTime: "7 min",
    date: "hace 5 días",
    isLive: false,
  },
];

export const categories = [
  "INVESTIGACIÓN",
  "REGULACIÓN",
  "PRODUCTOS",
  "ROBÓTICA",
  "MODELOS IA",
  "HARDWARE",
  "EMPRESAS",
] as const;
