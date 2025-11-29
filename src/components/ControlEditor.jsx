import React, { useState } from 'react';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { Card } from './ui/Card';

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
                        <span className={`font-bold text-lg ${formData.maturity >= 4 ? 'text-emerald-600' : formData.maturity >= 2 ? 'text-amber-600' : 'text-rose-600'
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

export default ControlEditor;
