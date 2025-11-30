export const MATURITY_LEVELS = [
    {
        level: 0,
        label: "Non-existent",
        subLabel: "NON-EXISTENT CYBER HYGIENE",
        color: "bg-slate-100 text-slate-600",
        headerColor: "#F1F8E9",
        textColor: "text-black",
        definition: "No existen controles de Ciberseguridad.",
        explanation: "No existen controles de ciberseguridad y/o no hay planes actuales para implementar dichos controles de ciberseguridad y/o no existe documentación/procesos algunos definidos."
    },
    {
        level: 1,
        label: "Initial",
        subLabel: "INITIAL CYBER HYGIENE",
        color: "bg-lime-100 text-lime-800",
        headerColor: "#E6EE9C",
        textColor: "text-black",
        definition: "Los controles de ciberseguridad no están definidos o están parcialmente definidos.",
        explanation: "El diseño y la ejecución de los controles de ciberseguridad han sido situados y evaluados por el mismo propietario. Los controles de ciberseguridad no pueden corregir o mitigar parcialmente los riesgos identificados y la ejecución de estos son inconsistentes. La documentación es inexistente o está ha sido definida de forma incorrecta y/o incompleta."
    },
    {
        level: 2,
        label: "Developing",
        subLabel: "BASIC CYBER HYGIENE",
        color: "bg-lime-200 text-lime-900",
        headerColor: "#C5E1A5",
        textColor: "text-black",
        definition: "Algunos de los controles de ciberseguridad han sido desarrollados según los estándares y requisitos presentados.",
        explanation: "Existen algunos controles de ciberseguridad. Sin embargo, los objetivos y los requisitos de control no han sido definidos formalmente. Existe documentación limitada para una revisión estructurada o revisión de control."
    },
    {
        level: 3,
        label: "Defined",
        subLabel: "INTERMEDIATE CYBER HYGIENE",
        color: "bg-green-200 text-green-900",
        headerColor: "#8BC34A",
        textColor: "text-black",
        definition: "Los controles con requisito, imprescindible, crítico y alto según la estructura y el Marco han sido definidos e implementados para su mitigación o corrección.",
        explanation: "Los controles y requisitos con categorización según la estructura y formalización del Marco como imprescindibles, críticos y altos son mitigados o implementados para su corrección. Estos controles han sido evidenciados y auditados. La implementación de estos controles de ciberseguridad puede ser demostrado con evidencias."
    },
    {
        level: 4,
        label: "Managed",
        subLabel: "PROACTIVE",
        color: "bg-green-600 text-white",
        headerColor: "#558B2F",
        textColor: "text-white",
        definition: "Se mejora o se alcanza la mitigación o corrección de los riesgos levantados por los controles con requisito medio y bajo.",
        explanation: "El programa de ciberseguridad se centra en alcanzar el cumplimiento de todos los controles y requisitos cibernéticos, se mantiene una documentación y procedimientos actualizados, se monitoriza en base a riesgos cibernéticos los componentes críticos de la solución, se cuenta con procesos y mecanismos de disponibilidad y resiliencia de datos, a la vez que se mantienen auditorías de seguridad periódicas."
    },
    {
        level: 5,
        label: "Optimized",
        subLabel: "ADVANCED / PROGRESSIVE",
        color: "bg-green-800 text-white",
        headerColor: "#3B6021",
        textColor: "text-white",
        definition: "Todos los controles de ciberseguridad están sujetos a un continuo plan de mejora.",
        explanation: "El programa de ciberseguridad se centra en el cumplimiento, la eficacia y mejora continua de los controles de ciberseguridad. Los controles de ciberseguridad están integrados con el marco y prácticas de gestión. Se evalúa el desempeño de los controles de ciberseguridad periódicamente. Se hace uso de herramientas de automatización para velar por los controles cibernéticos en base al cumplimiento del Marco de Ciberseguridad."
    }
];
