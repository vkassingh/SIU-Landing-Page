import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, FileText, Mail, Phone, Users } from 'lucide-react'

export default function ApplicationSection() {
  return (
   <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              How to Apply
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Follow these simple steps to begin your journey at Saroj
              International University
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Online Application
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fill out our online application form with your personal and
                academic details.
              </p>
              <button className="flex items-center text-blue-600 font-medium">
                Start Application <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Document Submission
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Upload scanned copies of your academic transcripts and
                identification documents.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-2" />
                <span>PDF, JPG, or PNG formats</span>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 text-purple-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Application Review
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our admissions team will review your application within 5-7
                working days.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span>Expert evaluation</span>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 text-yellow-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Admission Offer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Successful applicants will receive an offer letter via email.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <span>Digital & physical copies</span>
              </div>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Have questions about the application process?
            </p>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all flex items-center mx-auto w-fit" href="tel:+919513731275">
              <Phone className="w-5 h-5 mr-2" />
              Contact Admissions
            </a>
          </motion.div>
        </div>
      </section>
)
}
