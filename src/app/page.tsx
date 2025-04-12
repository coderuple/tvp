"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
  FaUserPlus,
  FaUniversity,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Logos() {
  return (
    <div className="container h-full m-auto flex justify-center  group-hover:paused">
      <div className="h-[100px] w-[300px] relative m-2 md:m-6">
        <Image
          src="/assets/images/logos/eu.svg"
          alt="EU"
          className="h-6 max-w-none"
          fill
        />
      </div>
      <div className="h-[100px] w-[300px] relative m-2 md:m-6">
        <Image
          src="/assets/images/logos/havard.svg"
          alt="EU"
          className="h-6 max-w-none"
          fill
        />
      </div>
      <div className="h-[100px] w-[300px] relative m-2 md:m-6">
        <Image
          src="/assets/images/logos/stanford.svg"
          alt="EU"
          className="h-6 max-w-none"
          fill
        />
      </div>
      <div className="h-[100px] w-[300px] relative m-2 md:m-6">
        <Image
          src="/assets/images/logos/york.svg"
          alt="EU"
          className="h-6 "
          fill
        />
      </div>
    </div>
  );
}

function Links() {
  return (
    <>
      <a href="#home" className="text-lg font-semibold">
        Home
      </a>
      <a href="#about" className="text-lg font-semibold">
        About
      </a>
      <a href="#features" className="text-lg font-semibold">
        Features
      </a>

      <a
        href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
        className="text-lg font-semibold"
      >
        Get Your EBook
      </a>
    </>
  );
}

function About({
  title,
  descriptions,
}: {
  title: string;
  descriptions: string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="p-12 rounded-2xl shadow-lg"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl lg:text-4xl font-semibold text-primary"
      >
        {title}
      </motion.h3>

      <div className="mt-4 list-disc">
        {descriptions.map((description: string, i: number) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="mt-6 lg:mt-8 text-lg text-secondary"
          >
            {description}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

function Feature({
  title,
  descriptions,
  icon: Icon,
}: {
  title: string;
  descriptions: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-50 p-12 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 rounded-full bg-secondary/10 transform transition-all duration-300 hover:scale-110 shrink-0"
        >
          <Icon className="text-4xl text-secondary" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl lg:text-4xl font-semibold text-primary"
        >
          {title}
        </motion.h3>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 list-disc pl-6"
      >
        {descriptions.map((description: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            className="mt-2 text-lg text-secondary"
          >
            {description}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="text-3xl lg:text-6xl font-bold text-center text-secondary mb-12"
    >
      {children}
    </motion.h2>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/logo.svg"
                alt="Qoollege"
                width={170}
                height={32}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Links />
            </nav>
            <div className="hidden md:block space-x-4">
              <Button
                // href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
                href="https://app.qoollege.com/login"
                variant={"outline"}
              >
                Login
              </Button>
              <Button
                // href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
                href="https://app.qoollege.com/register"
                variant={"secondary"}
              >
                Register
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="block text-gray-700 hover:text-primary focus:text-secondary focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <nav className="md:hidden mt-4 space-y-4 flex flex-col">
              <Links />

              <Button href="https://app.qoollege.com/login" variant={"outline"}>
                Login
              </Button>
              <Button
                href="https://app.qoollege.com/register"
                variant={"secondary"}
              >
                Register
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="bg-white py-12" id="home">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="flex flex-col lg:flex-row py-12">
                <div className="mt-4 basis-8/12">
                  <h1 className="text-5xl lg:text-7xl font-bold text-primary">
                    We Make Your
                    <br /> College Search{" "}
                    <span className="text-secondary">Easy</span>
                  </h1>
                </div>

                <div className="space-y-4  basis-4/12">
                  <p className="mt-4 text-xl">
                    Simplify your college search and get personalized
                    recommendations in just minutes.
                  </p>

                  <Button
                    isFull
                    href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
                  >
                    Join the waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="bg-primary opacity-10 w-full h-full absolute top-0 right-0"></div>

          <div className="bg-secondary rounded-full w-[60%] h-[200%] absolute top-0 right-0  "></div>
          <div className="flex  lg:flex-row py-20">
            <div className="aspect-square basis-1/4 relative bg-gray-100">
              <Image src={"/assets/images/st-1.png"} alt="image-1" fill />
            </div>
            <div className="aspect-square basis-1/4 relative bg-gray-100">
              <Image src={"/assets/images/st-2.png"} alt="image-1" fill />
            </div>
            <div className="aspect-square basis-1/4 relative bg-gray-100">
              <Image src={"/assets/images/st-3.png"} alt="image-1" fill />
            </div>
            <div className="aspect-square basis-1/4 relative bg-gray-100">
              <Image src={"/assets/images/st-4.png"} alt="image-1" fill />
            </div>
          </div>
        </section>

        <section className="bg-primary  relative ">
          <div className=" flex group container  items-center justify-between overflow-hidden bg-primary mx-auto px-4  lg:px-8 ">
            <div className=" group group-hover:paused animate-loop-scroll w-full  h-full">
              <Logos />
            </div>
            <div className="group group-hover:paused w-full animate-loop-scroll ">
              <Logos />
            </div>
            {/* <div className="animate-loop-scroll w-full">
              <Logos />
            </div> */}
          </div>
        </section>

        <section
          className="h-[480px] bg-cover bg-center lg:bg-fixed "
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        >
          <div></div>
        </section>
        <section className="relative py-12 lg:py-24" id="ebook">
          <div className="bg-primary opacity-10 w-full h-full absolute top-0 right-0  rounded-2xl -z-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold  text-secondary ">
                  {" "}
                  How to Find Your Perfect College Match Without the Stress!
                </h2>
                <p className="text-lg text-secondary font-semibold">
                  Feeling overwhelmed by the college search process? Our free
                  eBook shows how AI-powered tools can simplify everything from
                  finding the right school to managing applications and
                  financial aid
                </p>
                <ul className="mt-8 list-none space-y-4">
                  <li className="text-secondary text-base">
                    {" "}
                    Download now for practical insights and strategies to make
                    confident, informed decisions on your college journey!
                  </li>
                </ul>
                <Button
                  href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
                  className="mt-4"
                >
                  Grab Your EBook Now
                </Button>
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <div className="aspect-[0.71/1] basis-1/2 relative">
                    <Image
                      fill
                      src="/assets/images/ebook.jpg"
                      alt="ebook"
                      className="rounded-2xl aspect-auto shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-secondary relative py-12 lg:py-24 " id="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16  rounded-2xl ">
            <SectionHeader>Who We Are</SectionHeader>
            <div className="mt-8 lg:mt-14 bg-white z-30 relative  rounded-2xl  max-w-[1200px] m-auto  ">
              <About
                title=""
                descriptions={[
                  "At Qoollege, we believe every student deserves a seamless college admissions experience. Our AI-driven platform delivers personalized college recommendations, scholarship matches, and application tracking to guide you every step of the way.",
                  "With tailored insights based on your unique profile, Qoollege simplifies your path to higher education, helping you find the perfect school and explore financial aid opportunities. Trusted by students, counselors, and schools nationwide, we're here to make your college journey smarter and more successful.",

                  "Join our waitlist today and discover your path to college success!",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          className="h-[480px] bg-cover bg-center lg:bg-fixed "
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        >
          <div></div>
        </section>
        <section className="bg-white py-12 lg:py-24" id="features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <SectionHeader>Why Choose Us?</SectionHeader>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Feature
                icon={FaUserPlus}
                title="Seamless Registration & Onboarding"
                descriptions={[
                  "Quick sign-up with Google, Facebook, and Microsoft logins for easy access",
                  "Secure consent collection for privacy and minor access protection",
                  "Customizable parent & student profiles, including extracurriculars",
                  "Flexible payment options, including free accounts and 'Buy Now, Pay Later' plans",
                ]}
              />
              <Feature
                icon={FaUniversity}
                title="Personalized College Recommendations"
                descriptions={[
                  "AI-powered dashboard with tailored university suggestions based on your profile",
                  "Comprehensive comparison tools to evaluate universities side by side",
                  "Detailed university pages with key information, deadlines, and interest tracking",
                ]}
              />
              <Feature
                icon={FaFileAlt}
                title="Smart Document Management"
                descriptions={[
                  "Streamlined upload & management for essential documents like transcripts and recommendations",
                  "Secure storage for test scores (SAT, GRE, GMAT, TOEFL, IELTS)",
                  "Intelligent to-do lists with deadline tracking and milestone progress bars",
                  "Automated reminders via text & email for upcoming deadlines",
                ]}
              />
              <Feature
                icon={FaShieldAlt}
                title="Data Privacy & Security"
                descriptions={[
                  "End-to-end encryption ensuring your sensitive information stays protected",
                  "Secure OAuth authentication for safe and reliable logins",
                  "Role-based access control (RBAC) for parents & students",
                  "Comprehensive audit logs & governance policies for data protection",
                ]}
              />
            </div>
          </div>
        </section>

        {/* <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center">
              Simple and Transparent Pricing
            </h2>
            <div className="mt-8 flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="billing"
                  value="monthly"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Bill Monthly</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="billing"
                  value="annually"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Bill Annually</span>
              </label>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-semibold">Pro Account</h3>
                <p className="mt-2 text-gray-600">
                  Freedom with upgrading to HD video and adding more features
                  that suit your business needs.
                </p>
                <p className="mt-6 text-4xl font-bold text-blue-600">
                  $123<span className="text-lg font-normal">/month</span>
                </p>
                <a
                  href="#"
                  className="mt-4 block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
                >
                  Try 1 Month
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="h-[480px] bg-cover bg-center lg:bg-fixed "
          style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
        >
          <div></div>
        </section>
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col  justify-center items-center">
              <div className="basis-full">
                <h2 className="text-3xl lg:text-6xl font-bold text-center">
                  Be the First to Find Your Dream College!
                </h2>
              </div>

              <div className=" flex flex-col justify-center items-center">
                <p className="my-6 text-lg lg:text-xl text-center">
                  Ready to take the stress out of your college search? Join The
                  Qoollege waiting list and get early access to our AI-powered
                  platform. Discover personalized college matches, explore
                  scholarship opportunities, and streamline your applications —
                  all in one place.
                </p>
                <p className=" text-lg  lg:text-xl  text-center font-bold">
                  Sign up today to be the first to experience Qoollege and get
                  exclusive early-bird benefits!
                </p>
                <p className=" text-lg text-center lg:text-xl  font-bold">
                  Don&apos;t miss out — your future is waiting!
                </p>

                <Button
                  href="https://api.leadconnectorhq.com/widget/form/0Bi7lRORuc6ph34rFEyn"
                  variant={"white"}
                  className="mt-4"
                >
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 pt-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
            <div>
              <Image
                src="/assets/logo-inverted.svg"
                alt="Qoollege"
                width={170}
                height={70}
              />
            </div>

            <div>
              <p>Contact Us</p>

              <p>
                <a
                  className="underline text-white"
                  href="mailto:hello@qoollege.com"
                >
                  hello@qoollege.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-secondary rounded mt-12">
          <p className="text-sm text-center m-4">
            &copy; {new Date().getFullYear()} All rights reserved. Qoollege.
          </p>
        </div>
      </footer>
    </div>
  );
}
