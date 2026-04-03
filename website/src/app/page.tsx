import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Cyder Cable Home Security
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            At CyderTech, we specialize in providing top-notch network cameras and computer accessories, 
            ensuring you get the best technology for your needs. Our installation services make it easy and hassle-free.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-lg"
            >
              Shop Now
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Bestsellers */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Bestsellers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Basic Installation</h3>
              <p className="text-slate-600 text-sm text-center mb-3">Professional installation service for all your equipment needs.</p>
              <p className="text-blue-600 font-semibold text-center">$99</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🖥️</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">AI Desktop Case</h3>
              <p className="text-slate-600 text-sm text-center mb-3">High-performance desktop case designed for AI computing.</p>
              <p className="text-blue-600 font-semibold text-center">$299</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Custom AI Solutions</h3>
              <p className="text-slate-600 text-sm text-center mb-3">Tailored AI project solutions for your business needs.</p>
              <p className="text-blue-600 font-semibold text-center">Contact Us</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">AI Equipment Rental</h3>
              <p className="text-slate-600 text-sm text-center mb-3">AI equipment rental and maintenance service for businesses.</p>
              <p className="text-blue-600 font-semibold text-center">Get Quote</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10 mb-24 text-center">
          <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
            "I was impressed by the professionalism of CyderTech. Their installation service was quick and efficient, 
            and the products exceeded my expectations. Highly recommend!"
          </blockquote>
          <p className="text-blue-200 text-lg">— John Doe</p>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Upgrade Your Tech Today!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Explore our premium network cameras and accessories that enhance security and productivity.
          </p>
          <Link 
            href="/products" 
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition text-lg"
          >
            Browse Products
          </Link>
        </div>

        {/* About Section */}
        <div className="border border-slate-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">About Us</h2>
          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
            CyderTech is your trusted partner in tech solutions, dedicated to delivering high-quality network cameras 
            and computer accessories. Our team is passionate about providing exceptional installation services tailored 
            to your needs. With a commitment to customer satisfaction, we ensure that every product we offer meets the 
            highest standards of quality and performance. Whether it's enhancing your home security or upgrading your 
            computer setup, CyderTech has the expertise to help you make the right choice. We believe that technology 
            should be accessible and user-friendly, allowing you to enjoy the benefits without the hassle. Join us on a 
            journey to elevate your technology experience.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 mt-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">CyderTech</h3>
              <p className="text-slate-600 text-sm">Your trusted partner in tech solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Products</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><Link href="/products/cameras" className="hover:text-slate-900">Network Cameras</Link></li>
                <li><Link href="/products/accessories" className="hover:text-slate-900">Computer Accessories</Link></li>
                <li><Link href="/products/ai" className="hover:text-slate-900">AI Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Services</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><Link href="/services/installation" className="hover:text-slate-900">Installation</Link></li>
                <li><Link href="/services/maintenance" className="hover:text-slate-900">Maintenance</Link></li>
                <li><Link href="/services/consulting" className="hover:text-slate-900">Consulting</Link></li>
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
