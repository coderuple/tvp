"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Logos() {
  return (
    <div className=" w-full  h-full m-auto flex justify-center space-x-6  group-hover:paused">
      <div className="aspect-square basis-3/12 relative m-6">
        <Image
          src="/assets/images/logos/eu.svg"
          alt="EU"
          className="h-6"
          fill
        />
      </div>
      <div className="aspect-square basis-3/12 relative m-6">
        <Image
          src="/assets/images/logos/havard.svg"
          alt="EU"
          className="h-6"
          fill
        />
      </div>
      <div className="aspect-square basis-3/12 relative m-6">
        <Image
          src="/assets/images/logos/stanford.svg"
          alt="EU"
          className="h-6"
          fill
        />
      </div>
      <div className="aspect-square basis-3/12 relative m-6">
        <Image
          src="/assets/images/logos/york.svg"
          alt="EU"
          className="h-6"
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
  return (
    <div className="p-12 rounded-2xl shadow-lg ">
      <h3 className="text-2xl lg:text-4xl font-semibold text-primary">
        {title}
      </h3>

      <div className="mt-4 list-disc">
        {" "}
        {descriptions.map((description: string, i: number) => (
          <p key={i} className="mt-6 lg:mt-8  text-lg text-secondary">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}
function Feature({
  title,
  descriptions,
}: {
  title: string;
  descriptions: string[];
}) {
  return (
    <div className="bg-gray-50 p-12 rounded-2xl shadow-lg ">
      <h3 className="text-2xl lg:text-4xl font-semibold text-primary">
        {title}
      </h3>

      <ul className="mt-4 list-disc">
        {" "}
        {descriptions.map((description: string, i: number) => (
          <li key={i} className="mt-2 text-lg text-secondary">
            {description}
          </li>
        ))}
      </ul>
    </div>
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
                alt="The Varsity Pathway"
                width={170}
                height={32}
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Links />
            </nav>
            <div className="hidden md:block">
              <Button href="/" variant={"secondary"}>
                Join the waitlist
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

              <Button href="/" variant={"outline"}>
                Join the waitlist
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

                  <Button isFull href="">
                    {" "}
                    Join the waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="bg-primary opacity-10 w-full h-full absolute top-0 right-0"></div>

          <div className="bg-secondary w-[38%] h-[200%] absolute top-0 -right-40 rotate-45"></div>
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

        <section className="bg-secondary h-[200px] ">
          <div className="  flex group container h-full items-center justify-between overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
            <Logos />
          </div>
        </section>

        <section
          className="h-[480px] bg-cover bg-center bg-fixed "
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        >
          <div></div>
        </section>
        <section className="relative py-12 lg:py-24" id="ebook">
          <div className="bg-primary opacity-10 w-full h-full absolute top-0 right-0 -z-0 rounded-2xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold  text-secondary ">
                  {" "}
                  Download Your FREE College Application Checklist!
                </h2>
                <p className="text-lg text-secondary font-semibold">
                  Get Organized and Stay on Track with Your College
                  Applications!
                </p>
                <ul className="mt-8 list-none space-y-4">
                  <li className="text-secondary text-base">
                    {" "}
                    ✔️ Keep track of important deadlines for each school.
                  </li>
                  <li className="text-secondary text-base">
                    {" "}
                    ✔️ Know exactly what documents you need to gather.
                  </li>
                  <li className="text-secondary text-base">
                    {" "}
                    ✔️ Stay on top of application tasks like essays,
                    <br />
                    recommendation letters, and transcripts.
                  </li>
                  <li className="text-secondary text-base">
                    {" "}
                    ✔️ Feel confident that you’re covering all your bases
                  </li>
                </ul>
                <Button href="/" className="mt-4">
                  Download Now
                </Button>
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <div className="aspect-[0.71/1] basis-1/2 relative">
                    <Image
                      fill
                      src="/assets/images/tvp-ebook.png"
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
            <h2 className="text-3xl lg:text-6xl font-bold text-center text-white">
              Who We Are
            </h2>
            <div className="mt-8 lg:mt-14 bg-white z-30 relative  rounded-2xl  max-w-[1200px] m-auto  ">
              <About
                title=""
                descriptions={[
                  "At The Varsity Pathway (TVP), we believe that every student deserves the opportunity to find their perfect college match and navigate the admissions process with confidence. Our platform harnesses the power of advanced AI technology to deliver personalized college recommendations, scholarship opportunities, and comprehensive application tracking—all designed to make your college journey easier and more successful.",

                  "With TVP, we’ve reimagined the way students approach their educational future. Our AI-driven platform analyzes your unique academic profile, interests, and goals to provide tailored guidance every step of the way. Whether you’re looking for the right school, managing your applications, or exploring financial aid options, we’re here to ensure you have all the tools you need to succeed.",

                  "We’re trusted by thousands of students, counselors, and schools across the country because we provide a smarter, more efficient way to plan for higher education. Our mission is simple: to empower students to achieve their dreams by simplifying the college admissions process through cutting-edge technology, personalized insights, and user-friendly tools",

                  "Join us today, and let TVP help you discover your path to college success.",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          className="h-[480px] bg-cover bg-center bg-fixed "
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        >
          <div></div>
        </section>
        <section className="bg-white py-12 lg:py-24" id="features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <h2 className="text-3xl lg:text-6xl font-bold text-center text-secondary">
              Why Choose Us?
            </h2>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Feature
                title="College Search & Personalization."
                descriptions={[
                  "Application Tracking: Easily track deadlines, required documents, and your overall application status, all in one place.",
                  "Document Management: Upload and manage your documents securely, ensuring you never miss a submission.",
                ]}
              />
              <Feature
                title="Scholarship Search & Financial Aid."
                descriptions={[
                  "Scholarship Search: Discover scholarships that align with your profile and academic goals, making college more affordable",
                  "Financial Aid Integration: Access financial aid calculators and tools to understand how to fund your college journey",
                ]}
              />
              <Feature
                title="Data & Insights."
                descriptions={[
                  "Data Management & Analytics: A powerful framework for collecting and analyzing data to provide actionable insights.",
                  "Data Visualization & Reporting: Track key metrics through user-friendly dashboards and reports, providing valuable insights for stakeholders.",
                ]}
              />
              <Feature
                title="Community & Engagement."
                descriptions={[
                  "Community Building & Engagement: Join a supportive online community where students and parents can share experiences, ask questions, and help each other.",
                  "User Reviews & Ratings: Check out reviews and ratings from other students to help you make informed decisions about colleges.",
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
          className="h-[480px] bg-cover bg-center bg-fixed "
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
                  Varsity Pathway (TVP) waiting list and get early access to our
                  AI-powered platform. Discover personalized college matches,
                  explore scholarship opportunities, and streamline your
                  applications — all in one place.
                </p>
                <p className=" text-lg  lg:text-xl  text-center font-bold">
                  Sign up today to be the first to experience TVP and get
                  exclusive early-bird benefits!
                </p>
                <p className=" text-lg text-center lg:text-xl  font-bold">
                  Don’t miss out — your future is waiting!
                </p>

                <Button href="/" variant={"white"} className="mt-4">
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
                alt="The Varsity Pathway"
                width={170}
                height={70}
              />
            </div>

            <div>
              <p>Contact Us</p>

              <p>Email: hello@thevarsitypathway.io</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-secondary rounded mt-12">
          <p className="text-sm text-center m-4">
            &copy; 2024 All rights reserved. The Varsity Pathway.
          </p>
        </div>
      </footer>
    </div>
  );
}
