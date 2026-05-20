export type LeadInput = {
  name: string;
  email: string;
  serviceNeeded:
    | "Website Development"
    | "Web Application Development"
    | "Mobile App Development"
    | "MVP Development"
    | "Automation Tools"
    | "AI Integration";
  budgetRange?: string;
  timeline?: string;
  referenceLinks?: string;
  message: string;
};

export async function createLead(input: LeadInput) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined;
  const apiBase = baseUrl ?? "http://localhost:4000";

  const res = await fetch(`${apiBase}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => null);
    const message = payload?.error ?? "Failed to submit inquiry.";
    throw new Error(message);
  }

  return res.json();
}

