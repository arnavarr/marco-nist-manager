import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Card } from './ui/Card';

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

export default DataExport;
