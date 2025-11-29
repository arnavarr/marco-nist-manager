import React from 'react';
import { Shield, Activity, Lock } from 'lucide-react';
import { Card } from './ui/Card';

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                <Card className="p-6 flex items-center space-x-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                        <Shield className="w-8 h-8 text-amber-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">NIST Compliance</p>
                        <p className="text-3xl font-bold text-slate-800">
                            {totalControls > 0 ? Math.round((controls.filter(c => c.nistReference).length / totalControls) * 100) : 0}%
                        </p>
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

export default Dashboard;
