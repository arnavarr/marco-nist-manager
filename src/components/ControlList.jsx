import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Activity, FileText, CheckCircle, Edit, Trash2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const ControlList = ({ controls, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLayer, setFilterLayer] = useState("All");
    const [filterNist, setFilterNist] = useState("All");
    const [expandedId, setExpandedId] = useState(null);

    const layers = ["All", ...new Set(controls.map(c => c.layer).filter(Boolean))];
    const nistRefs = ["All", ...new Set(controls.map(c => c.nistReference).filter(Boolean))];

    const filteredControls = controls.filter(c => {
        const matchesSearch =
            c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.principle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.objective.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLayer = filterLayer === "All" || c.layer === filterLayer;
        const matchesNist = filterNist === "All" || c.nistReference === filterNist;
        return matchesSearch && matchesLayer && matchesNist;
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
                    <select
                        className="px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                        value={filterNist}
                        onChange={(e) => setFilterNist(e.target.value)}
                    >
                        {nistRefs.map(n => <option key={n} value={n}>{n === "All" ? "Todos los Estándares" : n}</option>)}
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
                                <div className="shrink-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${control.zone === "External Security" ? "bg-blue-100 text-blue-700" :
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
                                        <div className={`font-bold ${control.maturity >= 3 ? 'text-emerald-600' : 'text-amber-600'
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
                                                    <Activity className="w-4 h-4 text-blue-500" /> Objetivo
                                                </h4>
                                                <p className="text-slate-600 mt-1">{control.objective}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                                    <FileText className="w-4 h-4 text-blue-500" /> Consideraciones
                                                </h4>
                                                <ul className="mt-2 space-y-1">
                                                    {control.considerations.map((c, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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

export default ControlList;
