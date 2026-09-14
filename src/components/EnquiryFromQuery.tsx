"use client";
import { useSearchParams } from "next/navigation";
import EnquiryForm from "./EnquiryForm";
export default function EnquiryFromQuery() {
  const params = useSearchParams();
  const certification = (params.get("certification") || "").slice(0, 800);
  const role = (params.get("role") || "").slice(0, 100);
  return <EnquiryForm key={JSON.stringify([certification, role])} initialCertification={certification} initialRole={role}/>;
}
