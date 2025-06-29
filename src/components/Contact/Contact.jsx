import React from 'react'
import HowIWork from './HowIWork'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <section 
      id='contact'
      className="text-white mt-10 py-20 px-2 md:px-12 lg:px-24"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section - matching Services style */}
        <div className="text-center mb-16">
          <h3 className="text-cyan-400 md:text-lg font-semibold mb-4 tracking-wider">
            GET IN TOUCH
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
            Let's collaborProfessional ate and bring your ideas to life
          </h2>
        </div>

        {/* Content Grid - matching Services grid structure */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8 px-2 gap-y-8 md:gap-y-0 md:px-6">
          <div className="flex-1 w-full">
            <HowIWork />
          </div>
          <div className="flex-1 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact