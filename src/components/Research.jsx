import React from 'react'
import { motion } from 'framer-motion'

export default function Research() {
  return (
 <section className="relative bg-gradient-to-br from-blue-900 to-violet-700 text-white py-20 px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light tracking-wider">
                RESEARCH EXCELLENCE
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Join Our Pioneering <br /> Research Community
              </h2>
              <p className="text-lg text-blue-100 max-w-lg">
                At Saroj International University, we're shaping the future
                through groundbreaking discoveries.
              </p>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  SAROJ RESEARCH INITIATIVES
                </h3>
                <p className="text-blue-100">
                  Recognized by the Ministry of Education for excellence in
                  Sustainable Energy and Environmental Research
                </p>
              </div>

              <div className="mb-6">
                <p className="text-blue-100">
                  Our faculty includes 12 Awardees and 65 Fellows of National
                  Academies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="text-3xl font-bold mb-1">40K+</h4>
                  <p className="text-sm text-blue-100">
                    National Ranking for Patents
                  </p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-1">Recognized by</h4>
                  <p className="text-sm text-blue-100">Government of India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
)
}
