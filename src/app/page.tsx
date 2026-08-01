"use client";

export default function Home() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Coming Soon");
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
                    required
                    className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 outline-none"
                    placeholder="email"
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
                    required
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

      {/* Right Side - Information */}
      <div className="relative hidden w-0 flex-1 lg:block bg-primary-900">
        <div className="absolute inset-0 flex flex-col justify-center items-start px-20 xl:px-32 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <h2 className="text-4xl font-extrabold mb-8 text-primary-50">
            About CTAF
          </h2>
          <p className="text-lg leading-relaxed text-primary-100/90 text-justify">
            Established in 2026, the Climate Technology Accelerator Fund (CTAF)
            is a joint initiative between the Global Green Growth Institute (GGGI)
            and Korea’s Ministry of Science and ICT (MSIT). The fund matches
            South Korea’s advanced public climate technologies with global demand
            across GGGI’s overseas network to support international demonstration
            and localization. By bridging the gap between R&D and market entry,
            CTAF enhances the efficiency of green investments and drives the
            climate tech industry, directly contributing to the achievement of 2030
            Nationally Determined Contributions (NDCs). Through a KRW 21 billion
            commitment over seven years, the fund will support at least three
            global projects annually to accelerate high-impact climate solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
