import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";
export const metadata: Metadata = { title: "Thanh toán demo" };
export default function CheckoutPage() { return <CheckoutClient />; }
