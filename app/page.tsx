"use client";
import { useState } from "react";

const products = [
  { name: "Sổ tay họa tiết Đông Sơn", price: "185.000₫", image: "notebook" },
  { name: "Khăn lụa Chim Lạc", price: "690.000₫", image: "scarf" },
  { name: "Bình gốm Hoa Lam", price: "1.250.000₫", image: "vase" },
  { name: "Bộ quà tặng Trống đồng", price: "850.000₫", image: "gift" },
];
const benefits = [["⌂", "Chính thức từ Bảo tàng"], ["▦", "Truy xuất nguồn gốc"], ["♢", "Bảo chứng sản phẩm"], ["▱", "Giao hàng toàn quốc"]];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(2);
  return <main>
    <div className="topbar"><span>Gian hàng chính thức của Bảo tàng Lịch sử Quốc gia</span><div><a href="#orders">Tra cứu đơn hàng</a><i/><a href="#support">Hỗ trợ</a></div></div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Trang chủ Bảo tàng Lịch sử Quốc gia"><span className="brand-mark"><b>BT</b><small>LSQG</small></span><span><strong>BẢO TÀNG LỊCH SỬ QUỐC GIA</strong><small>GIAN HÀNG ĐIỆN TỬ</small></span></a>
      <label className="search"><span>⌕</span><input aria-label="Tìm kiếm" placeholder="Tìm kiếm sản phẩm, bộ sưu tập, câu chuyện di sản..." /></label>
      <div className="actions"><button aria-label="Tài khoản">♙</button><button aria-label="Yêu thích">♡</button><button className="cart" aria-label={`Giỏ hàng có ${cart} sản phẩm`}>♧<b>{cart}</b></button></div>
      <button className="menu-toggle" aria-label="Mở menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </header>
    <nav className={menuOpen ? "nav open" : "nav"}>{["Trang chủ", "Bộ sưu tập", "Sản phẩm", "Câu chuyện di sản", "Về gian hàng"].map((item,i)=><a className={i===0?"active":""} key={item} href={i===0?"#top":`#${i}`}>{item}</a>)}</nav>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">BỘ SƯU TẬP DI SẢN VIỆT</p><h1>Mang di sản<br/>vào đời sống hôm nay</h1><p className="lead">Những sản phẩm văn hóa sáng tạo được phát triển<br className="desktop"/> từ tư liệu và hiện vật tiêu biểu của Bảo tàng Lịch sử Quốc gia.</p><div className="hero-cta"><a className="primary" href="#products">Khám phá bộ sưu tập</a><a className="secondary" href="#story">Xem câu chuyện di sản</a></div></div><div className="hero-products" role="img" aria-label="Sản phẩm văn hóa lấy cảm hứng từ di sản Việt Nam"/></section>
    <section className="benefits" aria-label="Cam kết của gian hàng">{benefits.map(([icon,label])=><div key={label}><span>{icon}</span><p>{label}</p></div>)}</section>
    <section className="featured" id="products"><div className="section-head"><h2>SẢN PHẨM NỔI BẬT</h2><a href="#all">Xem tất cả sản phẩm <span>→</span></a></div><div className="product-grid">{products.map(product=><article className="product-card" key={product.name}><div className={`product-image ${product.image}`} role="img" aria-label={product.name}/><div className="product-info"><span className="trace">Có truy xuất</span><h3>{product.name}</h3><p>{product.price}</p></div><button className="add-cart" aria-label={`Thêm ${product.name} vào giỏ`} onClick={()=>setCart(cart+1)}>♧</button></article>)}</div></section>
  </main>;
}
