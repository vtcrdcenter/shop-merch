"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useCart } from "../components/CartProvider";

const money = (amount: number) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(amount);
export default function CheckoutClient() {
  const { lines, subtotal, clear } = useCart();
  const router = useRouter();
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const order = `DEMO-${Date.now().toString().slice(-8)}`; clear(); router.push(`/order-success?order=${order}`); }
  if (!lines.length) return <main className="commerce-page"><div className="site-container empty-state"><h1>Chưa có sản phẩm để thanh toán</h1><Link className="primary-button" href="/products">Quay lại gian hàng</Link></div></main>;
  return <main className="commerce-page"><div className="site-container commerce-shell"><p className="commerce-eyebrow">THANH TOÁN DEMO</p><h1>Thông tin nhận hàng</h1><p className="demo-note">Không có giao dịch thật và thông tin nhập tại đây không được gửi tới máy chủ.</p><div className="checkout-layout"><form className="checkout-form" onSubmit={submit}>
    <label>Họ và tên<input name="name" required autoComplete="name" /></label><label>Số điện thoại<input name="phone" required inputMode="tel" autoComplete="tel" /></label><label>Email<input name="email" required type="email" autoComplete="email" /></label><label className="full-field">Địa chỉ nhận hàng<textarea name="address" required rows={3} autoComplete="street-address" /></label><fieldset className="full-field"><legend>Phương thức thanh toán</legend><label><input type="radio" name="payment" defaultChecked /> Thanh toán khi nhận hàng (mô phỏng)</label></fieldset><button className="primary-button full-field" type="submit">Đặt đơn demo · {money(subtotal)}</button>
  </form><aside className="order-summary"><h2>{lines.length} sản phẩm</h2>{lines.map((line) => <p key={line.product.slug}><span>{line.product.shortName} × {line.quantity}</span><strong>{money((line.product.price.amount ?? 0) * line.quantity)}</strong></p>)}<div className="order-summary__total"><span>Tổng cộng</span><strong>{money(subtotal)}</strong></div></aside></div></div></main>;
}
