import { ExternalLink } from "lucide-react";
import type { RegistrationGuide } from "@/lib/registration";

export default function RegistrationSteps({ guide }: { guide: RegistrationGuide }) {
  return <div className="registration-guide">
    <ol>{guide.steps.map((step, i) => <li key={step}><span aria-hidden="true">0{i + 1}</span><p>{step}</p></li>)}</ol>
    <p className="registration-note">{guide.note}</p>
    <a className="cf-btn cf-btn-outline" href={guide.url} target="_blank" rel="noopener noreferrer">{guide.title} <ExternalLink size={15} /></a>
  </div>;
}
