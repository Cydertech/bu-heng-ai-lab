import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: "indoor-wifi",
    name: "Indoor WiFi Camera",
    price: 79,
    image: "/products/indoor-camera.svg",
    category: "Cameras",
    features: ["1080p HD Video", "Night Vision up to 30ft", "Two-way Audio", "Mobile App Control", "Motion Alerts", "Cloud Storage Compatible"],
    description: "Monitor your home interior with crystal clear 1080p HD video. This indoor WiFi camera features advanced night vision capabilities and two-way audio communication, allowing you to check in on your loved ones from anywhere in the world. Easy setup with our intuitive mobile app.",
    specs: {
      "Resolution": "1080p Full HD",
      "Field of View": "110° Wide Angle",
      "Night Vision": "30 ft / 9 m",
      "Connectivity": "WiFi 2.4GHz",
      "Storage": "MicroSD up to 128GB",
      "Power": "5V DC, 2A",
    },
    stock: 50,
    bestseller: true,
  },
  {
    id: "outdoor-security",
    name: "Outdoor Security Camera",
    price: 129,
    image: "/products/outdoor-camera.svg",
    category: "Cameras",
    features: ["4K Ultra HD", "IP67 Weatherproof", "Smart Motion Detection", "Cloud Storage", "Two-way Audio", "Instant Alerts"],
    description: "Professional-grade outdoor security camera with stunning 4K resolution. Weatherproof IP67 rating ensures reliable performance in any weather condition. Advanced AI-powered motion detection reduces false alarms while keeping your property safe.",
    specs: {
      "Resolution": "4K Ultra HD",
      "Field of View": "130° Wide Angle",
      "Weatherproof": "IP67",
      "Night Vision": "Color Night Vision 50ft",
      "Storage": "Cloud + Local",
      "Power": "DC 12V / PoE",
    },
    stock: 35,
    bestseller: true,
  },
  {
    id: "ptz-camera",
    name: "PTZ Camera System",
    price: 299,
    image: "/products/outdoor-camera.svg",
    category: "Cameras",
    features: ["Pan-Tilt-Zoom", "360° Pan, 90° Tilt", "AI Object Tracking", "NVR Compatible", "Preset Patrols", "Weatherproof"],
    description: "Professional PTZ camera with 360° pan and 90° tilt capability. AI-powered object tracking automatically follows moving subjects. Perfect for large property surveillance with preset patrol routes.",
    specs: {
      "Resolution": "4MP HD",
      "Pan Range": "360°",
      "Tilt Range": "90°",
      "Zoom": "20x Optical",
      "Protocol": "ONVIF Compatible",
      "Power": "24V AC / PoE+",
    },
    stock: 20,
    bestseller: false,
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 89,
    image: "/products/keyboard.svg",
    category: "Accessories",
    features: ["RGB Backlit", "Cherry MX Switches", "N-Key Rollover", "Aluminum Frame", "Detachable Cable", "Software Customization"],
    description: "Premium mechanical keyboard featuring genuine Cherry MX switches for the ultimate typing experience. Per-key RGB lighting with extensive customization options. Built to last with a solid aluminum frame.",
    specs: {
      "Switches": "Cherry MX Blue/Brown/Red",
      "Layout": "Full-size 104 keys",
      "Lighting": "Per-key RGB",
      "Connection": "USB-C Detachable",
      "Weight": "1.2 kg",
      "Dimensions": "440 × 135 × 40 mm",
    },
    stock: 100,
    bestseller: false,
  },
  {
    id: "gaming-mouse",
    name: "Gaming Mouse",
    price: 59,
    image: "/products/mouse.svg",
    category: "Accessories",
    features: ["16000 DPI Sensor", "Programmable Buttons", "Ergonomic Design", "RGB Lighting", "Onboard Memory", "Lightweight"],
    description: "High-precision gaming mouse with a 16000 DPI optical sensor for pixel-perfect accuracy. Ergonomic design reduces fatigue during long gaming sessions. Customizable RGB lighting syncs with your setup.",
    specs: {
      "Sensor": "16000 DPI Optical",
      "Buttons": "8 Programmable",
      "Weight": "95g",
      "Cable": "Braided USB",
      "Polling Rate": "1000Hz",
      "Grip": "Palm/Claw/Fingertip",
    },
    stock: 75,
    bestseller: false,
  },
  {
    id: "usb-c-hub",
    name: "USB-C Hub Pro",
    price: 49,
    image: "/products/keyboard.svg",
    category: "Accessories",
    features: ["7-in-1 Ports", "4K HDMI Output", "100W Power Delivery", "USB 3.0 x3", "SD/TF Card Slots", "Compact Design"],
    description: "Versatile USB-C hub with all the ports you need. 4K HDMI output for external displays, 100W power delivery for charging, and USB 3.0 ports for peripherals. Compact and travel-friendly.",
    specs: {
      "HDMI": "4K @ 30Hz",
      "USB-A": "3x USB 3.0",
      "Power Delivery": "100W",
      "Card Reader": "SD + TF",
      "Ethernet": "Gigabit",
      "Size": "115 × 55 × 15 mm",
    },
    stock: 60,
    bestseller: false,
  },
  {
    id: "ai-desktop-case",
    name: "AI Desktop Case",
    price: 299,
    image: "/products/ai-case.svg",
    category: "AI",
    features: ["GPU Optimized", "Superior Cooling", "Tool-free Design", "RGB Control", "Cable Management", "Dust Filters"],
    description: "High-performance desktop case designed for AI and machine learning workstations. Supports multiple GPUs with excellent airflow. Tool-free design makes upgrades a breeze.",
    specs: {
      "Form Factor": "E-ATX / ATX / mATX",
      "GPU Support": "Up to 4 GPUs",
      "Cooling": "Front: 3x140mm, Top: 2x140mm",
      "Storage": "2x 3.5\" + 4x 2.5\"",
      "Tempered Glass": "Side Panel",
      "Dimensions": "500 × 230 × 480 mm",
    },
    stock: 25,
    bestseller: true,
  },
  {
    id: "ai-solutions",
    name: "Custom AI Solutions",
    price: 0,
    image: "/products/ai-solutions.svg",
    category: "AI",
    features: ["Needs Assessment", "Solution Architecture", "Proof of Concept", "Implementation", "Training", "Ongoing Support"],
    description: "Let our AI experts design a custom solution tailored to your business needs. From initial consultation to deployment and beyond, we're with you every step of the way.",
    specs: {},
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
    features: ["Flexible Monthly Terms", "Full Maintenance", "24/7 Technical Support", "Upgrade Options", "Insurance Included", "Quick Setup"],
    description: "Rent AI computing equipment with flexible terms. Perfect for temporary projects or trying before buying. Includes full maintenance and support.",
    specs: {
      "Term": "Monthly",
      "Support": "24/7",
      "Maintenance": "Included",
      "Upgrades": "Available",
      "Insurance": "Included",
      "Setup Time": "3-5 days",
    },
    stock: 10,
    bestseller: false,
    isRental: true,
  },
];

// Generate static paths
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    notFound();
  }

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
            <Link href="/cart" className="hover:text-slate-900 transition">🛒</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-slate-700">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="aspect-square relative">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm text-blue-600 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-4">{product.name}</h1>
            
            <p className="text-4xl font-bold text-blue-600 mb-6">
              {product.price === 0 ? "Contact for Pricing" : `$${product.price}`}
              {product.isRental && <span className="text-lg text-slate-500 font-normal">/month</span>}
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-slate-900 mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 50 ? (
                <span className="text-green-600 font-medium">✓ In Stock</span>
              ) : product.stock > 0 ? (
                <span className="text-orange-500 font-medium">⚠ Only {product.stock} left</span>
              ) : (
                <span className="text-red-500 font-medium">✗ Out of Stock</span>
              )}
            </div>

            {/* Add to Cart Button */}
            {product.contactRequired ? (
              <Link 
                href="/contact"
                className="block w-full py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition text-lg"
              >
                Contact Us for Quote
              </Link>
            ) : (
              <Link 
                href={`/cart?add=${product.id}`}
                className="block w-full py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition text-lg"
              >
                Add to Cart
              </Link>
            )}

            {/* Shipping Info */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span>Free shipping over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <span>↩️</span>
                <span>30-day returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {Object.keys(product.specs).length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h2>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                      <td className="px-6 py-3 font-medium text-slate-900">{key}</td>
                      <td className="px-6 py-3 text-slate-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
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
