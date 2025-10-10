import { useState, useEffect, Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoV2 from "../assets/logoV2.svg";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navigation.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed inset-x-0 top-0 z-50 bg-gray-800/30 backdrop-blur-md shadow transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  <div className="grid justify-items-center gap-1.5">
                    <span
                      className={`h-1 w-8 rounded-full bg-current transform transition duration-300 ${
                        open ? "rotate-45 translate-y-2.5" : ""
                      }`}
                    />
                    <span
                      className={`h-1 w-8 rounded-full bg-current transform transition duration-300 ${
                        open ? "opacity-0" : ""
                      }`}
                    />
                    <span
                      className={`h-1 w-8 rounded-full bg-current transform transition duration-300 ${
                        open ? "-rotate-45 -translate-y-2.5" : ""
                      }`}
                    />
                  </div>
                </DisclosureButton>
              </div> */}

              {/* Logo & Desktop Nav */}
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="#intro">
                    <img
                      src={logoV2}
                      alt="SK Logo"
                      className="h-8 w-auto cursor-pointer ml-2"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const sectionId = item.href.slice(1);
                      const isActive = activeSection === sectionId;
                      return (
                        <button
                          key={item.name}
                          onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById(sectionId);
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          aria-current={isActive ? "page" : undefined}
                          className={classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="/portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="scale-y-0 opacity-0"
            enterTo="scale-y-100 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="scale-y-100 opacity-100"
            leaveTo="scale-y-0 opacity-0"
          >
            <DisclosurePanel className="sm:hidden absolute inset-x-0 top-full bg-gray-800 origin-top p-4">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const sectionId = item.href.slice(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <button
                      key={item.name}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById(sectionId);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={classNames(
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </button>
                  );
                })}
                {/* Also include Resume in mobile menu */}
                <a
                  href="/portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
                >
                  Resume
                </a>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
