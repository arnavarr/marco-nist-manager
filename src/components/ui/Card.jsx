import React from 'react';

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-200 ${className}`}>
        {children}
    </div>
);
