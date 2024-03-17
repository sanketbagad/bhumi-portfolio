"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { LampContainer } from "./Lamp";
import { motion } from "framer-motion";
import { Boxes } from "./BackGroundBoxes";
import { TypewriterEffectSmooth } from "./TypeWriter";
import { TextGenerateEffect } from "./TextGenerate";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structures and Algorithm</li>
        <li>Python</li>
        <li>C++</li>
        <li>Java</li>
        <li>AI/Machine Learning</li>
        <li>Web Development</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SSC: Jijamata Kanya Vidyalaya,Deola 92%</li>
        <li>HSC: KAANMS College, Satana 89%</li>
        <li>BE Computer: SNJB Late Sau KBJ CoE,Chandwad 8.3 CGPA</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics Professional Certificate</li>
        <li>Google Crash Course on Python</li>
        <li>Google Cyber Security</li>
        <li>Udemy: HTML and CSS Basics to Advance</li>
        <li>Udemy: 100 Days of Python</li>
        <li>Udemy: MySQL and MongoDB</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const words = [
    {
      text: "Here's",
      className: "text-white dark:text-white",
    },
    {
      text: "Something",
      className: "text-white dark:text-white",
    },
    {
      text: "More",
      className: "text-white dark:text-white",
    },
    {
      text: "About",
      className: "text-white dark:text-white",
    },
    {
      text: "Me",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const generateWords =
    "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,Sequelize, HTML, CSS, and Git. I am a quick learner and I am alwayslooking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.";

  return (
    <section className="text-white" id="about">
      <div className="hidden sm:block">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <TypewriterEffectSmooth words={words} />
          </motion.h1>
        </LampContainer>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Bhumi" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 lg:hidden">
            <TypewriterEffectSmooth words={words} />
          </h2>
          {/* <p className="text-base lg:text-lg"> */}
           <TextGenerateEffect words={generateWords} />
          {/* </p> */}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
