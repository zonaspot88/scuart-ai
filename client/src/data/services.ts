/*
 * SERVICES DATA - Scuart Agency Section
 * This file contains the services offered by Scuart.
 */

import { Code2, Cpu, Palette, Rocket, Shield, Smartphone } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones web personalizadas construidas con las tecnologías más modernas como React, Next.js y Tailwind CSS.",
    icon: Code2,
    features: [
      "React & Next.js",
      "Diseño Responsivo",
      "SEO Optimizado",
      "Alto Rendimiento",
    ],
  },
  {
    id: "ai-integration",
    title: "Integración de IA",
    description: "Potenciamos tu negocio con inteligencia artificial. Chatbots, automatización y análisis predictivo personalizados.",
    icon: Cpu,
    features: [
      "Chatbots Inteligentes",
      "Automatización de Procesos",
      "Análisis Predictivo",
      "APIs de OpenAI & Claude",
    ],
  },
  {
    id: "mobile-apps",
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android que ofrecen experiencias de usuario excepcionales.",
    icon: Smartphone,
    features: [
      "React Native",
      "iOS & Android",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    id: "ui-ux-design",
    title: "Diseño UI/UX",
    description: "Interfaces hermosas e intuitivas que cautivan a tu audiencia y mejoran la conversión de tu negocio.",
    icon: Palette,
    features: [
      "Diseño de Interfaces",
      "Prototipado Rápido",
      "User Research",
      "Design Systems",
    ],
  },
  {
    id: "consulting",
    title: "Consultoría Tech",
    description: "Asesoramiento estratégico para transformar digitalmente tu empresa con las mejores prácticas de la industria.",
    icon: Rocket,
    features: [
      "Auditoría Técnica",
      "Roadmap Digital",
      "Arquitectura de Software",
      "Optimización de Costos",
    ],
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description: "Protegemos tu infraestructura digital con las últimas técnicas de seguridad y cumplimiento normativo.",
    icon: Shield,
    features: [
      "Auditorías de Seguridad",
      "Penetration Testing",
      "Cumplimiento GDPR",
      "Monitoreo 24/7",
    ],
  },
];

export const stats = [
  { value: "150+", label: "Proyectos Completados" },
  { value: "5+", label: "Años de Experiencia" },
  { value: "100%", label: "Clientes Satisfechos" },
  { value: "24/7", label: "Soporte Técnico" },
];
