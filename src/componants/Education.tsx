'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Mangalayatan University',
      status: 'Ongoing',
      year: 'Expected 2026',
      description: 'Currently pursuing BCA with focus on software development and web technologies',
    },
    {
      degree: 'Polytechnic Diploma in Computer Science',
      institution: 'BTEUP, Lucknow',
      status: 'Completed',
      year: '2019',
      description: 'Specialized in computer science fundamentals and programming',
    },
    {
      degree: '10+2 (PCM)',
      institution: 'UP Board',
      status: 'Completed',
      year: '2015',
      description: 'Physics, Chemistry, and Mathematics',
    },
    {
      degree: '10th Standard',
      institution: 'UP Board',
      status: 'Completed',
      year: '2013',
      description: 'Secondary education with strong academic performance',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1"></div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center z-10 shadow-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{edu.year}</span>
                      <span
                        className={`ml-auto px-3 py-1 rounded-full text-xs ${
                          edu.status === 'Ongoing'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
