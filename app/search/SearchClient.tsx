"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "../../data/products";
import { heritageSources } from "../../data/heritage";
import { collections } from "../../data/collections";
import { stories } from "../../data/stories";

const items = [
  ...products.map((item) => ({ id: item.id, type: "Sản phẩm", title: item.name, copy: item.shortDescription, href: `/products/${item.slug}` })),
  ...heritageSources.map((item) => ({ id: item.id, type: "Di sản", title: item.name, copy: item.shortDescription, href: `/heritage/${item.slug}` })),
  ...collections.map((item) => ({ id: item.id, type: "Bộ sưu tập", title: item.name, copy: item.shortDescription, href: `/collections/${item.slug}` })),
  ...stories.filter((item) => item.status === "published").map((item) => ({ id: item.id, type: "Câu chuyện", title: item.title, copy: item.excerpt, href: `/stories/${item.slug}` })),
];
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("vi");

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => { const term = normalize(query.trim()); return term.length < 2 ? [] : items.filter((item) => normalize(`${item.title} ${item.copy} ${item.type}`).includes(term)); }, [query]);
  return <main className="commerce-page"><div className="site-container search-shell"><p className="commerce-eyebrow">TÌM TRÊN TOÀN GIAN HÀNG</p><h1>Tìm một sản phẩm hay câu chuyện</h1><label className="search-field"><span className="sr-only">Từ khóa tìm kiếm</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ví dụ: Phượng, Sắc Mệnh, Óc Eo…" /></label>
    {query.trim().length < 2 ? <p className="search-hint">Nhập ít nhất 2 ký tự để tìm trong sản phẩm, di sản, bộ sưu tập và câu chuyện.</p> : <><p className="search-count">{results.length} kết quả</p><div className="search-results">{results.map((item) => <Link href={item.href} className="search-result" key={`${item.type}-${item.id}`}><span>{item.type}</span><h2>{item.title}</h2><p>{item.copy}</p><strong>Xem nội dung →</strong></Link>)}</div>{!results.length && <div className="empty-state"><h2>Chưa tìm thấy nội dung phù hợp</h2><p>Thử từ khóa ngắn hơn hoặc khám phá toàn bộ sản phẩm.</p><Link className="primary-button" href="/products">Xem sản phẩm</Link></div>}</>}
  </div></main>;
}
