import React from 'react';

export const Badge = ({ children, type = "default" }) => {
    const colors = {
        default: "bg-slate-100 text-slate-700",
        success: "bg-emerald-100 text-emerald-700",
        warning: "bg-amber-100 text-amber-700",
        danger: "bg-rose-100 text-rose-700",
        blue: "bg-blue-100 text-blue-700",
        purple: "bg-purple-100 text-purple-700"
    };
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[type] || colors.default}`}>
            {children}
        </span>
    );
};
