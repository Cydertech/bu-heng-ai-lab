import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Products",
  description: "Premium network cameras and computer accessories for home security and business needs.",
};

const allProducts = [
  {
    id: "indoor-wifi",
    name: "Indoor WiFi Camera",
    price: 79,
    image: "/products/indoor-camera.svg",
    category: "Cameras",
    features: ["1080p HD", "Night Vision", "Two-way Audio", "Mobile App"],
    description: "Perfect for monitoring your home interior with crystal clear 1080p video. Features night vision up to 30 feet and two-way audio communication.",
    stock: 50,
    bestseller: true,
  },
  {
    id: "outdoor-security",
    name: "Outdoor Security Camera",
    price: 129,
    image: "/products/outdoor-camera.svg",
    category: "Cameras",
    features: ["4K Resolution", "Weatherproof IP67", "Motion Detection", "Cloud Storage"],
    description: "Weatherproof 4K security camera with advanced motion detection and cloud storage. Ideal for outdoor surveillance.",
    stock: 35,
    bestseller: true,
  },
  {
    id: "ptz-camera",
    name: "PTZ Camera System",
    price: 299,
    image: "/products/outdoor-camera.svg",
    category: "Cameras",
    features: ["Pan-Tilt-Zoom", "360° Coverage", "AI Tracking", "NVR Compatible"],
    description: "Professional PTZ camera with 360° coverage and AI-powered tracking. Perfect for large area surveillance.",
    stock: 20,
    bestseller: false,
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 89,
    image: "/products/keyboard.svg",
    category: "Accessories",
    features: ["RGB Backlit", "Cherry MX Switches", "N-Key Rollover", "Aluminum Frame"],
    description: "Premium mechanical keyboard with Cherry MX switches and per-key RGB lighting. Built to last with aluminum frame.",
    stock: 100,
    bestseller: false,
  },
  {
    id: "gaming-mouse",
    name: "Gaming Mouse",
    price: 59,
    image: "/products/mouse.svg",
    category: "Accessories",
    features: ["16000 DPI", "Programmable Buttons", "Ergonomic Design", "RGB Lighting"],
    description: "High-precision gaming mouse with ergonomic design and customizable RGB lighting.",
    stock: 75,
    bestseller: false,
  },
  {
    id: "usb-c-hub",
    name: "USB-C Hub Pro",
    price: 49,
    image: "/products/keyboard.svg",
    category: "Accessories",
    features: ["7-in-1 Ports", "4K HDMI Output", "100W Power Delivery", "Compact Design"],
    description: "Versatile USB-C hub with 7 ports including 4K HDMI, USB 3.0, and SD card reader.",
    stock: 60,
    bestseller: false,
  },
  {
    id: "ai-desktop-case",
    name: "AI Desktop Case",
    price: 299,
    image: "/products/ai-case.svg",
    category: "AI",
    features: ["GPU Optimized", "Superior Cooling", "Tool-free Design", "RGB Control"],
    description: "High-performance desktop case designed for AI computing with superior cooling and GPU support.",
    stock: 25,
    bestseller: true,
  },
  {
    id: "ai-solutions",
    name: "Custom AI Solutions",
    price: 0,
    image: "/products/ai-solutions.svg",
    category: "AI",
    features: ["Tailored Solutions", "End-to-End Support", "Scalable Architecture", "Training Included"],
    description: "Custom AI project solutions tailored to your business needs. Contact us for pricing.",
    stock: 999,
    bestseller: false,
    contactRequired: true,
  },
  {
    id: "ai-rental",
    name: "AI Equipment Rental",
    price: 199,
    image: "/products/ai-case.svg",
    category: "AI",
    features: ["Flexible Terms", "Full Maintenance", "24/7 Support", "Upgrade Options"],
    description: "AI equipment rental with full maintenance and support. Monthly subscription model.",
    stock: 10,
    bestseller: false,
    isRental: true,
  },
];

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-300 transition group cursor-pointer"
    >
      <div className="aspect-square bg-slate-50 relative">
        {product.bestseller && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full z-10">
            Bestseller
          </span>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full z-10">
            Low Stock
          </span>
        )}
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition"
        />
      </div>
      <div className="p-5">
        <span className="text-xs text-blue-600 font-medium">{product.category}</span>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">
            {product.price === 0 ? "Contact Us" : `$${product.price}`}
          </p>
          <span className="text-sm text-slate-500">
            {product.stock > 50 ? "In Stock" : `${product.stock} left`}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const categories = ["Cameras", "Accessories", "AI"];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            CyderTech
          </Link>
          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="/products" className="text-blue-600 font-medium">Products</Link>
            <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
            <Link href="/about" className="hover:text-slate-900 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
            <Link href="/cart" className="hover:text-slate-900 transition relative">
              🛒
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium network cameras and computer accessories for home security and productivity.
          </p>
        </div>

        {/* Category Sections */}
        {categories.map((category) => {
          const categoryProducts = allProducts.filter((p) => p.category === category);
          return (
            <section key={category} id={category.toLowerCase()} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">
                  {category === "Cameras" ? "📹" : category === "Accessories" ? "⌨️" : "🤖"}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 CyderTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
