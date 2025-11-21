import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Activity, 
  Search, 
  Plus, 
  Save, 
  Trash2, 
  FileText, 
  LayoutDashboard, 
  Download, 
  Edit, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';

// --- DATOS INICIALES EXTRAÍDOS DEL MARCO.MD ---
const INITIAL_DATA = [
  {
    id: "UC-UEP.01",
    layer: "Unsecured ENDPOINT",
    zone: "External Security",
    principle: "Proteger los servicios y procesos publicados a disposición de terceros dentro del principio de modelo de confianza Zero.",
    objective: "Establecer medidas de seguridad que permitan reducir la exposición a equipos y dispositivos confiables.",
    considerations: [
      "Deberán exponerse únicamente los protocolos y servicios prescindibles.",
      "Los protocolos expuestos deben ser robustos (TLS).",
      "Uso de mecanismos definidos en Boundary Security.",
      "Gestión de Identidad centralizada (IAM).",
      "Controles de Server Security, App Security y Data Security."
    ],
    nistReference: "NIST SP 800-207",
    maturity: 3
  },
  {
    id: "UC-APP.01",
    layer: "API Providers",
    zone: "External Security",
    principle: "Hacer uso de políticas de seguridad con objeto de asegurar el consumo de APIs de terceros.",
    objective: "Garantizar mediante políticas la confidencialidad e integridad en consumo de APIs.",
    considerations: [
      "Uso de TLS versiones recientes.",
      "Autenticación robusta (JWT, MTLS, OAuth 2.0).",
      "Documentación del ciclo de vida de APIs de terceros."
    ],
    nistReference: "NIST SP 800-95",
    maturity: 3
  },
  {
    id: "UC-AAC.01",
    layer: "Applications API Consumption",
    zone: "External Security",
    principle: "Proteger los servicios y procesos publicados para su consumo por terceros.",
    objective: "Establecer controles para proteger APIs expuestas frente a amenazas.",
    considerations: [
      "Protocolos robustos (TLS).",
      "Autenticación fuerte (No Basic Auth).",
      "Sistema de identidad para reconocer apps/servers.",
      "API Gateway + WAF/RASP + AI/ML Protection."
    ],
    nistReference: "NIST SP 800-53",
    maturity: 4
  },
  {
    id: "MC-EPS.01",
    layer: "Managed Clients",
    zone: "Infrastructure Security",
    principle: "Establecer controles con objeto de proteger los dispositivos gestionados.",
    objective: "Uso de cortafuegos para control y filtrado de tráfico en endpoints.",
    considerations: [
      "Sistema de control de tráfico basado en Cloud.",
      "Políticas de filtrado y visibilidad."
    ],
    nistReference: "NIST SP 800-124",
    maturity: 3
  },
  {
    id: "MC-EPS.02",
    layer: "Managed Clients",
    zone: "Infrastructure Security",
    principle: "Establecer controles con objeto de proteger los dispositivos gestionados.",
    objective: "Garantizar el uso de sistemas EDR (Detection and Response).",
    considerations: [
      "Visibilidad y telemetría.",
      "Detección dinámica.",
      "Respuesta rápida basada en Cloud."
    ],
    nistReference: "NIST SP 800-128",
    maturity: 4
  },
  {
    id: "I-BS.01",
    layer: "Boundary Security",
    zone: "Infrastructure Security",
    principle: "Proteger la infraestructura frente a amenazas del exterior.",
    objective: "Mecanismos para filtrar servicios expuestos a redes no confiables.",
    considerations: [
      "Arquitectura en capas (Norte-Sur).",
      "Stateful inspection, packet filtering, IDS.",
      "Políticas basadas en IP, App, Usuario."
    ],
    nistReference: "NIST SP 800-41",
    maturity: 5
  }
];

// --- COMPONENTES UI ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-slate-200 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, type = "default" }) => {
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

// --- VISTA DASHBOARD ---
const Dashboard = ({ controls }) => {
  const totalControls = controls.length;
  const byZone = controls.reduce((acc, curr) => {
    acc[curr.zone] = (acc[curr.zone] || 0) + 1;
    return acc;
  }, {});

  const avgMaturity = (controls.reduce((acc, curr) => acc + (curr.maturity || 0), 0) / totalControls).toFixed(1);

  return (
    <div className="space-y-6 p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800">Estado del Marco</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Controles</p>
            <p className="text-3xl font-bold text-slate-800">{totalControls}</p>
          </div>
        </Card>
        
        <Card className="p-6 flex items-center space-x-4">
          <div className="p-3 bg-emerald-100 rounded-full">
            <Activity className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Madurez Promedio</p>
            <p className="text-3xl font-bold text-slate-800">{avgMaturity} / 5</p>
          </div>
        </Card>

        <Card className="p-6 flex items-center space-x-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <Lock className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Zonas Definidas</p>
            <p className="text-3xl font-bold text-slate-800">{Object.keys(byZone).length}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-slate-700">Distribución por Zona</h3>
          <div className="space-y-4">
            {Object.entries(byZone).map(([zone, count]) => (
              <div key={zone} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">{zone || "Sin Zona"}</span>
                <div className="flex items-center flex-1 mx-4">
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${(count / totalControls) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-800">{count}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-slate-700">Niveles de Madurez</h3>
          <div className="flex items-end justify-between h-40 space-x-2">
             {[0, 1, 2, 3, 4, 5].map(level => {
               const count = controls.filter(c => c.maturity === level).length;
               const height = count > 0 ? (count / totalControls) * 100 : 0;
               return (
                 <div key={level} className="flex flex-col items-center w-full">
                    <div 
                      className="w-full bg-emerald-500 rounded-t hover:bg-emerald-600 transition-all"
                      style={{ height: `${height}%`, minHeight: count > 0 ? '4px' : '0' }}
                    />
                    <span className="text-xs mt-2 text-slate-500 font-medium">Lvl {level}</span>
                 </div>
               )
             })}
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- VISTA EDITOR (ADD/EDIT) ---
const ControlEditor = ({ control, onSave, onCancel }) => {
  const [formData, setFormData] = useState(control || {
    id: "",
    layer: "",
    zone: "Infrastructure Security",
    principle: "",
    objective: "",
    considerations: [""],
    nistReference: "",
    maturity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsiderationChange = (index, value) => {
    const newConsiderations = [...formData.considerations];
    newConsiderations[index] = value;
    setFormData(prev => ({ ...prev, considerations: newConsiderations }));
  };

  const addConsideration = () => {
    setFormData(prev => ({ ...prev, considerations: [...prev.considerations, ""] }));
  };

  const removeConsideration = (index) => {
    const newConsiderations = formData.considerations.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, considerations: newConsiderations }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fadeIn">
      <Card className="p-8">
        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">
            {control ? "Editar Control" : "Nuevo Control de Seguridad"}
          </h2>
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Identificador (ID)</label>
            <input 
              type="text" 
              name="id" 
              value={formData.id} 
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej: UC-UEP.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Referencia NIST / Standard</label>
            <input 
              type="text" 
              name="nistReference" 
              value={formData.nistReference} 
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej: SP 800-53"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Capa de Seguridad</label>
            <input 
              type="text" 
              name="layer" 
              value={formData.layer} 
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej: Managed Clients"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Zona</label>
            <select 
              name="zone" 
              value={formData.zone} 
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option>External Security</option>
              <option>Infrastructure Security</option>
              <option>Management of Security</option>
              <option>AI Security</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Principio</label>
            <textarea 
              name="principle" 
              value={formData.principle} 
              onChange={handleChange}
              rows="2"
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Objetivo</label>
            <textarea 
              name="objective" 
              value={formData.objective} 
              onChange={handleChange}
              rows="2"
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-slate-700">Consideraciones de Control</label>
            <button onClick={addConsideration} className="text-blue-600 text-sm flex items-center hover:underline">
              <Plus className="w-4 h-4 mr-1" /> Añadir
            </button>
          </div>
          <div className="space-y-2">
            {formData.considerations.map((cons, idx) => (
              <div key={idx} className="flex gap-2">
                <input 
                  type="text" 
                  value={cons} 
                  onChange={(e) => handleConsiderationChange(idx, e.target.value)}
                  className="flex-1 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Descripción de la consideración..."
                />
                {formData.considerations.length > 1 && (
                  <button onClick={() => removeConsideration(idx)} className="text-rose-500 hover:bg-rose-50 p-2 rounded">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
           <label className="block text-sm font-medium text-slate-700 mb-2">Nivel de Madurez Actual (0-5)</label>
           <div className="flex items-center space-x-4">
             <input 
               type="range" 
               min="0" 
               max="5" 
               step="1" 
               name="maturity"
               value={formData.maturity} 
               onChange={handleChange}
               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
             />
             <span className={`font-bold text-lg ${
                formData.maturity >= 4 ? 'text-emerald-600' : formData.maturity >= 2 ? 'text-amber-600' : 'text-rose-600'
             }`}>{formData.maturity}</span>
           </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button onClick={onCancel} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            Cancelar
          </button>
          <button onClick={() => onSave(formData)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center shadow-md">
            <Save className="w-4 h-4 mr-2" /> Guardar Control
          </button>
        </div>
      </Card>
    </div>
  );
};

// --- VISTA LISTA DE CONTROLES ---
const ControlList = ({ controls, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLayer, setFilterLayer] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const layers = ["All", ...new Set(controls.map(c => c.layer).filter(Boolean))];

  const filteredControls = controls.filter(c => {
    const matchesSearch = 
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.principle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.objective.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLayer = filterLayer === "All" || c.layer === filterLayer;
    return matchesSearch && matchesLayer;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Inventario de Controles</h2>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar control..." 
              className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={filterLayer}
            onChange={(e) => setFilterLayer(e.target.value)}
          >
            {layers.map(l => <option key={l} value={l}>{l === "All" ? "Todas las Capas" : l}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredControls.length === 0 ? (
          <div className="text-center py-12 text-slate-500">No se encontraron controles.</div>
        ) : (
          filteredControls.map(control => (
            <Card key={control.id} className="hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div 
                className="p-4 flex items-start md:items-center gap-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50"
                onClick={() => toggleExpand(control.id)}
              >
                <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                        control.zone === "External Security" ? "bg-blue-100 text-blue-700" :
                        control.zone === "Infrastructure Security" ? "bg-purple-100 text-purple-700" :
                        "bg-slate-200 text-slate-700"
                    }`}>
                        {control.id.split('.')[0]}
                    </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-slate-800">{control.id}</span>
                    <Badge type="blue">{control.layer}</Badge>
                    {control.nistReference && <Badge type="warning">{control.nistReference}</Badge>}
                  </div>
                  <p className="text-slate-600 text-sm truncate">{control.principle}</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                        <div className="text-xs text-slate-400 uppercase font-bold">Madurez</div>
                        <div className={`font-bold ${
                            control.maturity >= 3 ? 'text-emerald-600' : 'text-amber-600'
                        }`}>Nivel {control.maturity}</div>
                    </div>
                    {expandedId === control.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </div>
              </div>

              {expandedId === control.id && (
                <div className="p-6 border-t border-slate-100 bg-white animate-fadeIn">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-500"/> Objetivo
                            </h4>
                            <p className="text-slate-600 mt-1">{control.objective}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-500"/> Consideraciones
                            </h4>
                            <ul className="mt-2 space-y-1">
                                {control.considerations.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/>
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 justify-start border-l pl-6 border-slate-100">
                        <button 
                            onClick={(e) => { e.stopPropagation(); onEdit(control); }}
                            className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                        >
                            <Edit className="w-4 h-4" /> Editar Control
                        </button>
                        <button 
                             onClick={(e) => { e.stopPropagation(); onDelete(control.id); }}
                            className="w-full py-2 px-4 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                        >
                            <Trash2 className="w-4 h-4" /> Eliminar
                        </button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

// --- COMPONENTE EXPORT ---
const DataExport = ({ controls }) => {
    const downloadMarkdown = () => {
        let md = `# Marco de Ciberseguridad (Exportado)\n\n`;
        md += `Fecha: ${new Date().toLocaleDateString()}\n\n`;
        
        controls.forEach(c => {
            md += `### ${c.id} - ${c.layer}\n\n`;
            md += `**Zona:** ${c.zone}\n`;
            md += `**Principio:** ${c.principle}\n\n`;
            md += `**Objetivo:** ${c.objective}\n\n`;
            md += `**Consideraciones:**\n`;
            c.considerations.forEach(item => {
                md += `- ${item}\n`;
            });
            md += `\n**Referencia NIST:** ${c.nistReference || "N/A"}\n`;
            md += `**Nivel Madurez:** ${c.maturity}/5\n`;
            md += `\n---\n\n`;
        });

        const blob = new Blob([md], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Marco_Ciberseguridad_Export.md';
        a.click();
    };

    const downloadJSON = () => {
        const json = JSON.stringify(controls, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Marco_Ciberseguridad_Data.json';
        a.click();
    };

    return (
        <div className="p-6 animate-fadeIn">
            <Card className="p-8 max-w-2xl mx-auto text-center space-y-6">
                <Download className="w-16 h-16 text-blue-500 mx-auto" />
                <h2 className="text-2xl font-bold text-slate-800">Exportar Datos</h2>
                <p className="text-slate-600">Descarga tu marco de controles actualizado para integrarlo en tu web o realizar copias de seguridad.</p>
                <div className="flex justify-center gap-4 pt-4">
                    <button onClick={downloadMarkdown} className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors">
                        <FileText className="w-5 h-5" /> Descargar Markdown
                    </button>
                    <button onClick={downloadJSON} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <code className="w-5 h-5 font-bold text-sm flex items-center justify-center">{`{}`}</code> Descargar JSON
                    </button>
                </div>
            </Card>
        </div>
    )
}


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
    if(window.confirm("¿Estás seguro de eliminar este control?")) {
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
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        view === id || (view === 'edit' && id === 'list') 
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
            v1.0.0 Local Storage
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