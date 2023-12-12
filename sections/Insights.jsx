'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer,fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";
import { TypingText, StartSteps, TitleText, NewFeatures, InsightCard } from "../components";
import { insights, newFeatures } from "../constants"

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto gap-8`}
    >
      <TypingText title={"Insight"} textStyles={"text-center"}/>
      <TitleText title={"Insight about metaverse"} textStyles={"text-center"}/>
      <div
        className="mt-[50px] flex flex-col gap-[30px]"
      >
        {
          insights.map((insight, index) => (
            <InsightCard key={`${index}-insight`} {...insight}
            index={index+1} />
          ))
        }
      </div>
    </motion.div>
  </section>
);

export default Insights;
