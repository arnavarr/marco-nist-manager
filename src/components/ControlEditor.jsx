import React, { useState } from 'react';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { Card } from './ui/Card';
import { MATURITY_LEVELS } from '../data/maturityLevels';

const ControlEditor = ({ control, onSave, onCancel, controls = [] }) => {
    const [formData, setFormData] = useState(() => {
        const initial = control || {
            id: "",
            layer: "",
            zone: "Infrastructure Security",
            principle: "",
            objective: "",
            considerations: [""],
            nistReference: "",
            nistRef: "",
            isoRef: "",
            maturity: 0
        };
        // Migration: If nistReference exists but nistRef is empty, copy it
        if (initial.nistReference && !initial.nistRef) {
            initial.nistRef = initial.nistReference;
        }
        return initial;
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

    const handleSave = () => {
        // Validation: Check for duplicate ID if creating new control
        if (!control) {
            const exists = controls.some(c => c.id === formData.id);
            if (exists) {
                alert("ID already exists");
                return;
            }
        }
        // Sync nistReference for backward compatibility
        const dataToSave = {
            ...formData,
            nistReference: formData.nistRef // Keep nistReference in sync with nistRef
        };
        onSave(dataToSave);
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
                        <label className="block text-sm font-medium text-slate-700 mb-1">Referencia NIST SP 800-53</label>
                        <input
                            type="text"
                            name="nistRef"
                            value={formData.nistRef || ""}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Ej: AC-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Referencia ISO 27001/27002</label>
                        <input
                            type="text"
                            name="isoRef"
                            value={formData.isoRef || ""}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Ej: A.9.1.1"
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
                    <label className="block text-sm font-medium text-slate-700 mb-4">Nivel de Madurez Actual</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                        {MATURITY_LEVELS.map((level) => (
                            <button
                                key={level.level}
                                onClick={() => setFormData(prev => ({ ...prev, maturity: level.level }))}
                                className={`p-3 rounded-lg border text-left transition-all ${formData.maturity === level.level
                                    ? `ring-2 ring-blue-500 ring-offset-2 ${level.headerColor ? '' : 'bg-slate-50'}`
                                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                                    }`}
                                style={{ backgroundColor: formData.maturity === level.level ? level.headerColor : undefined }}
                            >
                                <div className={`font-bold text-sm ${formData.maturity === level.level ? level.textColor : "text-slate-800"}`}>
                                    {level.level} - {level.label}
                                </div>
                                <div className={`text-xs mt-1 ${formData.maturity === level.level ? level.textColor : "text-slate-500"}`}>
                                    {level.subLabel}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Selected Level Details */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                                {formData.maturity}
                            </span>
                            {MATURITY_LEVELS[formData.maturity]?.label}
                        </h4>
                        <div className="space-y-3 text-sm text-slate-600">
                            <div>
                                <strong className="text-slate-900 block mb-1">Definición:</strong>
                                {MATURITY_LEVELS[formData.maturity]?.definition}
                            </div>
                            <div>
                                <strong className="text-slate-900 block mb-1">Explicación:</strong>
                                {MATURITY_LEVELS[formData.maturity]?.explanation}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button onClick={onCancel} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                        Cancelar
                    </button>
                    <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center shadow-md">
                        <Save className="w-4 h-4 mr-2" /> Guardar Control
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default ControlEditor;
