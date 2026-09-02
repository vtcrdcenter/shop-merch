import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import { getPolicy, policies } from "../../../data/policies";
export function generateStaticParams() { return policies.map((policy) => ({ slug: policy.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const policy = getPolicy((await params).slug); return { title: policy?.title ?? "Chính sách" }; }
export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) { const policy = getPolicy((await params).slug); if (!policy) notFound(); return <main className="policy-page"><div className="site-container policy-shell"><Breadcrumb items={[{ label: "Chính sách" }, { label: policy.title }]} /><p className="commerce-eyebrow">THÔNG TIN DEMO</p><h1>{policy.title}</h1><p className="policy-intro">{policy.intro} Nội dung này cần được pháp chế và đội vận hành phê duyệt trước khi mở bán.</p><div className="policy-sections">{policy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.copy}</p></section>)}</div></div></main>; }
