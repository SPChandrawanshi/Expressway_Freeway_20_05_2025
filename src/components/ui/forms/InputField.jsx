import React from 'react';

const InputField = ({ label, type = "text", placeholder, value, onChange, icon: Icon, error }) => {
  return (
    <div className="space-y-2 group">
      {label && <label className="text-sm font-medium text-slate-300 group-focus-within:text-primary transition-colors">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-slate-900/50 border ${error ? 'border-danger' : 'border-slate-700'} ${Icon ? 'pl-12' : 'px-4'} py-3 rounded-xl text-white outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover/20 transition-all placeholder:text-slate-600`}
        />
      </div>
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
};

export default InputField;
