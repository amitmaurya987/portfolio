'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Pay2Mobiles – Admin Panel',
      description:
        'Built comprehensive admin panel with user onboarding, dashboard analytics, permission management, and wallet transaction modules for a fintech platform.',
      tech: ['React.js', 'RTK', 'JavaScript', 'REST API'],
      contributions: [
        'Implemented role-based access control',
        'Created real-time dashboard with analytics',
        'Developed wallet transaction management system',
      ],
      link: 'https://pay2mobiles.com/',
    },
    {
      title: 'Pay2Mobiles – Retailer Panel',
      description:
        'Developed feature-rich retailer panel with mobile recharge, BBPS, AEPS, and DMT features using third-party APIs with real-time transaction tracking.',
      tech: ['React.js', 'Redux', 'JavaScript', 'Third-party APIs'],
      contributions: [
        'Integrated multiple payment gateway APIs',
        'Built transaction tracking and reporting system',
        'Implemented AEPS and DMT features',
      ],
      link: 'https://pay2mobiles.com/',
    },
    {
      title: 'TripScroll – Travel Booking Platform',
      description:
        'Built a comprehensive B2B/B2C travel booking platform supporting Hotels, Flights, Bus bookings, and Travel Insurance with real-time API integration.',
      tech: ['Next.js', 'TypeScript', 'SCSS', 'REST API'],
      contributions: [
        'Developed responsive booking interface',
        'Integrated real-time availability APIs',
        'Implemented multi-step booking flow',
      ],
      link: 'https://tripscroll.com/',
    },
    {
      title: 'Payout System',
      description:
        'Developed secure payout processing system for bulk and individual transactions via IMPS/NEFT with beneficiary management and downloadable reports.',
      tech: ['React.js', 'Redux', 'JavaScript'],
      contributions: [
        'Built secure transaction processing',
        'Implemented beneficiary management',
        'Created report generation system',
      ],
    },
    {
      title: 'Loan Application Portal',
      description:
        'Created a web portal for personal loan applications with smooth API integration, form validation, and document upload functionality.',
      tech: ['Next.js', 'Redux', 'TypeScript'],
      contributions: [
        'Implemented multi-step loan application form',
        'Added document upload and verification',
        'Integrated loan eligibility calculator',
      ],
    },
    {
      title: 'Business Checks Platform',
      description:
        'Designed modern frontend for a parliamentary checks platform with responsive design and interactive UI components.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      contributions: [
        'Created responsive landing pages',
        'Implemented interactive data visualizations',
        'Optimized for cross-browser compatibility',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Contributions:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.contributions.map((contribution, contIndex) => (
                      <li key={contIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
