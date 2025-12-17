import React from 'react';
import { Feature } from '../types';

export const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => {
  return (
    <div className="p-6 border border-gray-800 bg-gray-900/30 rounded-xl hover:border-gray-600 transition-colors duration-300 group">
      <div className="mb-4 text-white group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-sans">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-sans text-sm">{description}</p>
    </div>
  );
};