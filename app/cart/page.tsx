import type { Metadata } from "next";
import CartPageClient from "./CartPageClient";

export const metadata: Metadata = { title: "Giỏ hàng", description: "Kiểm tra sản phẩm trong giỏ hàng demo." };
export default function CartPage() { return <CartPageClient />; }
