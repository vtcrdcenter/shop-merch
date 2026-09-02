import type { Metadata } from "next";
import SearchClient from "./SearchClient";
export const metadata: Metadata = { title: "Tìm kiếm", description: "Tìm kiếm sản phẩm, di sản, bộ sưu tập và câu chuyện." };
export default function SearchPage() { return <SearchClient />; }
