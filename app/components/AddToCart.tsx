"use client";

import { useState } from "react";
import Link from "next/link";
import type { ShopProduct } from "../../data/products";
import { useCart } from "./CartProvider";

export default function AddToCart({ product }: { product: ShopProduct }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const disabled = product.availability !== "available" || product.stock < 1;

  return <div className="purchase-box">
    <p className="demo-note"><strong>Bản demo thương mại:</strong> giá và tồn kho dưới đây là dữ liệu giả định, chưa phải chào bán chính thức.</p>
    <div className="purchase-box__row">
      <label>Số lượng
        <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} disabled={disabled}>
          {Array.from({ length: Math.min(product.stock, 10) }, (_, index) => index + 1).map((value) => <option key={value}>{value}</option>)}
        </select>
      </label>
      <button type="button" className="primary-button" disabled={disabled} onClick={() => { add(product, quantity); setAdded(true); }}>
        {disabled ? "Tạm hết hàng" : "Thêm vào giỏ"}
      </button>
    </div>
    <p className="stock-copy">Còn {product.stock} sản phẩm demo</p>
    {added && <p className="purchase-box__success" role="status">Đã thêm vào giỏ. <Link href="/cart">Xem giỏ hàng →</Link></p>}
  </div>;
}
