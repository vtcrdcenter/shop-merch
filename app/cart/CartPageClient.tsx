"use client";

import Link from "next/link";
import { siteAssetPath } from "../../lib/site-path";
import { useCart } from "../components/CartProvider";

const money = (amount: number) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(amount);

export default function CartPageClient() {
  const { lines, subtotal, update, remove } = useCart();
  return <main className="commerce-page"><div className="site-container commerce-shell">
    <p className="commerce-eyebrow">GIAN HÀNG DEMO</p><h1>Giỏ hàng</h1>
    <p className="demo-note">Giá, tồn kho, vận chuyển và thanh toán chỉ dùng để trình diễn luồng mua hàng.</p>
    {lines.length === 0 ? <div className="empty-state"><h2>Giỏ hàng đang trống</h2><p>Khám phá các thiết kế từ di sản và thêm sản phẩm bạn quan tâm.</p><Link className="primary-button" href="/products">Xem sản phẩm</Link></div> : <div className="cart-layout">
      <div className="cart-lines">{lines.map(({ product, quantity }) => <article className="cart-line" key={product.slug}>
        <img src={siteAssetPath(product.images[0]?.src)} alt={product.images[0]?.alt ?? product.name} />
        <div><p>{product.sku}</p><h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2><strong>{money(product.price.amount ?? 0)}</strong></div>
        <label>Số lượng<input type="number" min="1" max={product.stock} value={quantity} onChange={(e) => update(product.slug, Number(e.target.value))} /></label>
        <button type="button" className="text-button" onClick={() => remove(product.slug)}>Xóa</button>
      </article>)}</div>
      <aside className="order-summary"><h2>Tóm tắt đơn</h2><p><span>Tạm tính</span><strong>{money(subtotal)}</strong></p><p><span>Giao hàng demo</span><strong>Miễn phí</strong></p><div className="order-summary__total"><span>Tổng cộng</span><strong>{money(subtotal)}</strong></div><Link className="primary-button" href="/checkout">Tiếp tục thanh toán</Link></aside>
    </div>}
  </div></main>;
}
