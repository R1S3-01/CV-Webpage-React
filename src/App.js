import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

function App() {
  return (
    <main className="p-6 space-y-12 max-w-5xl mx-auto">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Joseph Garner</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Software Developer | AI Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a href="mailto:Joejgarner30@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/R1S3-01" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a
            href="https://leetcode.com/u/R1S3/"
            target="_blank"
            rel="noreferrer"
          >
            <Code />
          </a>
          <a
            href="http://www.linkedin.com/in/joseph-garner-09286b211"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </section>

      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I'm a passionate developer focused on AI and full-stack solutions. I
          love crafting tools that simplify complex problems and exploring new
          technologies in my spare time.
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python",
            "Java",
            "C#",
            "C++",
            "JavaScript",
            "Haskell",
            "SQL",
            "HTML/CSS",
          ].map((skill) => (
            <TiltCard
              key={skill}
              className="p-4 border rounded text-center font-medium"
            >
              {skill}
            </TiltCard>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <TiltCard as="li" className="border p-4 rounded">
            <strong>Connect Four AI:</strong> 6 AI models (Minimax, MCTS, Deep
            Q-Learning, etc.) with Elo ratings and game simulation UI.
          </TiltCard>
          <TiltCard as="li" className="border p-4 rounded">
            <strong>Pneumonia Detection:</strong> 7 AI models to diagnose
            pneumonia from x-rays. Includes CNN with performance comparison.
          </TiltCard>
          <TiltCard as="li" className="border p-4 rounded">
            <strong>Inventory & Payroll Apps:</strong> Bespoke, animated UI
            tools for inventory tracking and payroll processing at Aspects of
            Glass.
          </TiltCard>
          <TiltCard as="li" className="border p-4 rounded">
            <strong>Pricing Software:</strong> Intelligent estimator accounting
            for material cost, time, and complexity.
          </TiltCard>
        </ul>
      </motion.section>

      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-2">
          <h3 className="font-medium">
            Technical Engineer • Aspects of Glass Limited • May 2021 – Present
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Designing, developing and testing new software solutions for
              payroll, inventory management and pricing.
            </li>
            <li>Technical support both hardware and software related.</li>
            <li>Establishing and implementing new software.</li>
            <li>Aiding with general business operations.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Manchester Metropolitan University:</strong> BSc Computer
            Science, 1st Class, avg. 85% (Graduating July 2025)
          </li>
          <li>
            <strong>University of Manchester:</strong> 1st Year of BA Economics
            & Finance (2:1 avg)
          </li>
          <li>
            <strong>Carmel College:</strong> A-Levels: CS, English, Economics
            (All A)
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Email:{" "}
          <a className="text-blue-600" href="mailto:Joejgarner30@gmail.com">
            Joejgarner30@gmail.com
          </a>
        </p>
        <p>Location: St Helens, Eccleston</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => window.open("mailto:Joejgarner30@gmail.com")}
        >
          Get in Touch
        </button>
      </motion.section>
    </main>
  );
}

export default App;
