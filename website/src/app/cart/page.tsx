import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Shopping Cart",
  description: "Review your CyderTech order before checkout.",
};

const cartProducts: Record<string, { id: string; name: string; price: number; image: string }> = {
  "indoor-wifi": { id: "indoor-wifi", name: "Indoor WiFi Camera", price: 79, image: "/products/indoor-camera.svg" },
  "outdoor-security": { id: "outdoor-security", name: "Outdoor Security Camera", price: 129, image: "/products/outdoor-camera.svg" },
  "ptz-camera": { id: "ptz-camera", name: "PTZ Camera System", price: 299, image: "/products/outdoor-camera.svg" },
  "mechanical-keyboard": { id: "mechanical-keyboard", name: "Mechanical Keyboard", price: 89, image: "/products/keyboard.svg" },
  "gaming-mouse": { id: "gaming-mouse", name: "Gaming Mouse", price: 59, image: "/products/mouse.svg" },
  "usb-c-hub": { id: "usb-c-hub", name: "USB-C Hub Pro", price: 49, image: "/products/keyboard.svg" },
  "ai-desktop-case": { id: "ai-desktop-case", name: "AI Desktop Case", price: 299, image: "/products/ai-case.svg" },
  "ai-rental": { id: "ai-rental", name: "AI Equipment Rental", price: 199, image: "/products/ai-case.svg" },
};

export default function CartPage() {
  // Demo cart items
  const demoItems = [
    { ...cartProducts["indoor-wifi"], quantity: 2 },
    { ...cartProducts["ai-desktop-case"], quantity: 1 },
  ];

  const subtotal = demoItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            CyderTech
          </Link>
          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="/products" className="hover:text-slate-900 transition">Products</Link>
            <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
            <Link href="/about" className="hover:text-slate-900 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
            <Link href="/cart" className="text-blue-600 font-medium">🛒 Cart</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {demoItems.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-xl">
                <div className="text-5xl mb-4">🛒</div>
                <p className="text-slate-600 mb-6">Your cart is empty</p>
                <Link 
                  href="/products"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              demoItems.map((item) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 flex gap-4">
                  <div className="w-24 h-24 bg-slate-100 rounded-lg relative shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg">
                        <button className="px-3 py-1 text-slate-600 hover:bg-slate-50">-</button>
                        <span className="px-3 py-1 font-medium">{item.quantity}</span>
                        <button className="px-3 py-1 text-slate-600 hover:bg-slate-50">+</button>
                      </div>
                      <button className="text-red-500 text-sm hover:underline">Remove</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            )}

            {demoItems.length > 0 && (
              <Link 
                href="/products"
                className="block text-blue-600 hover:underline text-sm"
              >
                ← Continue Shopping
              </Link>
            )}
          </div>

          {/* Order Summary */}
          {demoItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold text-slate-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="block w-full mt-6 py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-4 text-xs text-slate-500 text-center">
                  <p>🔒 Secure checkout powered by Stripe</p>
                  <p className="mt-1">Free shipping on orders over $100</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 CyderTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
