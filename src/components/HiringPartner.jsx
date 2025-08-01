import React from 'react'

export default function HiringPartner() {
  return (
    <section className="py-16 bg-gray-50 h-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Hiring Partners
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations that recruit Saroj University graduates
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 rounded-lg shadow-md border border-gray-200 ">
            {[
              { name: "TCS", logo: "/logos/tcs.png" },
              { name: "Infosys", logo: "/logos/infosys.png" },
              { name: "Wipro", logo: "/logos/wipro.png" },
              { name: "Amazon", logo: "/logos/amazon.png" },
              { name: "Microsoft", logo: "/logos/microsoft.png" },
              { name: "HCL", logo: "/logos/hcl.png" },
              { name: "", logo: "/logos/accenture.png" },
              { name: "", logo: "/logos/capgemini.png" },
              { name: "", logo: "/logos/deloitte.png" },
              { name: "", logo: "/logos/tech_mahindra.png" },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white p-4  flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 object-cover transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
