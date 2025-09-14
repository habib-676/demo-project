import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

// ModernFooterComponent.jsx
// Props: logoSrc (string), logoAlt (string), accentColor (Tailwind color class e.g. 'from-sky-400'), year (number/string)
// Usage: <Footer logoSrc="/logo.png" logoAlt="My Company" accentColor="from-purple-500" year={2025} />

export default function Footer({
  logoSrc = "/logo.svg",
  logoAlt = "Company logo",
  accentColor = "from-indigo-500",
  year = new Date().getFullYear(),
}) {
  const linkVariants = {
    hidden: { opacity: 0, y: 6 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, ease: "easeOut" },
    }),
  };

  return (
    <footer className="bg-gradient-to-r to-gray-900 via-neutral-900 from-neutral-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand + Social + Tagline */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-12 w-12 rounded-xl object-cover shadow-lg ring-1 ring-white/10"
              />
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{logoAlt}</h3>
                <p className="text-sm text-gray-400">Modern interfaces & honest engineering</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-400 max-w-md">
              We design and build fast, accessible, and delightful digital experiences for web and mobile.
              Reach out to collaborate or just say hi.
            </p>

            <div className="mt-6 flex items-center gap-3" aria-label="social links">
              <a
                href="#"
                className="group p-2 rounded-md bg-white/3 hover:bg-white/6 transition-shadow"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center"
                >
                  <Facebook size={18} />
                </motion.span>
              </a>

              <a
                href="#"
                className="group p-2 rounded-md bg-white/3 hover:bg-white/6 transition-shadow"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Twitter size={18} />
                </motion.span>
              </a>

              <a
                href="#"
                className="group p-2 rounded-md bg-white/3 hover:bg-white/6 transition-shadow"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Linkedin size={18} />
                </motion.span>
              </a>

              <a
                href="#"
                className="group p-2 rounded-md bg-white/3 hover:bg-white/6 transition-shadow"
                aria-label="Email"
                rel="noopener noreferrer"
              >
                <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Mail size={18} />
                </motion.span>
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 md:max-w-lg">
            <div>
              <h4 className="text-sm font-semibold text-gray-300">Product</h4>
              <nav className="mt-3 flex flex-col gap-2">
                {[
                  "Features",
                  "Pricing",
                  "Integrations",
                  "Changelog",
                ].map((txt, idx) => (
                  <motion.a
                    key={txt}
                    custom={idx}
                    variants={linkVariants}
                    initial="hidden"
                    animate="show"
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative inline-block before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:to-white before:from-transparent before:transition-all before:duration-300 hover:before:w-full"
                    rel="noopener noreferrer"
                  >
                    {txt}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300">Company</h4>
              <nav className="mt-3 flex flex-col gap-2">
                {[
                  "About",
                  "Careers",
                  "Blog",
                  "Press",
                ].map((txt, idx) => (
                  <motion.a
                    key={txt}
                    custom={idx}
                    variants={linkVariants}
                    initial="hidden"
                    animate="show"
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative inline-block before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:to-white before:from-transparent before:transition-all before:duration-300 hover:before:w-full"
                    rel="noopener noreferrer"
                  >
                    {txt}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300">Support</h4>
              <nav className="mt-3 flex flex-col gap-2">
                {[
                  "Docs",
                  "Community",
                  "Contact",
                  "Status",
                ].map((txt, idx) => (
                  <motion.a
                    key={txt}
                    custom={idx}
                    variants={linkVariants}
                    initial="hidden"
                    animate="show"
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative inline-block before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:to-white before:from-transparent before:transition-all before:duration-300 hover:before:w-full"
                    rel="noopener noreferrer"
                  >
                    {txt}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter + small print */}
        <div className="mt-10 border-t border-white/6 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1 min-w-0">
            <h5 className="text-sm font-semibold text-gray-200">Stay in the loop</h5>
            <p className="text-sm text-gray-400 mt-1">Join our newsletter for product updates and design tips.</p>

            <form className="mt-4 max-w-md">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex items-center gap-2">
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-white/6 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
                <button
                  type="submit"
                  className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r ${accentColor} to-indigo-600 shadow-md hover:scale-[1.02] active:scale-95 transition-transform`}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="text-sm text-gray-400 md:text-right">
            <p>&copy; {year} {logoAlt}. All rights reserved.</p>
            <p className="mt-1">Designed with ❤️ · Built with React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
