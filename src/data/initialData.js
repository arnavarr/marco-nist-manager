export const INITIAL_DATA = [
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
    },
    {
        id: "MC-EPS.03",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger los dispositivos gestionados frente a amenazas cibernéticas.",
        objective: "Disponer de procedimientos para administrar las identidades, administrar las aplicaciones y dispositivos de forma segura.",
        considerations: [
            "Revisiones automáticas de aplicaciones y SOs.",
            "Remediaciones de seguridad (parches).",
            "Administración de identidades centralizada.",
            "Directivas de seguridad centralizadas."
        ],
        nistReference: "NIST SP 800-40",
        maturity: 2
    },
    {
        id: "MC-EPS.04",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la información de carácter confidencial durante su uso en dispositivos gestionados.",
        objective: "Establecer los controles y técnicas que permitan identificar y proteger la información con carácter confidencial.",
        considerations: [
            "Identificar y clasificar información confidencial.",
            "Directivas DLP centralizadas.",
            "Monitorizar actividad sobre archivos sensibles."
        ],
        nistReference: "NIST SP 800-53 SC-7",
        maturity: 1
    },
    {
        id: "MC-EPS.05",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger los dispositivos gestionados frente a amenazas cibernéticas.",
        objective: "Controles para políticas de seguridad sobre dispositivos móviles (MDM) y aplicaciones (MAM).",
        considerations: [
            "Soluciones MDM para políticas corporativas/BYOD.",
            "Catálogo de aplicaciones permitidas (MAM).",
            "Control centralizado (Auth, Borrado remoto, Bastionado)."
        ],
        nistReference: "NIST SP 800-124",
        maturity: 3
    },
    {
        id: "I-BS.02",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Proteger la infraestructura frente a amenazas del exterior.",
        objective: "Emplear sistemas de detección y prevención de intrusos (IDS/IPS).",
        considerations: [
            "Inspección de tráfico Norte-Sur y Este-Oeste.",
            "Funcionalidad para todo puerto/protocolo.",
            "Optimización para alertas SIEM."
        ],
        nistReference: "NIST SP 800-94",
        maturity: 4
    },
    {
        id: "I-BS.03",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Proteger la infraestructura frente a amenazas del exterior.",
        objective: "Establecer aislamiento lógico entre redes (DMZ).",
        considerations: [
            "Implementar DMZ en segmento separado.",
            "Arquitectura basada en estrella (no Mesh).",
            "Punto central como concentrador de conexiones."
        ],
        nistReference: "NIST SP 800-41",
        maturity: 5
    },
    {
        id: "I-BS.04",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Proteger la infraestructura frente a amenazas del exterior.",
        objective: "Asegurar tráfico hacia aplicaciones mediante L4/L7 Gateway.",
        considerations: [
            "Proxy inverso para evitar exposición directa.",
            "Proxy inverso capa 7 (Identidad, Integridad).",
            "Técnicas de multiplexing y aislamiento (DDoS)."
        ],
        nistReference: "NIST SP 800-41",
        maturity: 4
    },
    {
        id: "MC-EPS.06",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger los dispositivos gestionados frente a amenazas cibernéticas.",
        objective: "Hacer uso de los sistemas o procedimientos ágiles que garanticen la implementación de las Best Security Guides y/o Hardening Guides.",
        considerations: [
            "Sistemas para agilizar implantación de guías de seguridad.",
            "Procedimientos para ciclo de vida de guías.",
            "Bastionado a nivel hardware, software y aplicaciones."
        ],
        nistReference: "NIST SP 800-123",
        maturity: 3
    },
    {
        id: "MC-EPS.07",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger los dispositivos gestionados frente a amenazas cibernéticas.",
        objective: "Establecer mecanismos que proporcionen defensa contra amenazas cibernéticas tales como software malicioso, threats.",
        considerations: [
            "Defensa contra malware.",
            "Protección contra amenazas."
        ],
        nistReference: "NIST SP 800-83",
        maturity: 4
    },
    {
        id: "MC-EPS.08",
        layer: "Managed Clients",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger los dispositivos gestionados frente a amenazas cibernéticas.",
        objective: "Garantizar que los dispositivos y su software cumplen con los requerimientos específicos en criterios de seguridad.",
        considerations: [
            "Cumplimiento de requerimientos de seguridad.",
            "Garantizar cumplimiento de otros controles."
        ],
        nistReference: "NIST SP 800-124",
        maturity: 3
    },
    {
        id: "I-BS.05",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la infraestructura y sus activos frente a amenazas cibernéticas del exterior.",
        objective: "Asegurar que se establecen controles para proteger los datos contra exfiltraciones (DLP In-Motion).",
        considerations: [
            "Perímetro no debe procesar datos sensibles.",
            "Cifrado de datos en tránsito (TLS).",
            "TLS Offloading para inspección."
        ],
        nistReference: "NIST SP 800-53 SC-8",
        maturity: 4
    },
    {
        id: "I-BS.06",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la infraestructura y sus activos frente a amenazas cibernéticas del exterior.",
        objective: "Desplegar soluciones con objeto de proteger los activos frente a denegaciones de servicios dirigidas (DOS/DDOS).",
        considerations: [
            "Protección DOS/DDoS L3, L4, L7.",
            "Protección distribuida."
        ],
        nistReference: "NIST SP 800-189",
        maturity: 5
    },
    {
        id: "I-BS.07",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la infraestructura y sus activos frente a amenazas cibernéticas del exterior.",
        objective: "Establecer mecanismos de protección contra malware que operen en tiempo real.",
        considerations: [
            "Protección malware al vuelo.",
            "Sandbox en perímetro.",
            "Protección global en Cloud."
        ],
        nistReference: "NIST SP 800-83",
        maturity: 4
    },
    {
        id: "I-BS.08",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la infraestructura y sus activos frente a amenazas cibernéticas del exterior.",
        objective: "Identificar tráfico legítimo de malicioso (Bot Defense).",
        considerations: [
            "Advanced Bot Defense para HTTP(s).",
            "Detección por FingerPrints, Cookies, JS.",
            "Protección contra Credential Cracking, Scraping."
        ],
        nistReference: "NIST SP 800-53",
        maturity: 4
    },
    {
        id: "I-BS.09",
        layer: "Boundary Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles con objeto de proteger la infraestructura y sus activos frente a amenazas cibernéticas del exterior.",
        objective: "Disponer de WAF para proteger aplicaciones web y APIs.",
        considerations: [
            "WAF o RASP en perímetro.",
            "Modelo de seguridad negativa y positiva.",
            "Protección OWASP Top 10."
        ],
        nistReference: "NIST SP 800-53 SC-7",
        maturity: 4
    },
    {
        id: "AP-ADL.01",
        layer: "Application Security",
        zone: "Infrastructure Security",
        principle: "Establecer controles y procesos de desarrollo seguro.",
        objective: "Garantizar que las aplicaciones cumplen con requerimientos de seguridad en todo el ciclo de vida (SDL).",
        considerations: [
            "Cumplimiento ciclo de vida desarrollo seguro.",
            "Modelado de amenazas.",
            "Configuraciones de usuario con restricciones."
        ],
        nistReference: "NIST SP 800-64",
        maturity: 3
    },
    {
        id: "AP-AT.01",
        layer: "Application Security",
        zone: "Infrastructure Security",
        principle: "Establecer auditorías y análisis de seguridad en el código.",
        objective: "Garantizar aplicaciones cumplen criterios de seguridad (SAST, DAST, RAST).",
        considerations: [
            "Integración con versionado.",
            "Análisis SAST y SCA indispensable.",
            "Pentest previo a producción."
        ],
        nistReference: "NIST SP 800-115",
        maturity: 4
    },
    {
        id: "M-IAM.01",
        layer: "Identity and Access Management",
        zone: "Management of security",
        principle: "Proteger acceso mediante plano de gestión aislado.",
        objective: "Implementar plano de gestión aislado del plano de datos.",
        considerations: [
            "Gestión aislada de datos.",
            "Operaciones de gestión vía canal seguro.",
            "Bastion hosts."
        ],
        nistReference: "NIST SP 800-53 AC-6",
        maturity: 4
    },
    {
        id: "M-IAM.02",
        layer: "Identity and Access Management",
        zone: "Management of security",
        principle: "Proteger acceso mediante gestión segura de identidad.",
        objective: "Asegurar acceso mediante SSO, MFA, etc.",
        considerations: [
            "Inicios de sesión únicos.",
            "Autenticación robusta.",
            "RBAC y ABAC."
        ],
        nistReference: "NIST SP 800-63",
        maturity: 4
    }
];
