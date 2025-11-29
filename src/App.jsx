import React, { useState, useEffect } from 'react';
import {
  Shield,
  Plus,
  LayoutDashboard,
  Download,
  Menu,
  X
} from 'lucide-react';

import { INITIAL_DATA } from './data/initialData';
import Dashboard from './components/Dashboard';
import ControlList from './components/ControlList';
import ControlEditor from './components/ControlEditor';
import DataExport from './components/DataExport';

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('dashboard'); // dashboard, list, add, edit, export
  const [controls, setControls] = useState(() => {
    // Persistencia local simple
    const saved = localStorage.getItem('frameworkControls');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  const [editingControl, setEditingControl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('frameworkControls', JSON.stringify(controls));
  }, [controls]);

  const handleAddControl = (newControl) => {
    setControls([...controls, newControl]);
    setView('list');
  };

  const handleUpdateControl = (updatedControl) => {
    setControls(controls.map(c => c.id === updatedControl.id ? updatedControl : c));
    setView('list');
    setEditingControl(null);
  };

  const handleDeleteControl = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este control?")) {
      setControls(controls.filter(c => c.id !== id));
    }
  };

  const startEdit = (control) => {
    setEditingControl(control);
    setView('edit');
  };

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => { setView(id); setMobileMenuOpen(false); }}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${view === id || (view === 'edit' && id === 'list')
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 bg-slate-900 flex-col text-white">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-xl">M</div>
            <span className="font-bold text-lg tracking-tight">Marco Security</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem id="dashboard" label="Dashboard" icon={LayoutDashboard} />
          <NavItem id="list" label="Controles" icon={Shield} />
          <NavItem id="add" label="Añadir Nuevo" icon={Plus} />
          <NavItem id="export" label="Exportar" icon={Download} />
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          v1.1.0 Modular
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-slate-900 z-50 px-4 py-3 flex justify-between items-center text-white shadow-md">
        <span className="font-bold">Marco Security</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 pt-16 px-4 space-y-4 md:hidden">
          <NavItem id="dashboard" label="Dashboard" icon={LayoutDashboard} />
          <NavItem id="list" label="Controles" icon={Shield} />
          <NavItem id="add" label="Añadir Nuevo" icon={Plus} />
          <NavItem id="export" label="Exportar" icon={Download} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 scroll-smooth">
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800 capitalize">
            {view === 'add' ? 'Añadir Control' : view === 'edit' ? 'Editar Control' : view}
          </h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-xs font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              Sistema Activo
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {view === 'dashboard' && <Dashboard controls={controls} />}
          {view === 'list' && <ControlList controls={controls} onEdit={startEdit} onDelete={handleDeleteControl} />}
          {view === 'add' && <ControlEditor onSave={handleAddControl} onCancel={() => setView('list')} />}
          {view === 'edit' && <ControlEditor control={editingControl} onSave={handleUpdateControl} onCancel={() => setView('list')} />}
          {view === 'export' && <DataExport controls={controls} />}
        </div>
      </main>
    </div>
  );
}