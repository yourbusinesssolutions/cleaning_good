import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, accentColor = 'blue' }) => {
  const colorClasses = {
    blue: {
      border: 'border-blue-600',
      icon: 'bg-blue-100 text-blue-600',
      title: 'text-blue-600'
    },
    green: {
      border: 'border-green-600',
      icon: 'bg-green-100 text-green-600',
      title: 'text-green-600'
    },
    indigo: {
      border: 'border-indigo-600',
      icon: 'bg-indigo-100 text-indigo-600',
      title: 'text-indigo-600'
    }
  };

  const colors = colorClasses[accentColor] || colorClasses.blue;

  return (
    <div className={`bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${colors.border}`}>
      <div className={`flex items-center justify-center w-16 h-16 rounded-full ${colors.icon} mb-6 mx-auto`}>
        <Icon size={28} />
      </div>
      <h3 className={`text-xl font-bold ${colors.title} mb-4 text-center`}>{title}</h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;