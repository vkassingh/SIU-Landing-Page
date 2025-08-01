import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-25 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              What Our Students Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "The faculty support for research projects with industry
                collaborations has been exceptional."
              </p>
              <p className="font-medium text-blue-900">Rahul Sharma</p>
              <p className="text-sm text-pink-600">
                B.Tech Computer Science, 2022
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "Secured my dream job at a top IT company with the placement
                cell's guidance."
              </p>
              <p className="font-medium text-blue-900">Priya Patel</p>
              <p className="text-sm text-pink-600">MBA, 2021</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "Published multiple research papers with guidance from our
                award-winning faculty."
              </p>
              <p className="font-medium text-blue-900">Arjun Mehta</p>
              <p className="text-sm text-pink-600">PhD Research, 2023</p>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "The patent support team helped me file 3 patents during my
                engineering program."
              </p>
              <p className="font-medium text-blue-900">Neha Gupta</p>
              <p className="text-sm text-pink-600">M.Tech, 2022</p>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
