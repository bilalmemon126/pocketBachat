import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <h3 className="text-sm font-medium text-slate-600 mb-1">
        {title}
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;