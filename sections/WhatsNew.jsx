'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer,fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";
import { TypingText, StartSteps, TitleText, NewFeatures } from "../components";
import { newFeatures } from "../constants"

const WhatsNew = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row
      flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right','tween', 0.2, 1)}
        className='flex-[0.75] flex flex-col justify-center'
      >
        <TypingText 
          title="| Whats New?"
        />
        <TitleText
          title="What's new about Metaversus?"
        />
        <div
          className="flex flex-wrap justify-between
          mt-[31px] gap-[20px]"
        >
        {
          newFeatures.map(({title, subtitle, imgUrl}) => (
            <NewFeatures
              key={title}
              title={title}
              subTitle={subtitle}
              imgUrl={imgUrl}
            />
          ))
        }
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
          src='/whats-new.png'
          alt="get-started"
          className='w-[90%] h-[90%] obj-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
