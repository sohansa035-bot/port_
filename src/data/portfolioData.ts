import { Project, ArchitectureNode, ExperienceItem, LeadershipItem } from '../types';

export const PERSONAL_INFO = {
  name: 'SOHAN SAHA',
  title: 'AI/ML STUDENT',
  roleDescriptor: 'INTELLIGENT SYSTEMS BUILDER',
  summary:
    'Building AI-powered products that turn ideas into intelligent systems. Focussed on autonomous edge agents, real-time computer vision inference, and fault-tolerant reinforcement architectures.',
  university: 'REVA University, Bangalore',
  degree: 'B.Tech — Artificial Intelligence & Machine Learning',
  timeline: '2025 – 2029 // Active Candidate',
  location: 'Bangalore Urban, Karnataka',
  coordinates: {
    lat: '13.1132° N',
    lon: '77.6346° E',
    node: 'NODE.00 // BLR',
    timezone: 'UTC+05:30 (IST)'
  },
  email: 'sohansa035@gmail.com',
  github: 'https://github.com/sohansa035-bot',
  githubHandle: 'github.com/sohansa035-bot',
  dossierVersion: 'V2.09',
  sysStatus: 'SYS.STATUS: OPERATIONAL'
};

export const DOMAINS_OF_INQUIRY = [
  { name: 'Artificial Intelligence', color: 'peach' },
  { name: 'Machine Learning', color: 'cyan' },
  { name: 'Computer Vision', color: 'amber' },
  { name: 'IoT & Embedded Microcontrollers', color: 'cyan' },
  { name: 'Autonomous Systems', color: 'peach' },
  { name: 'Defense Technology', color: 'neutral' },
  { name: 'Robotics', color: 'amber' },
  { name: 'Edge Computing', color: 'cyan' }
];

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'ai-ml',
    nodeNumber: 'NODE // 01',
    title: 'AI & MACHINE LEARNING',
    description:
      'Predictive modeling, neural representations, and reinforcement learning pipelines engineered for adaptive decision spaces.',
    status: 'ACTIVE',
    colorScheme: 'peach',
    tags: [
      { name: 'PyTorch', role: 'Framework' },
      { name: 'Hugging Face', role: 'Transformers' },
      { name: 'NumPy', role: 'Tensors' }
    ],
    details: {
      algorithmicFocus:
        'State-space exploration, policy gradient updates, model quantization',
      throughputTarget: '< 20ms per inference batch',
      primaryStack: ['PyTorch', 'Transformers', 'NumPy', 'Scikit-Learn']
    }
  },
  {
    id: 'computer-vision',
    nodeNumber: 'NODE // 02',
    title: 'COMPUTER VISION',
    description:
      'Real-time visual feature detection, boundary bounding, multi-class object localization, and low-latency video streaming pipelines.',
    status: 'ACTIVE',
    colorScheme: 'cyan',
    tags: [
      { name: 'YOLOv8', role: 'Object Detection' },
      { name: 'OpenCV', role: 'Image Processing' },
      { name: 'TorchVision', role: 'Data Augmentation' }
    ],
    details: {
      algorithmicFocus:
        'Frame differentiation, anchor-free bounding boxes, non-max suppression',
      throughputTarget: '30+ FPS @ 640x480 resolution',
      primaryStack: ['Ultralytics YOLOv8', 'OpenCV 4.x', 'TorchVision']
    }
  },
  {
    id: 'ai-apps',
    nodeNumber: 'NODE // 03',
    title: 'AI-POWERED APPLICATIONS',
    description:
      'Interactive interfaces and tool integration loops interfacing with generative backends, model schemas, and rapid human-agent workflows.',
    status: 'ACTIVE',
    colorScheme: 'peach',
    tags: [
      { name: 'FastAPI', role: 'Async Server' },
      { name: 'Gradio', role: 'UI Engine' },
      { name: 'Lyzr', role: 'Agent Automation' }
    ],
    details: {
      algorithmicFocus:
        'Streaming token generation, prompt sanitization, structured JSON schema response contracts',
      throughputTarget: 'Sub-second API response round-trips',
      primaryStack: ['FastAPI', 'Gradio', 'Lyzr Agents', 'Pydantic']
    }
  },
  {
    id: 'autonomous-systems',
    nodeNumber: 'NODE // 04',
    title: 'AUTONOMOUS SYSTEMS',
    description:
      'Self-governing feedback loops, autonomous rovers, and agentic policy controllers running closed sensory-response paths.',
    status: 'ACTIVE',
    colorScheme: 'cyan',
    tags: [
      { name: 'OpenEnv API', role: 'Sim Interface' },
      { name: 'State Machines', role: 'Deterministic Logic' },
      { name: 'RL Agents', role: 'Policy Engine' }
    ],
    details: {
      algorithmicFocus:
        'Markov Decision Processes, state-space penalty avoidance, reward shaping',
      throughputTarget: 'Autonomous remediation in < 3 action steps',
      primaryStack: [
        'OpenEnv API',
        'Gymnasium',
        'PyTorch RL',
        'Finite State Automata'
      ]
    }
  },
  {
    id: 'iot',
    nodeNumber: 'NODE // 05',
    title: 'INTERNET OF THINGS (IoT)',
    description:
      'Microcontroller telemetry, bi-directional socket relays, sensor aggregation, and real-time physical device monitoring.',
    status: 'ACTIVE',
    colorScheme: 'peach',
    tags: [
      { name: 'ESP32', role: 'Microcontroller' },
      { name: 'WebSockets', role: 'Bidirectional Bus' },
      { name: 'C/C++', role: 'Firmware' }
    ],
    details: {
      algorithmicFocus:
        'Hardware PWM control, ADC sensor calibration, non-blocking asynchronous WiFi socket polling',
      throughputTarget: '10ms latency ping across local LAN',
      primaryStack: [
        'ESP-IDF / Arduino C++',
        'ESP32-WROOM-32',
        'FreeRTOS',
        'WebSockets'
      ]
    }
  },
  {
    id: 'edge-computing',
    nodeNumber: 'NODE // 06',
    title: 'EDGE COMPUTING',
    description:
      'Deploying quantized models directly on edge nodes to achieve ultra-low latency inference without continuous cloud dependence.',
    status: 'ACTIVE',
    colorScheme: 'cyan',
    tags: [
      { name: 'Quantization', role: 'INT8 / FP16' },
      { name: 'Embedded Edge', role: 'On-device Compute' },
      { name: 'Docker', role: 'Containerization' }
    ],
    details: {
      algorithmicFocus:
        'Post-training INT8 quantization, memory footprint reduction, local hardware tensor execution',
      throughputTarget: 'Zero cloud reliance for core mission loop',
      primaryStack: [
        'ONNX Runtime',
        'TensorRT',
        'Docker Compose',
        'Alpine Linux'
      ]
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'yugen',
    index: 'PROJECT // 01',
    title: 'YUGĒN',
    subtitle: 'Autonomous AI Surveillance Rover',
    badge: 'AUTONOMOUS EDGE HARDWARE',
    description:
      'End-to-end distributed architecture for real-time surveillance, threat detection, and environmental mapping. Interlinks an ESP32 hardware bridge with a remote YOLOv8 inference server over high-concurrency WebSockets.',
    pipeline: [
      'CAMERA',
      'VISION RELAY',
      'YOLOv8 DETECTION',
      'AUTONOMOUS DECISION'
    ],
    tags: ['ESP32', 'YOLOv8', 'Computer Vision', 'WebSockets'],
    telemetryType: 'rover',
    telemetryData: {
      fps: '28.4 FPS @ 640x480',
      latency: '34.2 ms',
      networkBus: 'ESP32-WROOM-32 // WS-TLS',
      confidence: 0.942,
      targetStatus: 'TARGET_ACQUIRED',
      motorPwm: '85%',
      heading: '214° SW'
    },
    architectureSummary:
      'ESP32 Camera Sensor → WebSocket Stream → Remote Python Worker → YOLOv8 Realtime Inference → Low-latency Directional Feedback',
    fullDossier: {
      systemContext:
        'YUGĒN was conceptualized as an autonomous reconnaissance rover built to operate in environments where human presence is hazardous or inefficient. It decouples high-voltage motor control from heavy neural tensor execution by splitting duties between an on-board dual-core ESP32 chip and a workstation inference node.',
      keyModules: [
        {
          name: 'Hardware Sensory Layer',
          role: 'ESP32-WROOM-32 with OV2640 optical lens',
          spec:
            'MJPEG streaming over WebSocket with dual PWM H-bridge motor governance'
        },
        {
          name: 'Inference Engine',
          role: 'Ultralytics YOLOv8n fine-tuned model',
          spec:
            'Anchor-free bounding boxes with 80-class object detection and threat confidence thresholds'
        },
        {
          name: 'Command Loop',
          role: 'Asynchronous bidirectional socket coordinator',
          spec:
            '< 40ms end-to-end loop latency from photon capture to motor corrective adjustment'
        }
      ],
      telemetryProtocol:
        'WebSocket TLS with JSON-wrapped binary byte buffers',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  },
  {
    id: 'autosre',
    index: 'PROJECT // 02',
    title: 'AUTOSRE',
    subtitle: 'Autonomous Site Reliability Agent',
    badge: 'REINFORCEMENT LEARNING AGENT',
    isFeatured: true,
    featuredTag: 'FEATURED // META PYTORCH OPENENV HACKATHON',
    description:
      'Interactive Reinforcement Learning simulation environment designed to model server failure topologies and train self-healing agents. Built during the Meta PyTorch OpenEnv Hackathon to simulate latency cascades, anomalous memory leaks, and autonomous container remediation policies.',
    pipeline: [
      'SYSTEM INCIDENT',
      'SRE AGENT OBSERVATION',
      'POLICY INFERENCE',
      'AUTOMATED RECOVERY'
    ],
    tags: ['Python', 'RL Environment', 'OpenEnv API', 'Meta PyTorch Track'],
    telemetryType: 'sre',
    telemetryData: {
      env: 'OPENENV_SRE_v1',
      step: '418/1000',
      anomaly: 'POD_OOM_KILL // NODE_3',
      action: 'REALLOCATE_HEAP + ROLLOVER',
      reward: '+1.849 (OPTIMAL STABILITY)',
      recoveryAccuracy: '91.4%'
    },
    architectureSummary:
      'Incident Trigger → System Telemetry Observation → RL Policy Agent (OpenEnv) → Automated Remediation Dispatch → Reward Optimization',
    fullDossier: {
      systemContext:
        'Developed specifically for the Meta PyTorch OpenEnv Hackathon, AutoSRE models complex cloud microservice topologies subjected to chaotic failure modes: cascading timeouts, database deadlocks, memory leaks, and runaway CPU processes.',
      keyModules: [
        {
          name: 'Chaos Generator',
          role: 'Stochastic anomaly injection engine',
          spec:
            'Simulates memory leaks, network partitions, and thread starvation across virtual nodes'
        },
        {
          name: 'OpenEnv Interface',
          role: 'Gym-compatible state and action space definition',
          spec:
            'Discrete action space (drain node, kill process, scale replica, reallocate heap) with continuous telemetry observations'
        },
        {
          name: 'Policy Optimizer',
          role: 'Deep Q-Network & Policy Gradient training harness',
          spec:
            'Trains agent to prioritize system uptime and mitigate cascading SLA breaches'
        }
      ],
      telemetryProtocol:
        'OpenEnv API telemetry vectors with reward backpropagation',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  },
  {
    id: 'terrasense',
    index: 'PROJECT // 03',
    title: 'TERRASENSE',
    subtitle: 'Precision Agricultural Intelligence',
    badge: 'AGRITECH INTELLIGENCE',
    description:
      'Predictive agricultural operations platform synthesizing soil moisture metrics, ambient microclimate sensors, and yield forecasting algorithms into a high-density operational telemetry dashboard.',
    pipeline: [
      'SOIL SENSORS',
      'TELEMETRY AGGREGATION',
      'ANALYTICS ENGINE',
      'AI CROP INSIGHT'
    ],
    tags: ['TypeScript', 'Dashboard UI', 'Agriculture', 'AI Forecasting'],
    telemetryType: 'agri',
    telemetryData: {
      soilMoisture: '41.8% [OPTIMAL]',
      npkNitrogen: '142 mg/kg',
      groundTemp: '24.2° C',
      irrigationValve: 'AUTO_SCHEDULE',
      batteryReserve: '94%',
      phLevel: '6.7 [BALANCED]'
    },
    architectureSummary:
      'Soil Sensors → Hardware Gateway → Time-Series Ingestion API → Analytics Engine → Predictive Visual Dashboard',
    fullDossier: {
      systemContext:
        'TerraSense bridges the gap between raw agronomic sensors and real-world farm decision making. Built with an emphasis on low bandwidth and resilient data ingestion from remote farm plots.',
      keyModules: [
        {
          name: 'Field Sensor Node',
          role: 'Capacitive moisture, temperature, and NPK probes',
          spec:
            'Ultra-low-power sleep cycles with solar harvesting circuitry'
        },
        {
          name: 'Edge Gateway',
          role: 'MQTT/HTTP local concentrator',
          spec:
            'Local buffer storage for offline resiliency during rural connection dropouts'
        },
        {
          name: 'Telemetry Console',
          role: 'Real-time responsive monitoring interface',
          spec:
            'Precision graphs, evapotranspiration calculation, and smart valve actuation triggers'
        }
      ],
      telemetryProtocol:
        'MQTT broker with compact binary sensor payloads',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  },
  {
    id: 'openenv_prop',
    index: 'PROJECT // 04',
    title: 'OPENENV_PROP',
    subtitle: 'Environment Tool Interface',
    badge: 'TOOL EXECUTION HARNESS',
    description:
      'High-throughput web interface engineered with Gradio for automated JSON schema validation, dynamic argument injection, and reliable tool execution across isolated environments.',
    pipeline: [
      'SCHEMA INPUT',
      'TYPE VALIDATION',
      'TOOL INVOCATION',
      'STRUCTURED OUTPUT'
    ],
    tags: ['Python', 'Gradio', 'JSON Schema', 'Backend Systems'],
    telemetryType: 'schema',
    telemetryData: {
      schemaStatus: 'PARSED',
      toolTarget: 'kernel_reboot_dispatch',
      validationTime: '1.2 ms',
      payload: {
        tool: 'kernel_reboot_dispatch',
        args: {
          target_id: 'srv-prod-asia-01',
          grace_period_sec: 15,
          drain_connections: true
        },
        status: 'VALIDATED // READY'
      }
    },
    architectureSummary:
      'Agent Request → Schema Parsing Engine → Argument Type Verification → Sandbox Execution → Structured Response Callback',
    fullDossier: {
      systemContext:
        'Tool execution in autonomous agent workflows frequently fails due to malformed JSON schemas or mismatched argument types. OpenEnv_Prop provides a visual, rapid testing environment to validate agent tooling payloads prior to production deployment.',
      keyModules: [
        {
          name: 'Schema Parsing Engine',
          role: 'Pydantic & JSON-Schema introspection validator',
          spec:
            'Detects missing mandatory parameters, type mismatches, and boundary violations'
        },
        {
          name: 'Interactive Gradio Sandbox',
          role: 'High-throughput developer interface',
          spec:
            'Simulates agent function calls with real-time argument form generation'
        },
        {
          name: 'Execution Dispatcher',
          role: 'Sandboxed Python process runner',
          spec:
            'Safe execution boundary with timeout enforcement and captured stdout/stderr'
        }
      ],
      telemetryProtocol:
        'HTTP REST / JSON-RPC with strict schema typing',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  },
  {
    id: 'soc_pipeline',
    index: 'PROJECT // 05',
    title: 'AI SOC THREAT PIPELINE',
    subtitle: 'Automated Incident Triage System',
    badge: 'CYBERSECURITY INTELLIGENCE',
    description:
      'AI-driven Security Operations Center alert triage architecture. Interfaces incoming high-frequency log streams with Hugging Face classification models to prioritize critical security incidents in sub-second intervals.',
    pipeline: [
      'SIEM EVENT',
      'FEATURE EXTRACTION',
      'MODEL INFERENCE',
      'INCIDENT TRIAGE'
    ],
    tags: ['FastAPI', 'Hugging Face', 'Live Inference', 'Threat Triage'],
    telemetryType: 'soc',
    telemetryData: {
      ingestionRate: '1,420 events/sec',
      endpoint: 'fastapi://soc-model-triage',
      alertClassification: 'CVE-2024-XXXX // REVERSE SHELL INJECTION',
      severity: 'SEV-1 TRIAGED',
      modelScore: 0.988,
      actionDispatched: 'ISOLATE_INTERFACE // ETH0'
    },
    architectureSummary:
      'SIEM Syslog Stream → FastAPI Ingestion Gateway → Hugging Face Transformer Inference → Severity Classification → Ticket Dispatch',
    fullDossier: {
      systemContext:
        'Modern SOC teams suffer from severe alert fatigue, handling thousands of non-critical log anomalies daily. This pipeline intercepts the raw event stream, extracts linguistic and network features, and runs them against fine-tuned transformer classification heads to escalate real exploits.',
      keyModules: [
        {
          name: 'Event Stream Ingestor',
          role: 'FastAPI async queue receiver',
          spec:
            'Buffered in-memory intake handling up to 2,000 requests per second'
        },
        {
          name: 'Transformer Classifier',
          role: 'Hugging Face DistilBERT fine-tuned on security logs',
          spec:
            'Categorizes events into Benign, Reconnaissance, Injection, or Exfiltration'
        },
        {
          name: 'Automated Quarantine Dispatch',
          role: 'Firewall & network isolation webhook',
          spec:
            'Generates structured incident packets with recommended mitigation commands'
        }
      ],
      telemetryProtocol:
        'Syslog UDP / HTTPS Webhooks with mutual TLS authentication',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  },
  {
    id: 'smps-tech-lab',
    index: 'PROJECT // 06',
    title: 'SMPS TECH LAB',
    subtitle: 'Technology Research & Innovation Lab',
    badge: 'R&D / INNOVATION',
    description:
      'Technology research and development initiative focused on engineering practical solutions across intelligent systems, embedded technology, and emerging digital infrastructure.',
    pipeline: [
      'RESEARCH',
      'PROTOTYPE',
      'VALIDATION',
      'DEPLOYMENT'
    ],
    tags: ['R&D', 'AI', 'IoT', 'Embedded Systems'],
    telemetryType: 'lab',
    telemetryData: {
      status: 'ACTIVE',
      focus: 'TECHNOLOGY INNOVATION',
      stage: 'PROTOTYPE',
      domain: 'AI / IoT / EMBEDDED'
    },
    architectureSummary:
      'Research Concept → Engineering Prototype → Technical Validation → Deployment',
    fullDossier: {
      systemContext:
        'SMPS Tech Lab is an R&D-focused technology initiative for exploring and developing practical engineering solutions across emerging technology domains.',
      keyModules: [
        {
          name: 'Research & Ideation',
          role: 'Technology exploration',
          spec:
            'Identifies practical problems and evaluates emerging technical approaches'
        },
        {
          name: 'Prototype Engineering',
          role: 'Rapid system development',
          spec:
            'Builds and validates hardware and software concepts'
        },
        {
          name: 'Technical Validation',
          role: 'System testing',
          spec:
            'Evaluates prototypes for reliability, functionality, and deployment readiness'
        }
      ],
      telemetryProtocol:
        'Engineering metrics and prototype validation data',
      githubUrl: 'https://github.com/sohansa035-bot'
    }
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'TECHNICAL & DIGITAL OPERATIONS INTERN',
    company: 'OptCell Global',
    division: 'Corporate Digital Infrastructure',
    period: 'DEC 2025 – MAR 2026',
    bullets: [
      'Engaged in planning, development, and execution of corporate web projects and cross-functional digital initiatives.',
      'Collaborated across engineering and operational teams to streamline internal workflows and technical documentation standards.',
      'Supported agile testing cycles, bug triage, and continuous deployment workflows to maintain system reliability.'
    ]
  }
];

export const LEADERSHIP_ITEM: LeadershipItem = {
  role: 'TECHNICAL CO-HEAD',
  organization:
    'IEEE Technology and Engineering Management Society (TEMS) // REVA University',
  period: '2026 – PRESENT',
  description:
    'Leading engineering initiatives, ideathons, and technical workshops across university technical societies. Directing student cohorts through hands-on AI/ML implementations and fostering collaboration across practical software and hardware projects.',
  focus: 'FOCUS: AI/ML PEER MENTORSHIP & WORKSHOPS',
  location: 'BANGALORE, IN',
  initiatives: [
    'LEAD INITIATIVES',
    'COORDINATE HACKATHONS',
    'BUILD PROTOCOLS',
    'ENABLE PEERS'
  ]
};

export const ACHIEVEMENTS = [
  {
    type: 'APPOINTMENT',
    title: 'Appointed Technical Co-Head at IEEE TEMS REVA',
    subtitle: 'Directing core tech modules and labs',
    color: 'peach'
  },
  {
    type: 'HACKATHON DEPLOYMENT',
    title: 'Meta PyTorch OpenEnv Hackathon',
    subtitle: 'Engineered AutoSRE RL Agent environment',
    color: 'cyan'
  },
  {
    type: 'SYMPOSIUMS',
    title: 'Technical Ideathons & Workshops',
    subtitle: 'Active participant in robotics & AI symposiums',
    color: 'amber'
  }
];

export const TECH_STACK = {
  aiMl: [
    { name: 'Hugging Face', category: 'Transformers' },
    { name: 'YOLOv8', category: 'Vision' },
    { name: 'OpenEnv API', category: 'RL' },
    { name: 'OpenCV', category: 'Vision' },
    { name: 'Lyzr', category: 'Agents' },
    { name: 'NumPy & Pandas', category: 'Tensors' }
  ],
  languages: [
    { name: 'Python', category: 'Primary' },
    { name: 'C', category: 'Low-Level' },
    { name: 'TypeScript', category: 'Strict Typed' },
    { name: 'JavaScript', category: 'ES6+' }
  ],
  webDevelopment: [
    { name: 'HTML5 & CSS3', category: 'Semantic' },
    { name: 'FastAPI', category: 'Async APIs' },
    { name: 'Gradio', category: 'Model UI' },
    { name: 'Tailwind CSS', category: 'Design Tokens' }
  ],
  devopsIot: [
    { name: 'ESP32', category: 'Hardware' },
    { name: 'Edge Computing', category: 'Embedded' },
    { name: 'IoT Systems', category: 'Sensors' },
    { name: 'Git & GitHub', category: 'VCS' },
    { name: 'Docker', category: 'Containers' }
  ]
};
