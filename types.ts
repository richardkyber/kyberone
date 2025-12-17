import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  delay: number;
}