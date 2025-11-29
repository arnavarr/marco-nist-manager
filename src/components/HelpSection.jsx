import React from 'react';

export default function HelpSection() {
    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Marco Ciberseguridad</h2>
                <p className="text-slate-600">
                    La emisión de un Marco de Seguridad busca ofrecer los mecanismos que permitan garantizar la solidez en materia de ciberseguridad de nuestros clientes, a través del uso de controles en los dominios de Detección y Prevención.
                </p>
                <p className="text-slate-600 mt-4">
                    El Marco articula controles apropiados y desarrollados con objeto de proporcionar orientación sobre cómo debe evaluarse el nivel de madurez de seguridad de una solución. La adopción e implementación del Marco es un paso vital para garantizar que se puedan gestionar adecuadamente las amenazas de seguridad.
                </p>
            </div>

            {/* Introducción */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Introducción al Marco</h3>
                <div className="space-y-4 text-slate-600">
                    <p>
                        La sociedad digital actual exige una experiencia de cliente impecable, una disponibilidad continua y una sensación de protección de los servicios de los cuales son consumidores. Los activos de información y los servicios en línea ahora son estratégicamente importantes para todas las organizaciones públicas y privadas, así como para la sociedad en general.
                    </p>
                    <p>
                        Todo ello subraya la necesidad de salvaguardar los datos durante su tratamiento, almacenamiento y procesamiento proviniendo de la confidencialidad, integridad y disponibilidad de ellos, mientras mejora la resiliencia frente a las ciber-amenazas.
                    </p>
                    <p>Por ello este Marco se constituye con objeto de:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Mantener la protección de los activos de información y los servicios en línea</li>
                        <li>Crear un enfoque común para abordar la ciberseguridad dentro de la Organización.</li>
                        <li>Alcanzar un nivel adecuado de madurez de los controles de seguridad.</li>
                        <li>Garantizar que los riesgos de ciberseguridad se gestionen adecuadamente.</li>
                    </ul>
                    <p>
                        El Marco se utilizará para evaluar el nivel de madurez y la eficacia de los controles de seguridad en las distintas iniciativas, proyectos, compras, herramientas o soluciones.
                    </p>
                    <p>
                        Es de gran importancia entender que el Marco tiene como objeto establecer los controles y requisitos sobre un amplio conjunto de capacidades técnicas y capas de seguridad dadas dentro de una arquitectura o solución.
                    </p>
                </div>
            </div>

            {/* Definición de Ciberseguridad */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Definición de Ciberseguridad</h3>
                <div className="space-y-4 text-slate-600">
                    <p>
                        La ciberseguridad se define como el conjunto de herramientas, políticas, conceptos de seguridad, salvaguardas de seguridad, directrices, enfoques de gestión de riesgos, acciones, capacitación, mejores prácticas, aseguramiento y tecnologías que se puede utilizar para proteger los activos de información de la organización contra amenazas internas y externas.
                    </p>
                    <p>Los objetivos generales de seguridad comprenden lo siguiente:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong className="text-slate-800">Confidencialidad:</strong> los activos de información son accesibles sólo para aquellos autorizados a tener acceso (es decir, protegido contra la divulgación no autorizada o la filtración (no)intencionada de datos confidenciales).
                        </li>
                        <li>
                            <strong className="text-slate-800">Integridad:</strong> los activos de información son precisos, completos y procesados correctamente (es decir, están protegidos contra modificación no autorizada, que puede incluir autenticidad y no repudio).
                        </li>
                        <li>
                            <strong className="text-slate-800">Disponibilidad:</strong> los activos de información son resistentes y accesibles cuando sea necesario (es decir, están protegidos contra interrupción no autorizada).
                        </li>
                    </ul>
                </div>
            </div>

            {/* Estructura del Marco */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Estructura del Marco y funcionalidades</h3>
                <div className="space-y-4 text-slate-600">
                    <p>
                        El Marco ha sido modelado con base únicamente técnica haciendo uso de los dominios técnicos de Ciberseguridad principales:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><em>Security Architecture</em></li>
                        <li><em>Application Security</em></li>
                        <li><em>Marco and Standards</em></li>
                    </ul>
                    <p>
                        La versión más actual del Marco hace uso de una estructura de cuatro niveles de profundidad y diecisiete capas de seguridad, para acomodar las ciento diez capacidades técnicas con sus principios, objetivos y controles.
                    </p>

                    <div className="mt-4">
                        <h4 className="font-bold text-slate-800 mb-2">Zones</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong className="text-slate-800">External Security:</strong> Recoge las capas, capacidades, objetivos, requisitos y controles para los elementos que participan en la solución situados fuera del ámbito de la infraestructura física, virtual o lógica de la compañía.
                            </li>
                            <li>
                                <strong className="text-slate-800">Infrastructure Security:</strong> Recoge la capas, capacidades, objetivos, requisitos y controles para los elementos que se sitúan dentro de la infraestructura física, virtual o lógica de la compañía.
                            </li>
                            <li>
                                <strong className="text-slate-800">Management of security:</strong> De igual forma, recoge aquellas capas, capacidades, objetivos, requisitos y controles para aquellos elementos que introducen seguridad en la capa de gestión de identidad y acceso, o seguridad, haciendo uso principalmente de la monitorización y observación de los componentes que conforman la solución.
                            </li>
                            <li>
                                <strong className="text-slate-800">AI Security Considerations:</strong> Las consideraciones de seguridad sobre IA actúan de forma transversal sobre el resto de las tres capas anteriores, estableciendo los controles y principios en materia cibernética a cumplir.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-bold text-slate-800 mb-2">Security Layers</h4>
                        <p className="mb-2">
                            El uso de capas de seguridad en materia cibernética a veces es comparada con la seguridad que los fabricantes del sector aeronáutico establecen para evitar un accidente. De igual forma el uso de capas de seguridad permite evitar un incidente cibernético. La versión actual del Marco define 17 capas de seguridad:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5">
                            <ul className="list-disc space-y-1">
                                <li>Unmanaged Clients</li>
                                <li>Managed Clients (Company Devices & BYOD)</li>
                                <li>API Providers</li>
                                <li>Applications API Consumption</li>
                                <li>Physical Devices/Controllers (IoT)</li>
                                <li>Boundary Security</li>
                                <li>Network Security</li>
                                <li>Server Security</li>
                                <li>Containers Security</li>
                            </ul>
                            <ul className="list-disc space-y-1">
                                <li>Application Security</li>
                                <li>Data & Cryptography Security</li>
                                <li>Post-Quantum Cryptography Security</li>
                                <li>Identity and Access Management</li>
                                <li>Monitoring Management</li>
                                <li>AI Security Considerations</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-bold text-slate-800 mb-2">Cibersecurity Technical capabilities</h4>
                        <p className="mb-2">
                            Las capacidades técnicas permiten facilitar los objetivos, requerimientos y controles en materia de Ciberseguridad que deberían existir en cada capa de seguridad.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-slate-800">Objetivo:</strong> Dentro de cada capacidad técnica, el objetivo describe el principal propósito y cuál es el conjunto de medidas en materia de ciberseguridad requeridas.</li>
                            <li><strong className="text-slate-800">Requerimientos:</strong> Reflejan los controles de ciberseguridad obligatorios que deben considerarse.</li>
                            <li><strong className="text-slate-800">Consideraciones de control:</strong> Profundiza en los controles y requerimientos técnicos y apunta a guías de aplicación, guías técnicas, estándares, normas, políticas u otros documentos de interés.</li>
                            <li><strong className="text-slate-800">Prioridad:</strong> Normaliza en materia de ciberseguridad la criticidad de los controles sobre la capacidad técnica.</li>
                        </ul>
                    </div>

                    <div className="mt-6 bg-slate-50 p-4 rounded border border-slate-200">
                        <p className="mb-2 font-medium">Nomenclatura de controles:</p>
                        <p className="text-center text-lg font-mono bg-white p-2 rounded border border-slate-300 inline-block">MC - EPS . 02</p>
                        <ul className="mt-2 text-sm text-slate-500 list-none pl-0">
                            <li><span className="font-bold">MC:</span> Security Layer</li>
                            <li><span className="font-bold">EPS:</span> Zone</li>
                            <li><span className="font-bold">02:</span> Cibersecurity Technical capability</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principios */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Principios</h3>
                <div className="space-y-4 text-slate-600">
                    <p>
                        El Marco desarrollado está basado en el concepto de "Principle based" o también conocido como "Risk Based". Esto significa que su uso prescribe los principios y objetivos de seguridad que la compañía debe incorporar y alcanzar.
                    </p>
                    <p>
                        La lista de controles obligatorios del marco deben ser considerados por todas las áreas técnicas de la compañía en la consecución de sus objetivos tecnológicos como parte de la oferta de servicios prestado. Cuando un determinado control u objetivo no pueda ser considerado, se deberá considerar la aplicación de controles compensatorios buscando una aprobación por parte la función de la Ciberseguridad o bien la aceptación interna del riesgo.
                    </p>
                </div>
            </div>

            {/* Modelo de Madurez */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Modelo de madurez de Ciberseguridad</h3>

                <div className="flex flex-col items-center mb-8 space-y-0.5 max-w-xs mx-auto">
                    <div className="w-full py-3 text-center text-white font-bold text-sm rounded-t" style={{ backgroundColor: '#3B6021' }}>
                        5 - OPTIMIZED<br /><span className="font-normal text-xs opacity-90">ADVANCED / PROGRESSIVE</span>
                    </div>
                    <div className="w-full py-3 text-center text-white font-bold text-sm" style={{ backgroundColor: '#558B2F' }}>
                        4 - MANAGED<br /><span className="font-normal text-xs opacity-90">PROACTIVE</span>
                    </div>
                    <div className="w-full py-3 text-center text-black font-bold text-sm" style={{ backgroundColor: '#8BC34A' }}>
                        3 - DEFINED<br /><span className="font-normal text-xs opacity-80">INTERMEDIATE CYBER HYGIENE</span>
                    </div>
                    <div className="w-full py-3 text-center text-black font-bold text-sm" style={{ backgroundColor: '#C5E1A5' }}>
                        2 - DEVELOPING<br /><span className="font-normal text-xs opacity-80">BASIC CYBER HYGIENE</span>
                    </div>
                    <div className="w-full py-3 text-center text-black font-bold text-sm" style={{ backgroundColor: '#E6EE9C' }}>
                        1 - INITIAL<br /><span className="font-normal text-xs opacity-80">INITIAL CYBER HYGIENE</span>
                    </div>
                    <div className="w-full py-3 text-center text-black font-bold text-sm rounded-b" style={{ backgroundColor: '#F1F8E9' }}>
                        0 - NON-EXISTENT<br /><span className="font-normal text-xs opacity-80">NON-EXISTENT CYBER HYGIENE</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-600">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3 w-1/6">Maturity Level</th>
                                <th className="px-6 py-3 w-1/3">Definition and Criteria</th>
                                <th className="px-6 py-3">Explanation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="bg-white">
                                <td className="px-6 py-4 font-medium text-slate-900">0 Non-existent</td>
                                <td className="px-6 py-4">No existen controles de Ciberseguridad.</td>
                                <td className="px-6 py-4">No existen controles de ciberseguridad y/o no hay planes actuales para implementar dichos controles de ciberseguridad y/o no existe documentación/procesos algunos definidos.</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">1 Initial</td>
                                <td className="px-6 py-4">Los controles de ciberseguridad no están definidos o están parcialmente definidos.</td>
                                <td className="px-6 py-4">El diseño y la ejecución de los controles de ciberseguridad han sido situados y evaluados por el mismo propietario. Los controles de ciberseguridad no pueden corregir o mitigar parcialmente los riesgos identificados y la ejecución de estos son inconsistentes. La documentación es inexistente o está ha sido definida de forma incorrecta y/o incompleta.</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4 font-medium text-slate-900">2 Developing</td>
                                <td className="px-6 py-4">Algunos de los controles de ciberseguridad han sido desarrollados según los estándares y requisitos presentados.</td>
                                <td className="px-6 py-4">Existen algunos controles de ciberseguridad. Sin embargo, los objetivos y los requisitos de control no han sido definidos formalmente. Existe documentación limitada para una revisión estructurada o revisión de control.</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">3 Defined</td>
                                <td className="px-6 py-4">Los controles con requisito, imprescindible, crítico y alto según la estructura y el Marco han sido definidos e implementados para su mitigación o corrección.</td>
                                <td className="px-6 py-4">Los controles y requisitos con categorización según la estructura y formalización del Marco como imprescindibles, críticos y altos son mitigados o implementados para su corrección. Estos controles han sido evidenciados y auditados. La implementación de estos controles de ciberseguridad puede ser demostrado con evidencias.</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4 font-medium text-slate-900">4 Managed</td>
                                <td className="px-6 py-4">Se mejora o se alcanza la mitigación o corrección de los riesgos levantados por los controles con requisito medio y bajo.</td>
                                <td className="px-6 py-4">El programa de ciberseguridad se centra en alcanzar el cumplimiento de todos los controles y requisitos cibernéticos, se mantiene una documentación y procedimientos actualizados, se monitoriza en base a riesgos cibernéticos los componentes críticos de la solución, se cuenta con procesos y mecanismos de disponibilidad y resiliencia de datos, a la vez que se mantienen auditorías de seguridad periódicas.</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">5 Optimized</td>
                                <td className="px-6 py-4">Todos los controles de ciberseguridad están sujetos a un continuo plan de mejora.</td>
                                <td className="px-6 py-4">El programa de ciberseguridad se centra en el cumplimiento, la eficacia y mejora continua de los controles de ciberseguridad. Los controles de ciberseguridad están integrados con el marco y prácticas de gestión. Se evalúa el desempeño de los controles de ciberseguridad periódicamente. Se hace uso de herramientas de automatización para velar por los controles cibernéticos en base al cumplimiento del Marco de Ciberseguridad.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
