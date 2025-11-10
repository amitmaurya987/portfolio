'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">
              Amit Kumar
            </h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer specializing in React.js, Next.js, and TypeScript.
              Building modern web applications with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/amit-kumar-37927b2b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/amitkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:amitkumarmaurya2607@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              📍 Gurugram, India
              <br />
              📧 amitkumarmaurya2607@gmail.com
              <br />
              📞 +91 6387421303
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Amit Kumar.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
