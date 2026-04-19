import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-gray-900">
                GenZ Frontier
              </h1>
              <p className="text-xs text-gray-500">Tech News & Insights</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              Latest
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              Technology
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              Startups
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              Reviews
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
              <Search size={20} className="text-gray-600" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-600" />
              ) : (
                <Menu size={24} className="text-gray-600" />
              )}
            </button>

            <Button
              className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
              size="sm"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Latest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Technology
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Startups
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Reviews
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
