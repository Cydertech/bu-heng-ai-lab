import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const products = [
    { name: "Indoor WiFi Camera", image: "/products/indoor-camera.svg", price: "$79" },
    { name: "Outdoor Security Camera", image: "/products/outdoor-camera.svg", price: "$129" },
    { name: "AI Desktop Case", image: "/products/ai-case.svg", price: "$299" },
    { name: "Mechanical Keyboard", image: "/products/keyboard.svg", price: "$89" },
  ];

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
            <Link href="/cart" className="hover:text-slate-900 transition text-lg">🛒</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Cyder Cable<br />
              <span className="text-blue-600">Home Security</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              At CyderTech, we specialize in providing top-notch network cameras 
              and computer accessories, ensuring you get the best technology for your needs.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/products" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/hero/main.svg" 
              alt="CyderTech Security Solutions" 
              width={600} 
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition group">
                <div className="aspect-square bg-slate-100 relative">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-blue-600 font-bold text-lg">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="text-blue-600 font-medium hover:underline">
              View All Products →
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10 mb-20 text-center">
          <blockquote className="text-2xl font-medium mb-6 leading-relaxed max-w-2xl mx-auto">
            "I was impressed by the professionalism of CyderTech. Their installation 
            service was quick and efficient, and the products exceeded my expectations. 
            Highly recommend!"
          </blockquote>
          <p className="text-blue-200 text-lg">— John Doe</p>
        </div>

        {/* About Preview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">10+</div>
                <div className="text-slate-400 mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">5K+</div>
                <div className="text-slate-400 mt-1">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">100+</div>
                <div className="text-slate-400 mt-1">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">24/7</div>
                <div className="text-slate-400 mt-1">Support</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About CyderTech</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              CyderTech is your trusted partner in tech solutions, dedicated to delivering 
              high-quality network cameras and computer accessories. Our team is passionate 
              about providing exceptional installation services tailored to your needs.
            </p>
            <Link 
              href="/about" 
              className="text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">CyderTech</h3>
              <p className="text-slate-600 text-sm">Your trusted partner in tech solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Products</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><Link href="/products#cameras" className="hover:text-slate-900">Network Cameras</Link></li>
                <li><Link href="/products#accessories" className="hover:text-slate-900">Computer Accessories</Link></li>
                <li><Link href="/products#ai" className="hover:text-slate-900">AI Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Services</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><Link href="/services#installation" className="hover:text-slate-900">Installation</Link></li>
                <li><Link href="/services#maintenance" className="hover:text-slate-900">Maintenance</Link></li>
                <li><Link href="/services#consulting" className="hover:text-slate-900">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><Link href="/contact" className="hover:text-slate-900">Get in Touch</Link></li>
                <li><Link href="/support" className="hover:text-slate-900">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 text-center text-slate-500 text-sm">
            <p>© 2026 CyderTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
