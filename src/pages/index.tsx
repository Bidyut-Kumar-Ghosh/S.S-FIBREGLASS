import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="S.S. Fibreglass Logo"
                width={50}
                height={50}
                priority
              />
              <span className="ml-3 text-xl font-bold text-blue-900">S.S. Fibreglass</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-blue-900">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Quality Fibreglass Solutions</h1>
              <p className="text-xl mb-8">Your trusted partner for all fibreglass products and custom solutions</p>
              <a href="#contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get a Quote
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/logo.svg"
                alt="S.S. Fibreglass Logo"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'P.P.G.L Tanks', description: 'High-quality, durable storage tanks' },
              { name: 'P.V.C Tanks', description: 'Chemical-resistant storage solutions' },
              { name: 'Barrels', description: 'Various sizes for different needs' },
              { name: 'Filters', description: 'Industrial-grade filtration systems' },
              { name: 'Doors', description: 'Custom fibreglass doors' },
              { name: 'G.I. Sheets', description: 'Premium quality sheets' },
              { name: 'Acid Tanks', description: 'Corrosion-resistant storage' },
              { name: 'Custom Solutions', description: 'Built to your specifications' },
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About S.S. Fibreglass</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            S.S. Fibreglass is a leading manufacturer of high-quality fibreglass products. 
            With years of experience in the industry, we specialize in creating durable, 
            reliable solutions for various industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">S.S. Fibreglass</h3>
              <p className="text-gray-400">Quality you can trust</p>
            </div>
            <div className="flex space-x-6">
              <a href="#products" className="hover:text-blue-400">Products</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} S.S. Fibreglass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
