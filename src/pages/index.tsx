import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Head>
        <title>S.S. Fibreglass - Manufacturing Excellence</title>
        <meta name="description" content="Manufacturer of high-quality fibreglass products and solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span>Email: contact@ssfibreglass.com</span>
              <span>|</span>
              <span>Phone: +91 XXXXX XXXXX</span>
            </div>
            <div className="hidden md:block">
              <button className="bg-white text-blue-900 px-4 py-1 rounded-full text-sm font-medium">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logo.svg" 
                alt="S.S. Fibreglass Logo" 
                width={60} 
                height={60}
                priority
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">S.S. Fibreglass</h1>
                <p className="text-gray-600 text-sm">Quality & Innovation</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900">About</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-900">Products</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-900">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70">
          <Image
            src="/images/hero-bg.jpg"
            alt="Manufacturing Facility"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-6">
              Leading Manufacturer of Fibreglass Products
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Delivering quality and innovation in fibreglass manufacturing since 1990
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                Explore Products
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Industry-leading quality standards in all our products</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround time and efficient delivery</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Storage Tanks', 'Chemical Tanks', 'Custom Solutions', 'Industrial Parts'].map((product) => (
              <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="/images/product-placeholder.jpg"
                    alt={product}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product}</h3>
                  <Link href="/products" className="text-blue-600 hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Leading manufacturer of high-quality fibreglass products with over 30 years of experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Industrial Area</li>
                <li>Kolkata, West Bengal</li>
                <li>Phone: +91 XXXXX XXXXX</li>
                <li>Email: contact@ssfibreglass.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday</li>
                <li>9:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} S.S. Fibreglass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

      {/* Header with Logo and Contact Info */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/temp-logo.png"
                  alt="S.S. Fibreglass Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-blue-900">S.S. Fibreglass</h1>
                <p className="text-gray-600 text-sm">Excellence in Fibreglass Manufacturing</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-700">Email: info@ssfibreglass.com</p>
              <p className="text-gray-700">Phone: +91-XXX-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center space-x-1 md:space-x-8">
            <li className="py-4"><Link href="/" className="hover:text-blue-200 px-3 py-2">Home</Link></li>
            <li className="py-4"><Link href="/about" className="hover:text-blue-200 px-3 py-2">Our Profile</Link></li>
            <li className="py-4"><Link href="/products" className="hover:text-blue-200 px-3 py-2">Products</Link></li>
            <li className="py-4"><Link href="/gallery" className="hover:text-blue-200 px-3 py-2">Gallery</Link></li>
            <li className="py-4"><Link href="/enquiry" className="hover:text-blue-200 px-3 py-2">Enquiry</Link></li>
            <li className="py-4"><Link href="/contact" className="hover:text-blue-200 px-3 py-2">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/temp-hero.jpg"
            alt="Fibreglass Manufacturing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Leading Manufacturer of Fibreglass Products
            </h2>
            <p className="text-xl mb-8">
              Specializing in high-quality fibreglass solutions for industrial and commercial applications
            </p>
            <Link href="/enquiry" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Welcome to S.S. Fibreglass</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg text-center mb-8">
              We at S.S. Fibreglass are dedicated to manufacturing and supplying premium quality fibreglass products that serve as essential materials for various industries. Our comprehensive range of quality products has established us as a leading name in both domestic and international markets.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Profile</h3>
                <p className="text-gray-700 mb-4">
                  S.S. Fibreglass is strategically located in [Location], specializing in manufacturing high-quality fibreglass products and custom solutions. Our state-of-the-art facility ensures top-notch quality and durability in every product.
                </p>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  Our mission is to deliver exceptional quality products and professional services to our valued customers. We aim to achieve total customer satisfaction by offering consistent quality at competitive prices and meeting all commitments.
                </p>
                <Link href="/about#vision" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-2">Email: info@ssfibreglass.com</p>
              <p className="mb-2">Phone: +91-XXX-XXX-XXXX</p>
              <p>Location: [Your Address]</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
                <li><Link href="/gallery" className="hover:text-blue-400">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Saturday</p>
              <p className="mb-4">9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-400">Closed on Sundays and Public Holidays</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} S.S. Fibreglass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
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
