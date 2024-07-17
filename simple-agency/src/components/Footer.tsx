import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-pink-400 md:text-3xl mb-8">
              Simple.
            </h1>
            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-md leading-6 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-pink-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
            <div className="flex items-start justify-start mt-6">
              <div className="mt-4 font-semibold text-white">Follow Us:</div>
              <div className="mt-4 leading-7 text-gray-400">
                <FontAwesomeIcon
                  className="ml-4 text-2xl hover:text-pink-400  transition-all ease-in-out duration-200"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="ml-4 text-2xl hover:text-pink-400  transition-all ease-in-out duration-200"
                  icon={faFacebook}
                />
                <FontAwesomeIcon
                  className="ml-4 text-2xl hover:text-pink-400  transition-all ease-in-out duration-200"
                  icon={faXTwitter}
                />
                <FontAwesomeIcon
                  className="ml-4 text-2xl hover:text-pink-400 transition-all ease-in-out duration-200"
                  icon={faLinkedin}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-3 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="mt-4 font-semibold text-white">Pages</div>
              <ul className="p-4 uppercase text-sm font-medium text-white">
                <li className="py-2 cursor-pointer">
                  <a
                    className="text-pink-500  ease-in-out duration-200"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="py-2 cursor-pointer">
                  <a
                    className="hover:text-pink-500  ease-in-out duration-200"
                    href="#"
                  >
                    Our Services
                  </a>
                </li>
                <li className="py-2 cursor-pointer">
                  <a
                    className="hover:text-pink-500  ease-in-out duration-200"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="py-2 cursor-pointer">
                  <a
                    className="hover:text-pink-500  ease-in-out duration-200"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>
                <li className="py-2 cursor-pointer">
                  <a
                    className="hover:text-pink-500  ease-in-out duration-200"
                    href="#"
                  >
                    Work With Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <div className="mt-2 font-semibold text-white">Our Address</div>
              <ul className="p-4 uppercase text-sm font-medium text-white">
                <li className="py-1 list-disc">Location: Milan, Italy</li>
                <li className="py-1 list-disc">Address: Via garibaldi, 20</li>
                <li className="py-1 list-disc">Email:simple.web@agency.com</li>
                <li className="py-1 list-disc">Tel:(+39)3920845628</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex items-center justify-center border-t-2 border-gray-500 mt-8 pt-4 mb-0 ">
        © 2024 Simple Agency, Inc. All rights reserved.
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
