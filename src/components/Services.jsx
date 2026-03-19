import React from 'react'
import assets from '../assets/assets'

const Services = () => {
    const ServoceData = [
        {
            title: "Advertising",
            description: 'We turn bold ideas into powerful digital solutions that create, engage...',
            icon: assets.ads_icon
        },
         {
            title: "Content Marketing",
            description: 'We will help you execute plan and deliver results.',
            icon: assets.marketing_icon
        },
          {
            title: "Content writing",
            description: 'We help you create makering strategy that drives results.',
            icon: assets.content_icon
        },
           {
            title: "Social media",
            description: 'We help you build strong social media presence',
            icon: assets.social_icon
        },
    ]
  return (
      <div id = 'services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
          <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dakr:hidden' />
          <Title title='How can we Help' desc='From strategy to execution, we craft digital
          solutions that move your business forward.'/>
    </div>
  )
}

export default Services