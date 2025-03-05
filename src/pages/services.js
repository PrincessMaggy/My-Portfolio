import { useRouter } from "next/router";
import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "../styles/Services.module.scss";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

function Services() {
  const router = useRouter();
  const basePath = router.basePath || "";
  const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <Head>
        <title> Services </title>
        <meta name="description" content="Services - Edozie Magdalene" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${basePath}/assets/Logo.png`} />
      </Head>
      <Nav />
      <div className={styles.servicesMain} style={{ background: rootStyles }}>
        <motion.main
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Write.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Technical Writing</h3>
            </div>
            <p>
              Are you in need of clear, concise, and well-structured technical
              documentation? My technical writing service provides expertly
              crafted content that simplifies complex concepts and communicates
              your ideas effectively. Whether user manuals, API documentation,
              or technical guides, I ensure that your audience can easily grasp
              the information they need.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Write.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Project Management</h3>
            </div>
            <p>
              Efficient project management is key to delivering successful
              software solutions. I specialize in overseeing software
              development projects from planning to deployment, ensuring
              timelines, budgets, and deliverables are met. With expertise in
              Agile methodologies, stakeholder coordination, and risk
              management, I drive projects to completion while maintaining
              high-quality standards and seamless team collaboration.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Smartphone.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Responsive Web Design</h3>
            </div>
            <p>
              Having a responsive website is essential to reach a wider
              audience. My responsive design service ensures that your website
              adapts seamlessly to different screen sizes, from desktops to
              smartphones and everything in between. With my expertise in modern
              web technologies, I create visually stunning and user-friendly
              websites that provide an optimal viewing experience on any device.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Coach.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Coaching and Mentorship</h3>
            </div>
            <p>
              Looking to level up your frontend development skills? My frontend
              coaching service offers personalized, one-on-one guidance to help
              you become a proficient web developer. Whether you are a beginner
              or an experienced developer seeking to expand your knowledge, I
              tailor my approach to your learning style and goals.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Monitor.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Software Development</h3>
            </div>
            <p>
              As an experienced developer, I can build custom software solutions
              tailored to your unique needs and requirements. I take pride in
              delivering high-quality, scalable, and reliable products.
              Collaborate with me through every step of the development process,
              from ideation and design to testing and deployment.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Program.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>Talent Management</h3>
            </div>
            <p>
              As a talent manager, I create and manage the onboarding, training,
              and evaluation processes for new hires, instructors, and coaches.
              I also develop and implement strategies for talent acquisition and
              development, achieving high rates of job placement and internship
              opportunities for our students in my organisation.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={item}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div>
              <Image
                src={`${basePath}/assets/Responsive.svg`}
                width={40}
                height={40}
                alt="img"
              />
              <h3>power apps and automate</h3>
            </div>
            <p>
              Empower your business with custom apps tailored to your specific
              needs using Microsoft Power Apps. My Power Apps service allows you
              to create intuitive and feature-rich applications without the need
              for extensive coding. Whether you need a productivity tool, a data
              entry solution, or a customer-facing app, I can build it using the
              Power Apps platform.
            </p>
          </motion.div>
        </motion.main>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
