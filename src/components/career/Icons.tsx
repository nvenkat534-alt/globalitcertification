import {
  Database,
  Sparkles,
  ChartNoAxesCombined,
  BrainCircuit,
  Cloud,
  Layers3,
  Workflow,
  Code2,
  ShieldCheck,
  Network,
  BriefcaseBusiness,
  Compass,
  Users,
} from "lucide-react";
const icons = {
  database: Database,
  sparkles: Sparkles,
  chart: ChartNoAxesCombined,
  brain: BrainCircuit,
  cloud: Cloud,
  layers: Layers3,
  workflow: Workflow,
  code: Code2,
  shield: ShieldCheck,
  network: Network,
  briefcase: BriefcaseBusiness,
  compass: Compass,
  users: Users,
};
export default function RoleIcon({
  name,
  size = 23,
}: {
  name: string;
  size?: number;
}) {
  const Icon = icons[name as keyof typeof icons] || Compass;
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}
