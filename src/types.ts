export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  badge: string;
  isFeatured?: boolean;
  featuredTag?: string;
  description: string;
  pipeline: string[];
  tags: string[];
  telemetryType: 'rover' | 'sre' | 'agri' | 'schema' | 'soc';
  telemetryData: Record<string, any>;
  architectureSummary: string;
  fullDossier: {
    systemContext: string;
    keyModules: { name: string; role: string; spec: string }[];
    telemetryProtocol: string;
    githubUrl: string;
  };
}

export interface ArchitectureNode {
  id: string;
  nodeNumber: string;
  title: string;
  description: string;
  status: string;
  colorScheme: 'peach' | 'cyan';
  tags: { name: string; role: string }[];
  details: {
    algorithmicFocus: string;
    throughputTarget: string;
    primaryStack: string[];
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  division: string;
  period: string;
  bullets: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  focus: string;
  location: string;
  initiatives: string[];
}
