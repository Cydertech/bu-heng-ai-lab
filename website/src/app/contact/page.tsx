import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with CyderTech for network cameras, computer accessories, and AI solutions.",
};

export default function ContactPage() {
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
            <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-600">We'd love to hear from you. Let's talk about your tech needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Product Inquiry</option>
                  <option>Service Quote</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">Visit our showroom for hands-on demos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@cydertech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/products" className="block text-blue-600 hover:underline">→ Browse Products</Link>
                <Link href="/services" className="block text-blue-600 hover:underline">→ Our Services</Link>
                <Link href="/about" className="block text-blue-600 hover:underline">→ About CyderTech</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
          <p className="text-slate-500">📍 Map Coming Soon</p>
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
