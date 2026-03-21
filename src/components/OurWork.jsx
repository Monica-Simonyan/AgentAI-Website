import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'
const OurWork = () => {
    const workData = [
        {
            title: 'Mobila app marketing',
            description: 'We turn bold ideas into powerful digital solutions that create, engage...',
            image: assets.work_mobile_app
        },
          {
            title: 'Dashboard management',
            description: 'We will help you execute plan and deliver results.',
            image: assets.work_dashboard_management
        }, 
            {
            title: 'Fitness ap promotion',
            description: 'We help you build strong social media presence',
            image: assets.work_fitness_app
        },
        
    ]
  return ( 
      <motion.div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12
      lg:pc-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{staggerChildren:0.2}}>
          <Title title='Our latest Work' desc='From strategy to execution, we craft digital solutions
          that move your business forward.'/>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
              {workData.map((work, index) => (
                  <motion.div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'
         initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,delay:0.2}}
          viewport={{once:true}}>
                      <img src={work.image} className='w-full rounded-xl ' />
                      <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                      <p className='text-sm opacity-60 w-5/6'>{ work.description}</p>
                  </motion.div>
              ))}
          </div>
    </motion.div>
  )
}

export default OurWork