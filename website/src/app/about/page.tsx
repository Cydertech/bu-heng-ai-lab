import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "CyderTech is your trusted partner in tech solutions, delivering high-quality network cameras and computer accessories.",
};

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About CyderTech</h1>
          <p className="text-xl text-slate-600">Your Trusted Partner in Tech Solutions</p>
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-slate-700 leading-relaxed">
            CyderTech is your trusted partner in tech solutions, dedicated to delivering high-quality 
            network cameras and computer accessories. Our team is passionate about providing exceptional 
            installation services tailored to your needs.
          </p>
          <p className="text-slate-700 leading-relaxed">
            With a commitment to customer satisfaction, we ensure that every product we offer meets the 
            highest standards of quality and performance. Whether it's enhancing your home security or 
            upgrading your computer setup, CyderTech has the expertise to help you make the right choice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We believe that technology should be accessible and user-friendly, allowing you to enjoy the 
            benefits without the hassle. Join us on a journey to elevate your technology experience.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality First</h3>
            <p className="text-slate-600 text-sm">We source only the best products that meet our rigorous standards.</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Customer Focus</h3>
            <p className="text-slate-600 text-sm">Your satisfaction is our top priority in everything we do.</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation</h3>
            <p className="text-slate-600 text-sm">We stay ahead with the latest technology and AI solutions.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">10+</div>
              <div className="text-slate-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">5K+</div>
              <div className="text-slate-400 mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">100+</div>
              <div className="text-slate-400 mt-1">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">24/7</div>
              <div className="text-slate-400 mt-1">Support</div>
            </div>
          </div>
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
