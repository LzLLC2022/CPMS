"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const moonshotItems = [
    {
      title: "Mission-Oriented Climate Innovation",
      desc: "CTAF focuses on solving urgent climate challenges with clear purpose, ambition, and measurable outcomes."
    },
    {
      title: "Frontier Climate Technologies",
      desc: "CTAF supports the application of emerging technologies such as AI, satellites, digital transformation, advanced semiconductors, NPU, CCUS, hydrogen, quantum and other future climate solutions."
    },
    {
      title: "Real-World Demonstration",
      desc: "CTAF moves beyond concepts and studies by testing technologies in real conditions, particularly through cooperation in developing countries as well as developed ones."
    },
    {
      title: "Transformative Innovation",
      desc: "CTAF seeks solutions that can go beyond small improvements and create new pathways for climate action, industry, and investment for participating countries."
    },
    {
      title: "Future-Oriented Demonstration Platform",
      desc: "CTAF connects governments, international organizations, research institutions, companies, and local partners to build scalable climate solutions for the future."
    },
    {
      title: "Global Partnership & Human Capacity Development",
      desc: "CTAF helps to advance global partnerships in future climate technologies and strengthen local country office capacity."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(moonshotItems.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prefix = formData.get("email-prefix") as string;
    const email = `${prefix}@gggi.org`;
    
    let role = "User";
    if (prefix === "test_rd") role = "Regional Director";
    if (prefix === "test_sec") role = "Secretariat";
    
    // Set mock login state and role
    localStorage.setItem("mockUserEmail", email);
    localStorage.setItem("mockUserRole", role);
    
    // Dispatch custom event to notify Header component in the same tab
    window.dispatchEvent(new Event("authStateChange"));
    
    // Redirect to home page
    router.push("/");
  };

  return (
    <div className="flex flex-1 w-full">
      {/* Left Side - Login Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Welcome to the CTAF Portal. Please login to your account.
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email-prefix"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="email-prefix"
                    id="email-prefix"
                    autoComplete="username"
                    defaultValue="test_rd"
                    required
                    className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 outline-none"
                    placeholder="email prefix (e.g. test_rd)"
                  />
                  <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm bg-gray-50 select-none">
                    @gggi.org
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue="password123"
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Information Carousel */}
      <div className="relative hidden w-0 flex-1 lg:block bg-gray-50 border-l border-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center px-12 xl:px-24">
          <h2 className="text-3xl font-bold mb-10 text-[#11B59F]">
            Climate Moonshot Approach
          </h2>
          
          <div className="w-full relative h-[380px]">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className={`absolute inset-0 flex flex-col gap-6 transition-opacity duration-1000 ${slideIndex === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                {moonshotItems.slice(slideIndex * 2, slideIndex * 2 + 2).map((item, idx) => (
                  <div key={idx} className="bg-[#11B59F] p-8 rounded-xl shadow-md text-white flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed text-[15px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-10 justify-center">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-[#11B59F]' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
