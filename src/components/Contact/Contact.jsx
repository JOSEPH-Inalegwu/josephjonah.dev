import React from 'react'
import HowIWork from './HowIWork'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <section className='mt-10 py-20 px-2 md:px-12 lg:px-24'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16'>
            <div className='flex-1 w-full'>
                <HowIWork />
            </div>
            <div className='flex-1 w-full'>
                <ContactForm />
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact