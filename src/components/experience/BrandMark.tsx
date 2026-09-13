export default function BrandMark({ small = false }: { small?: boolean }) {
  return <span className={`gc-brand ${small ? "gc-brand-small" : ""}`}>
    <span className="gc-brand-orb" aria-hidden="true"><span /><i /><b /></span>
    <span className="gc-brand-word">Global Certs<span className="gc-brand-it"> IT</span><small>GLOBAL IT CERTIFICATIONS</small></span>
  </span>;
}
