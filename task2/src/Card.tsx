import React from 'react';

// Описываем типы для пропсов (TypeScript)
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Опциональный проп для стилей
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    // Используем выражения {} для динамических классов и заголовка
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;