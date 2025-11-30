

# **Análisis Exhaustivo de Interoperabilidad y Convergencia Normativa: NIST SP 800-53 Revisión 5 e ISO/IEC 27001:2022**

## **Resumen Ejecutivo**

El presente informe constituye un documento de referencia definitivo y exhaustivo diseñado para facilitar la compleción precisa de matrices de cumplimiento y la identificación de referencias cruzadas entre dos de los estándares de seguridad de la información más preeminentes a nivel global: el **NIST Special Publication 800-53 Revisión 5 (Security and Privacy Controls for Information Systems and Organizations)** y la norma **ISO/IEC 27001:2022 (Information Security, Cybersecurity and Privacy Protection)** junto con su guía de controles **ISO/IEC 27002:2022**.

La necesidad de este análisis surge en un contexto de transformación normativa sin precedentes. La transición de NIST SP 800-53 de la Revisión 4 a la 5 marcó un hito al eliminar el término "Federal" de su título, señalando una aplicabilidad universal y una integración profunda de la privacidad en el tejido de los controles de seguridad. Paralelamente, la publicación de ISO/IEC 27001:2022 redefinió la estructura de controles del Anexo A, consolidando 114 controles en 93 y reorganizándolos en cuatro temas lógicos (Organizacional, Personas, Físico y Tecnológico), alejándose de los 14 dominios tradicionales de la versión 2013\.

Este informe aborda la complejidad inherente a la armonización de un marco basado en catálogos prescriptivos y granulares (NIST) con un sistema de gestión basado en riesgos (ISO). A través de un desglose familia por familia, se proporcionan no solo las referencias directas necesarias para completar la documentación de cumplimiento adjunta, sino también una narrativa profunda sobre las brechas de implementación, las equivalencias funcionales y las estrategias para satisfacer los requisitos más estrictos de NIST utilizando la flexibilidad de ISO. Se integran hallazgos de múltiples fuentes autorizadas y análisis comparativos para garantizar que las referencias identificadas sean robustas ante auditorías de terceros.

---

## **1\. Fundamentos Teóricos y Evolución Normativa**

Para completar adecuadamente cualquier fichero de cruce de referencias (crosswalk), es imperativo comprender no solo "qué" control mapea con cuál, sino "por qué" y "cómo" operan los mecanismos subyacentes de cada estándar. La falta de comprensión de esta ontología conduce frecuentemente a deficiencias en las auditorías, donde se asume erróneamente que la mera existencia de una política ISO satisface la rigurosidad paramétrica de un control NIST.

### **1.1 La Filosofía de NIST SP 800-53 Revisión 5**

El marco del National Institute of Standards and Technology (NIST) SP 800-53 Rev 5 se fundamenta en un enfoque de "catálogo de controles". Su diseño es modular y altamente parametrizable. A diferencia de versiones anteriores, la Revisión 5 adopta un enfoque proactivo hacia la ingeniería de seguridad y privacidad, integrando estos conceptos desde el diseño.

Una característica crítica que distingue a NIST y que complica el mapeo directo es el uso de **Parámetros de Asignación Organizacional** (Organization-Defined Parameters \- ODP). Mientras que un control ISO puede requerir "contraseñas complejas", el control IA-5 de NIST requerirá que la organización defina explícitamente la longitud, complejidad, vida útil y número de generaciones a recordar. En el contexto de este informe, se destaca que el cumplimiento de NIST a menudo requiere una especificidad documental que ISO no demanda explícitamente en el texto de la norma, aunque sí en la práctica de una implementación robusta.1

La estructura de NIST se divide en 20 familias de controles. Cada control consta de una declaración base y, a menudo, múltiples "mejoras de control" (enhancements) que son obligatorias para niveles de impacto moderado o alto (Moderate/High Baselines). Este informe identificará qué controles ISO cubren la base y cuáles pueden extenderse para cubrir las mejoras.

### **1.2 La Reestructuración de ISO/IEC 27001:2022**

La norma ISO/IEC 27001:2022 representa la evolución del Sistema de Gestión de Seguridad de la Información (SGSI). Su núcleo (Cláusulas 4 a 10\) define el sistema de gestión —el "cerebro" que dirige la seguridad— mientras que el Anexo A proporciona los controles de referencia —el "músculo"— para mitigar riesgos.

El cambio más significativo para el propósito de este mapeo es la introducción de **Atributos** en ISO/IEC 27002:2022. Cada control ahora está etiquetado con atributos como "Tipo de Control" (Preventivo, Detectivo, Correctivo), "Propiedad de Seguridad" (Confidencialidad, Integridad, Disponibilidad), "Conceptos de Ciberseguridad" (Identificar, Proteger, Detectar, Responder, Recuperar) y "Capacidades Operativas". Estos atributos facilitan enormemente la alineación con marcos como NIST CSF y NIST 800-53, ya que permiten "vistas" filtradas de los controles ISO que se asemejan más a las familias funcionales de NIST.3

Además, la versión 2022 introdujo 11 nuevos controles que cierran brechas históricas con NIST, tales como **A.5.7 Inteligencia de Amenazas**, **A.5.23 Seguridad de la Información para el uso de Servicios en la Nube**, y **A.8.9 Gestión de la Configuración**. La identificación correcta de estas nuevas referencias es vital para demostrar conformidad con las familias SI (System Integrity), SA (System and Services Acquisition) y CM (Configuration Management) de NIST, áreas donde ISO 2013 era notoriamente débil.5

### **1.3 Metodología de Convergencia**

La metodología empleada en este informe para establecer las referencias correctas se basa en tres niveles de equivalencia, derivados del análisis de los documentos de mapeo de NIST (OLIR) y las mejores prácticas de la industria:

1. **Equivalencia Directa (Strong Mapping):** El control ISO satisface plenamente la intención y los requisitos técnicos del control NIST.  
2. **Equivalencia Funcional (Functional Mapping):** El control ISO aborda el riesgo subyacente, pero el mecanismo de implementación puede diferir o ser menos prescriptivo que el de NIST. Se requiere documentación adicional para cerrar la brecha.  
3. **Soporte Sistémico (Systemic Support):** El control NIST (especialmente los de gestión) se satisface no mediante un control del Anexo A, sino mediante una Cláusula del Sistema de Gestión (ej. Cláusula 9.1 para Monitorización).

A continuación, se presenta el análisis detallado familia por familia.

---

## **2\. Gobernanza y Gestión del Programa (Familias PM, CA, PL, RA)**

Las familias de controles de gestión de NIST establecen la infraestructura burocrática y de toma de decisiones del programa de seguridad. En ISO 27001, estos elementos rara vez se encuentran en el Anexo A; residen en el corazón del SGSI (Cláusulas 4-10). Un error común al completar ficheros de cumplimiento es intentar forzar un mapeo a controles "A.X" cuando la referencia correcta es una Cláusula "X.X".

### **2.1 Program Management (PM) \- Gestión del Programa**

La familia PM es única en NIST 800-53 ya que aplica a la organización en su conjunto y no a un sistema de información específico. Esto se alinea perfectamente con el alcance del SGSI en ISO 27001\.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Análisis de Convergencia y Brechas |
| :---- | :---- | :---- | :---- |
| **PM-1** | Plan y Programa de Seguridad de la Información | **Cláusulas 4.1, 4.2, 4.3, 4.4** (Contexto) **Cláusulas 5.1, 5.2** (Liderazgo) **Cláusula 6.1** (Planificación) **Cláusula 7.5** (Información Documentada) | PM-1 es el control "paraguas". Requiere que la organización tenga un plan documentado. En ISO, esto no es un solo documento, sino el conjunto de la documentación del SGSI. La referencia correcta debe citar las cláusulas que obligan a definir el alcance (4.3), la política (5.2) y los objetivos (6.2). **Insight:** No mapear a A.5.1 exclusivamente; A.5.1 es solo la política, PM-1 es el programa entero.6 |
| **PM-2** | Oficial Senior de Seguridad de la Información | **Cláusula 5.3** (Roles, responsabilidades y autoridades) **Cláusula 5.1** (Liderazgo y compromiso) | NIST requiere explícitamente un "SISO" o CISO. ISO requiere que la alta dirección asigne responsabilidades para asegurar que el SGSI conforme con los requisitos. Aunque ISO no nombra el cargo "CISO", la Cláusula 5.3 es el mecanismo vinculante.7 |
| **PM-3** | Recursos de Seguridad de la Información | **Cláusula 7.1** (Recursos) **Cláusula 5.1** (Liderazgo) | La Cláusula 7.1 de ISO es explícita: "La organización debe determinar y proporcionar los recursos necesarios". Esto cubre financiación, personal e infraestructura, satisfaciendo directamente PM-3. |
| **PM-4** | Plan de Acción y Hitos (POA\&M) | **Cláusula 10.1** (Mejora continua) **Cláusula 10.2** (No conformidad y acción correctiva) | El POA\&M es un artefacto federal específico para rastrear deficiencias. En el mundo ISO, esto se gestiona mediante el proceso de Acción Correctiva (10.2). Las "Acciones" derivadas de auditorías o evaluaciones de riesgo constituyen el equivalente funcional del POA\&M.6 |
| **PM-5** | Inventario del Sistema de Información | **A.5.9** (Inventario de información y otros activos asociados) **Cláusula 6.1.2** (Identificación de activos para riesgos) | Aunque PM-5 es un inventario a nivel de programa, se satisface mediante el control A.5.9. Es vital notar que ISO 2022 amplió A.5.9 para incluir "otros activos asociados", alineándose mejor con la visión de sistema de NIST.8 |
| **PM-9** | Estrategia de Gestión de Riesgos | **Cláusula 6.1.1** (Acciones para tratar riesgos) **Cláusula 8.2** (Evaluación de riesgos) | NIST PM-9 exige una estrategia holística. ISO integra esto en la fase de Planificación (6.1). La definición de criterios de aceptación de riesgo en 6.1.2 es el núcleo de esta estrategia.6 |
| **PM-11** | Análisis de Impacto en la Misión/Negocio | **A.5.30** (Preparación de las TIC para la continuidad del negocio) **Cláusula 8.2** (Evaluación de riesgos) | El BIA (Business Impact Analysis) es fundamental en NIST. En ISO, el BIA es una herramienta implícita necesaria para dimensionar los controles de continuidad en A.5.30, aunque no siempre se explicita como un "control" separado en el Anexo A, es parte integral de la gestión de continuidad.6 |

Insight de Segundo Orden:  
La familia PM revela la diferencia fundamental de "propiedad". En NIST, el programa es propiedad de un oficial designado. En ISO, el sistema de gestión es responsabilidad de la "Alta Dirección". Al completar la documentación, las evidencias para PM no deben ser configuraciones técnicas, sino actas de comités de dirección, presupuestos aprobados y descripciones de puestos de trabajo firmadas.

### **2.2 Security Assessment and Authorization (CA) \- Evaluación y Autorización**

Esta familia trata sobre la validación de que los controles funcionan y la autorización formal para operar el sistema.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Análisis de Convergencia y Brechas |
| :---- | :---- | :---- | :---- |
| **CA-1** | Políticas y Procedimientos de CA | **A.5.1** (Políticas) **A.5.37** (Procedimientos operativos) | Base documental estándar. |
| **CA-2** | Evaluación de Controles | **Cláusula 9.2** (Auditoría Interna) **A.5.35** (Revisión independiente) **A.8.29** (Pruebas de aceptación en desarrollo) | CA-2 requiere probar los controles periódicamente. ISO satisface esto mediante el programa de auditoría interna (9.2). Sin embargo, NIST a menudo requiere una evaluación independiente específica para la autorización inicial, lo cual se alinea con A.5.35.9 |
| **CA-3** | Intercambio de Información | **A.5.14** (Transferencia de información) **A.8.21** (Seguridad de servicios de red) | Se refiere a Acuerdos de Interconexión (ISA/MOU). ISO A.5.14 exige reglas, procedimientos y acuerdos para la transferencia, cubriendo los requisitos de CA-3.9 |
| **CA-6** | Autorización | **Cláusula 9.3** (Revisión por la Dirección) **Cláusula 5.1** (Liderazgo) | NIST formaliza esto como un documento "Authority to Operate" (ATO). En ISO, no existe un ATO per se, pero la "Revisión por la Dirección" (9.3) donde se aceptan los riesgos residuales y se aprueba la operación del SGSI es el equivalente funcional de gobernanza más cercano.9 |
| **CA-7** | Monitorización Continua | **Cláusula 9.1** (Seguimiento, medición, análisis) **A.8.16** (Actividades de monitorización) | El concepto de "Continuous Monitoring" de NIST es crítico. ISO lo aborda en 9.1 para el desempeño del sistema y en A.8.16 para la monitorización técnica de anomalías. La combinación de ambos satisface CA-7.9 |

### **2.3 Risk Assessment (RA) \- Evaluación de Riesgos**

NIST separa la evaluación de riesgos (RA) de la gestión del programa. ISO lo integra completamente en el ciclo PHVA.

* **RA-3 (Risk Assessment):** Mapea directamente a **ISO Cláusula 6.1.2** (Evaluación de riesgos de seguridad de la información) y **Cláusula 8.2** (Ejecución de la evaluación). La metodología es compatible, aunque NIST SP 800-30 proporciona una guía más detallada sobre el proceso que ISO 27001, que es agnóstico a la metodología.  
* **RA-5 (Vulnerability Monitoring and Scanning):** Mapea a **ISO A.8.8** (Gestión de vulnerabilidades técnicas). Es crucial notar que NIST RA-5 requiere escaneos automatizados con frecuencias definidas (ej. semanal/mensual), mientras que ISO A.8.8 es más general sobre la obtención de información y remediación. Para cumplir NIST con ISO, la política vinculada a A.8.8 debe especificar explícitamente la frecuencia de escaneo.6

---

## **3\. Controles Técnicos de Defensa (Familias AC, IA, SC, SI)**

Este dominio representa el núcleo operativo de la ciberseguridad. Aquí, la convergencia es alta, pero la granularidad de NIST suele exceder la de ISO. La versión 2022 de ISO ha mejorado significativamente esta alineación al agrupar controles técnicos en la Cláusula 8\.

### **3.1 Access Control (AC) \- Control de Acceso**

La familia AC es extensa y prescriptiva. ISO 27001:2022 consolidó múltiples controles de la versión 2013 en el control **A.5.15** y **A.5.16**.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Detalles de Implementación y Mapeo |
| :---- | :---- | :---- | :---- |
| **AC-1** | Políticas y Procedimientos de AC | **A.5.15** (Control de acceso) **Cláusula 5.2** (Política) | A.5.15 exige explícitamente una política de control de acceso basada en requisitos de negocio. Esta es la referencia primaria.7 |
| **AC-2** | Gestión de Cuentas | **A.5.16** (Gestión de identidades) **A.5.18** (Derechos de acceso) **A.8.2** (Derechos de acceso privilegiado) | NIST AC-2 cubre el ciclo de vida completo. ISO A.5.16 es el control "contenedor" para el ciclo de vida de la identidad. A.5.18 maneja el aprovisionamiento. A.8.2 es crítico para las mejoras de NIST sobre usuarios privilegiados. **Nota:** NIST requiere eliminación automática de cuentas temporales; ISO lo deja a procedimiento.9 |
| **AC-3** | Cumplimiento del Acceso (Enforcement) | **A.5.15** (Control de acceso) **A.8.3** (Restricción de acceso a la información) | Mientras A.5.15 es la regla, A.8.3 es la barrera técnica. Para sistemas que requieren control discrecional (DAC) o basado en roles (RBAC), A.8.3 es la referencia operativa.9 |
| **AC-4** | Flujo de Información | **A.5.14** (Transferencia de información) **A.8.22** (Segregación de redes) | NIST se centra en el flujo de datos entre dominios de seguridad. ISO A.8.22 (Segregación) y A.5.14 (Transferencia) cubren esto. Para flujos de datos específicos (ej. guardas de seguridad), ISO es menos prescriptivo.9 |
| **AC-5** | Separación de Funciones | **A.5.3** (Segregación de funciones) | Mapeo directo 1:1. Ambos estándares buscan reducir el riesgo de fraude o error no detectado mediante la división de tareas críticas.9 |
| **AC-6** | Menor Privilegio | **A.5.15** (Control de Acceso) **A.8.2** (Derechos de acceso privilegiado) | El principio de "Least Privilege" no es un control único en ISO, sino un principio de diseño en A.5.15 y una restricción explícita en A.8.2 para administradores.9 |
| **AC-17** | Acceso Remoto | **A.6.7** (Trabajo remoto) **A.8.20** (Seguridad de redes) **A.8.24** (Criptografía) | ISO A.6.7 establece las políticas para teletrabajo. A.8.20 y A.8.24 proporcionan las capas técnicas (VPN, TLS) necesarias para satisfacer la encriptación y control de AC-17.9 |
| **AC-18** | Acceso Inalámbrico | **A.8.21** (Seguridad de servicios de red) **A.8.20** (Seguridad de redes) | ISO trata el Wi-Fi como cualquier otro servicio de red que debe ser asegurado. |
| **AC-19** | Control de Acceso para Dispositivos Móviles | **A.8.1** (Dispositivos de usuario final) | A.8.1 cubre la seguridad de portátiles, móviles y tabletas, incluyendo BYOD, alineándose con AC-19. |

Insight de Integración:  
La consolidación de ISO en 2022 simplifica el mapeo pero oscurece la granularidad. Al completar el fichero, para AC-2, se debe citar A.5.16 pero el texto explicativo debe detallar los procesos de "Alta, Baja y Modificación" que en ISO 2013 estaban separados (A.9.2.1, A.9.2.2, etc.).

### **3.2 Identification and Authentication (IA) \- Identificación y Autenticación**

La autenticación multifactor (MFA) es un requisito casi universal en NIST Rev 5 para accesos no locales.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Detalles de Implementación y Mapeo |
| :---- | :---- | :---- | :---- |
| **IA-2** | Identificación y Autenticación (Usuarios Organizacionales) | **A.5.16** (Gestión de identidades) **A.5.17** (Información de autenticación) **A.8.5** (Autenticación segura) | ISO A.8.5 es el control técnico clave aquí. Exige que los sistemas validen la identidad. Para cumplir con las mejoras de MFA de NIST, la implementación de A.8.5 debe incluir explícitamente factores múltiples.12 |
| **IA-4** | Gestión de Identificadores | **A.5.16** (Gestión de identidades) | Exigencia de IDs únicos (UIDs). A.5.16 cubre la asignación única de identidades. |
| **IA-5** | Gestión de Autenticadores | **A.5.17** (Información de autenticación) | Gestión de contraseñas, tokens, certificados. A.5.17 obliga a los usuarios a mantener secretos sus datos de autenticación y establece reglas de calidad (complejidad, cambio).12 |
| **IA-8** | I\&A (Usuarios No Organizacionales) | **A.5.16** (Gestión de identidades) **A.8.5** (Autenticación segura) | ISO aplica A.5.16 universalmente a "todos los usuarios", cubriendo tanto a empleados como a terceros, satisfaciendo así IA-8.12 |

### **3.3 System and Communications Protection (SC) \- Protección de Sistemas y Comunicaciones**

Esta familia se centra en la arquitectura de seguridad y la criptografía.

* **SC-7 (Boundary Protection):** Mapea a **ISO A.8.20** (Seguridad de redes) y **A.8.22** (Segregación de redes). A.8.22 es crucial aquí, ya que exige separar grupos de servicios, usuarios y sistemas de información en redes distintas (VLANs, DMZ), lo cual es la esencia de la protección de fronteras de NIST.13  
* **SC-8 (Transmission Confidentiality):** Mapea a **ISO A.8.24** (Uso de criptografía) y **A.5.14** (Transferencia de información). NIST separa "confidencialidad" (SC-8) de "gestión de claves" (SC-12). ISO A.8.24 cubre ambos aspectos bajo el paraguas de la criptografía.  
* **SC-12 / SC-13 (Cryptography):** Ambos mapean a **A.8.24**. Es vital documentar que la política de criptografía de ISO incluye la gestión del ciclo de vida de las claves (generación, almacenamiento, destrucción) para satisfacer SC-12.13  
* **SC-28 (Protection of Information at Rest):** Mapea a **A.8.24** (Criptografía) y **A.8.1** (Dispositivos de usuario \- para cifrado de disco). ISO 2022 es más explícito sobre la protección de datos en todos los estados.

### **3.4 System and Information Integrity (SI) \- Integridad del Sistema**

La familia SI se beneficia enormemente de los nuevos controles ISO 2022\.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Análisis de Nuevos Controles ISO |
| :---- | :---- | :---- | :---- |
| **SI-2** | Remediación de Fallas (Patching) | **A.8.8** (Gestión de vulnerabilidades técnicas) **A.8.19** (Instalación de software) | A.8.8 es el mapeo directo para la gestión de parches y vulnerabilidades. A.8.19 controla qué software se instala, previniendo vulnerabilidades por software no autorizado.14 |
| **SI-3** | Protección contra Código Malicioso | **A.8.7** (Protección contra malware) | Mapeo directo. A.8.7 exige controles de detección, prevención y recuperación ante malware, así como concienciación.15 |
| **SI-4** | Monitorización del Sistema | **A.8.16** (Actividades de monitorización) **A.8.20** (Seguridad de redes) | A.8.16 es la referencia principal para monitorizar sistemas en busca de comportamiento anómalo (IDS/IPS, análisis de logs).14 |
| **SI-5** | Alertas y Avisos de Seguridad | **A.5.7** (Inteligencia de amenazas) | **Nuevo en 2022\.** Anteriormente, esto se mapeaba débilmente a "contacto con grupos de interés". Ahora, A.5.7 exige explícitamente recopilar y analizar información sobre amenazas, alineándose perfectamente con la recepción de alertas del US-CERT o vendors que exige SI-5.6 |

---

## **4\. Protección de Activos y Configuración (Familias CM, MA, MP, PE)**

### **4.1 Configuration Management (CM) \- Gestión de Configuración**

Históricamente, ISO 27001 no tenía un dominio dedicado a "Configuración", dispersando estos requisitos. ISO 27001:2022 introduce el control **A.8.9**, resolviendo este problema estructural.

| Control NIST SP 800-53 Rev 5 | Nombre del Control | Referencia ISO/IEC 27001:2022 (Correcta) | Importancia del Nuevo Control A.8.9 |
| :---- | :---- | :---- | :---- |
| **CM-1** | Políticas y Procedimientos de CM | **A.5.1** (Política) **A.8.9** (Gestión de configuración) | La política debe dictar el uso de líneas base seguras (baselines). |
| **CM-2** | Configuración Base (Baseline) | **A.8.9** (Gestión de configuración) | A.8.9 requiere explícitamente definir, documentar, implementar, monitorizar y revisar las configuraciones de hardware, software y redes. Esto cubre el concepto de "Gold Image" o "Hardening" de NIST.9 |
| **CM-3** | Control de Cambios de Configuración | **A.8.32** (Gestión de cambios) | Mapeo directo. A.8.32 exige que los cambios en las instalaciones de procesamiento de información sean controlados (aprobados, probados, documentados).9 |
| **CM-6** | Ajustes de Configuración (Least Functionality) | **A.8.9** (Gestión de configuración) **A.8.19** (Instalación de software) | A.8.9 cubre los ajustes técnicos. A.8.19 ayuda a aplicar el principio de "mínima funcionalidad" al restringir la instalación de software innecesario.9 |
| **CM-8** | Inventario de Componentes | **A.5.9** (Inventario de activos) | ISO A.5.9 exige inventariar la información y los activos asociados, cubriendo hardware y software.8 |

### **4.2 Media Protection (MP) y Maintenance (MA)**

* **MP-1 a MP-4 (Gestión de Medios):** Mapean consistentemente a **A.7.10** (Medios de almacenamiento). Este control ISO cubre la gestión, transporte y protección física de medios extraíbles y cintas de backup.  
* **MP-6 (Sanitización de Medios):** Mapea a **A.8.10** (Eliminación de información) y **A.7.14** (Eliminación segura o reutilización de equipos). A.8.10 es un nuevo control de 2022 que se centra específicamente en el borrado lógico seguro, mientras que A.7.14 cubre la destrucción física. Ambos son necesarios para cubrir MP-6.  
* **MA-1 a MA-6 (Mantenimiento):** Mapean a **A.7.13** (Mantenimiento de equipos). ISO exige que el equipo se mantenga correctamente para asegurar su disponibilidad e integridad. NIST MA-2 (Mantenimiento Controlado) añade requisitos sobre herramientas de mantenimiento y personal, que en ISO se cubren mediante controles de acceso generales (A.5.15) y gestión de proveedores (A.5.19) si el mantenimiento es externo.

### **4.3 Physical and Environmental Protection (PE) \- Protección Física**

La Cláusula 7 de ISO 27001:2022 (Controles Físicos) proporciona una cobertura casi completa para la familia PE de NIST.

* **PE-2/PE-3 (Acceso Físico):** Mapean a **A.7.2** (Entrada física).  
* **PE-6 (Monitorización Física):** Mapea a **A.7.4** (Monitorización de seguridad física). ISO requiere vigilancia continua de áreas seguras.13  
* **PE-10/PE-14 (Controles Ambientales):** Mapean a **A.7.11** (Servicios de soporte \- Cabling, Power, HVAC) y **A.7.12** (Seguridad del cableado).

---

## **5\. Operaciones y Resiliencia (Familias CP, IR, SR)**

### **5.1 Incident Response (IR) \- Respuesta a Incidentes**

La estructura de ISO para incidentes es robusta y se alinea bien con NIST, centralizada en la sub-cláusula 5 (Organizacional) controles A.5.24 a A.5.28.

| Control NIST | Nombre | Referencia ISO 27001:2022 | Análisis |
| :---- | :---- | :---- | :---- |
| **IR-1/IR-8** | Plan de Respuesta a Incidentes | **A.5.24** (Planificación y preparación de gestión de incidentes) | ISO exige definir roles, responsabilidades y procedimientos predefinidos. |
| **IR-4** | Manejo de Incidentes | **A.5.26** (Respuesta a incidentes de seguridad) | Mapeo directo a la ejecución de la respuesta.6 |
| **IR-5** | Monitorización de Incidentes | **A.5.25** (Evaluación y decisión sobre eventos) | Proceso de triaje y análisis. |
| **IR-6** | Reporte de Incidentes | **A.6.8** (Reporte de eventos de seguridad) | Exigencia de que empleados y contratistas reporten eventos rápidamente.6 |
| **IR-7** | Asistencia en la Respuesta | **A.5.24** (Planificación) | Incluye la definición de contactos externos y soporte especializado. |

### **5.2 Contingency Planning (CP) \- Planificación de Contingencia**

NIST utiliza el término "Contingency Planning" (centrado en sistemas TI), mientras que ISO usa "Business Continuity" (centrado en el negocio) y "ICT Readiness" (centrado en TI).

* **CP-2 (Contingency Plan):** Mapea a **A.5.29** (Seguridad de la información durante la interrupción) y **A.5.30** (Preparación de las TIC para la continuidad del negocio). El control A.5.30, nuevo en 2022, es vital porque se centra específicamente en la recuperación tecnológica (Disaster Recovery), alineándose perfectamente con el enfoque de sistema de CP-2, separándose de la continuidad de negocio general.6  
* **CP-9 (System Backup):** Mapea a **A.8.13** (Copias de seguridad). ISO requiere definir la frecuencia y protección de las copias basada en requisitos de RPO/RTO.  
* **CP-10 (Recovery and Reconstitution):** Mapea a **A.5.30** (Preparación TIC) y **A.8.13**.

### **5.3 Supply Chain Risk Management (SR) \- Gestión de Riesgos de Cadena de Suministro**

La familia SR ha cobrado importancia crítica. ISO aborda esto en la relación con proveedores (A.5.19 \- A.5.23).

* **SR-2 (Supply Chain Risk Management Plan):** Mapea a **A.5.19** (Seguridad de la información en las relaciones con proveedores). ISO exige definir requisitos de seguridad para proveedores.  
* **SR-3/SR-5 (Supply Chain Controls/Assessment):** Mapean a **A.5.21** (Gestión de la seguridad de la información en la cadena de suministro) y **A.5.22** (Monitorización, revisión y gestión de cambios de servicios de proveedores).  
* **Servicios en la Nube:** Para cualquier control SR relacionado con la nube, el nuevo control **A.5.23** (Seguridad de la información para el uso de servicios en la nube) es la referencia obligatoria, estableciendo requisitos específicos para adquisición, uso y salida de servicios cloud.4

---

## **6\. Capital Humano y Privacidad (Familias AT, PS, PT)**

### **6.1 Awareness and Training (AT) \- Concienciación y Formación**

* **AT-2 (Security Awareness):** Mapea a **A.6.3** (Concienciación, educación y formación). ISO requiere que todo el personal sea consciente de la política y las implicaciones de no cumplirla.11  
* **AT-3 (Role-Based Training):** También mapea a **A.6.3**, que abarca no solo concienciación general sino "educación y formación" específica para el puesto.

### **6.2 Personnel Security (PS) \- Seguridad del Personal**

* **PS-3 (Personnel Screening):** Mapea a **A.6.1** (Cribado/Screening). ISO exige verificación de antecedentes antes del empleo.  
* **PS-4 (Personnel Termination):** Mapea a **A.6.5** (Responsabilidades tras la terminación o cambio de empleo).

### **6.3 PII Processing and Transparency (PT) \- Privacidad**

NIST Rev 5 integró controles de privacidad (antiguo Apéndice J) en el cuerpo principal. ISO 27001 por sí sola es un estándar de *seguridad*. Para una cobertura completa de la familia PT, una organización debería implementar **ISO/IEC 27701** (Privacidad). Sin embargo, dentro de 27001:2022:

* **PT-1 (Privacy Policy):** Mapea a **A.5.34** (Privacidad y protección de PII). Este control exige el cumplimiento con requisitos legales y regulatorios aplicables a la PII. Es el "gancho" dentro de ISO 27001 para la privacidad.8

---

## **7\. Conclusiones Estratégicas y Hoja de Ruta de Implementación**

La tarea de "completar el fichero adjunto" con referencias correctas es más que un ejercicio administrativo; es una declaración de la postura de seguridad de la organización. Del análisis profundo realizado en este informe, se derivan tres conclusiones estratégicas fundamentales para la ejecución del mapeo:

1. Priorización de los Nuevos Controles 2022:  
   Cualquier mapeo que ignore los 11 nuevos controles de ISO 27001:2022 será deficiente frente a NIST Rev 5\. Es imperativo utilizar:  
   * **A.5.7 (Inteligencia de Amenazas)** para satisfacer SI-5.  
   * **A.5.23 (Seguridad Cloud)** para satisfacer la familia SA/SR en contextos de nube.  
   * **A.5.30 (Preparación TIC)** para satisfacer CP-2 y CP-4.  
   * **A.8.9 (Gestión de Configuración)** para satisfacer toda la familia CM.  
   * **A.8.10 (Borrado de Información)** para satisfacer MP-6 y SI-12.  
   * **A.8.12 (Prevención de Fuga de Datos)** para satisfacer controles de flujo de información (AC-4) y protección de datos.  
2. El Puente del "Sistema de Gestión":  
   Para las familias PM (Program Management), CA (Security Assessment) y RA (Risk Assessment), no busque forzadamente equivalencias en el Anexo A. Las referencias correctas y robustas residen en las Cláusulas mandatorias (4, 5, 6, 7, 9, 10). Citar el Anexo A para la gobernanza estratégica (ej. citar A.5.1 para PM-1) es un error técnico que debilita la matriz de cumplimiento. Utilice las referencias a Cláusulas proporcionadas en las tablas de la Sección 2\.  
3. Documentación de "Delta" de Implementación:  
   Al completar el fichero, donde NIST sea más prescriptivo (ej. IA-5 contraseñas, RA-5 frecuencia de escaneo), la referencia a ISO debe ir acompañada de una nota o enlace a la "política interna" que añade la especificidad faltante. ISO proporciona el "contenedor" (el requisito de tener una política), pero NIST define el "contenido" (los parámetros exactos).

Siguiendo esta guía, las referencias insertadas en el fichero adjunto no solo cumplirán con los requisitos de la auditoría, sino que reflejarán una arquitectura de seguridad integrada, moderna y resiliente, capaz de satisfacer tanto la agilidad de los negocios internacionales (ISO) como el rigor de los estándares federales (NIST).

#### **Obras citadas**

1. National Online Informative References Program OLIR, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=155](https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=155)  
2. SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations | CSRC \- National Institute of Standards and Technology, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)  
3. ISO/IEC-27001:2022-to-Cybersecurity-Framework-v2.0 \- National Online Informative References Program | CSRC, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=154](https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=154)  
4. ISO 27001 Controls Explained: A Guide to Annex A (Updated 2024\) | Secureframe, fecha de acceso: noviembre 30, 2025, [https://secureframe.com/hub/iso-27001/controls](https://secureframe.com/hub/iso-27001/controls)  
5. SD Elements Release Notes, fecha de acceso: noviembre 30, 2025, [https://docs.sdelements.com/release/2024.2/guide/docs/releasenotes.html](https://docs.sdelements.com/release/2024.2/guide/docs/releasenotes.html)  
6. Map Iso 27001-2022 \- Nist 800-53 | PDF \- Scribd, fecha de acceso: noviembre 30, 2025, [https://www.scribd.com/document/777588836/MAP-ISO-27001-2022-NIST-800-53](https://www.scribd.com/document/777588836/MAP-ISO-27001-2022-NIST-800-53)  
7. NIST 800-53 Rev. 5 Crosswalk \- N.C. Department of Information Technology, fecha de acceso: noviembre 30, 2025, [https://it.nc.gov/documents/statewide-policies/nist-800-53-security-controls-crosswalk/open](https://it.nc.gov/documents/statewide-policies/nist-800-53-security-controls-crosswalk/open)  
8. CSF to SP 800-53r5 \- NIST Computer Security Resource Center, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.gov/files/pubs/sp/800/53/r5/upd1/final/docs/csf-pf-to-sp800-53r5-mappings.xlsx](https://csrc.nist.gov/files/pubs/sp/800/53/r5/upd1/final/docs/csf-pf-to-sp800-53r5-mappings.xlsx)  
9. ISO 27001 to FedRAMP Moderate Rev5 Control Mapping \- Esri, fecha de acceso: noviembre 30, 2025, [https://content.esri.com/resources/enterprisegis/mapping\_iso27001\_fedramp\_moderate\_rev5.pdf](https://content.esri.com/resources/enterprisegis/mapping_iso27001_fedramp_moderate_rev5.pdf)  
10. What you need to know about NIST 800-53, least privilege, and PAM, fecha de acceso: noviembre 30, 2025, [https://delinea.com/blog/nist-800-53-security-privacy-privileged-access](https://delinea.com/blog/nist-800-53-security-privacy-privileged-access)  
11. 800-53 Rev. 5 to ISO/IEC 27001 mapping \- CSRC, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.rip/csrc/media/publications/sp/800-53/rev-5/final/documents/sp800-53r5-to-iso-27001-mapping.docx](https://csrc.nist.rip/csrc/media/publications/sp/800-53/rev-5/final/documents/sp800-53r5-to-iso-27001-mapping.docx)  
12. Mapping: Rev. 5 to ISO/IEC 27001:2022 (docx) \- CSRC, fecha de acceso: noviembre 30, 2025, [https://csrc.nist.rip/files/pubs/sp/800/53/r5/upd1/final/docs/sp800-53r5-to-iso-27001-mapping.docx](https://csrc.nist.rip/files/pubs/sp/800/53/r5/upd1/final/docs/sp800-53r5-to-iso-27001-mapping.docx)  
13. IT Asset Management \- NCCoE \- National Institute of Standards and Technology, fecha de acceso: noviembre 30, 2025, [https://www.nccoe.nist.gov/publication/1800-5/VolB/index.html](https://www.nccoe.nist.gov/publication/1800-5/VolB/index.html)  
14. Compliance Management \- Eramba, fecha de acceso: noviembre 30, 2025, [https://www.eramba.org/learning/courses/9/episodes/205](https://www.eramba.org/learning/courses/9/episodes/205)  
15. The NIST Cybersecurity Framework (CSF) 2.0, fecha de acceso: noviembre 30, 2025, [https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)  
16. Appendix A Mapping to Cybersecurity Framework Core — NIST SP 1800-13 documentation, fecha de acceso: noviembre 30, 2025, [https://www.nccoe.nist.gov/publication/1800-13/VolB/vol-b-appendix.html](https://www.nccoe.nist.gov/publication/1800-13/VolB/vol-b-appendix.html)