import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/staff", label: "Staff" },
  { to: "/events", label: "Events" },
  { to: "/celebrations", label: "Celebration" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-3 sm:top-4 z-50 flex justify-center px-2.5 sm:px-4 animate-nav-slide">
      <nav
        className={`glass flex w-full max-w-7xl items-center justify-between rounded-full border px-3.5 sm:px-6 transition-all duration-500 animate-navbar-breath ${
          scrolled
            ? "shadow-float py-1.5 sm:py-2 bg-white/80 border-white/85 scale-[0.99] backdrop-blur-2xl"
            : "shadow-soft py-2.5 sm:py-3.5 border-white/60"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-100 transition-opacity group">
          <motion.div
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="relative shrink-0">
              <img
                src={logoImg}
                alt="Junior Junction Logo"
                loading="eager"
                width={72}
                height={72}
                className="h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-full object-contain border-2 border-white shadow-soft transition-transform duration-500 hover:scale-[1.06] animate-logo-float-premium"
              />
            </div>
            <div className="flex flex-col justify-center items-start text-left select-none">
              <span
                className="text-base sm:text-xl font-extrabold tracking-tight text-accent-blue leading-none opacity-0 animate-fade-in-left"
                style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
              >
                Junior Junction
              </span>
              <span
                className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-accent-red uppercase mt-1 ml-0.5 sm:ml-1 leading-none opacity-0 animate-fade-in-left hidden min-[375px]:block"
                style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
              >
                PLAYSCHOOL, ERODE
              </span>
            </div>
          </motion.div>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to} className="relative">
                <Link to={l.to} className="block">
                  <motion.div
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`relative text-sm font-semibold tracking-tight px-4 py-2.5 transition-all duration-300 underline-grow-center hover:text-shadow-glow ${
                      active ? "text-accent-blue" : "text-foreground/75 hover:text-accent-blue"
                    }`}
                  >
                    <span>{l.label}</span>

                    {/* Sliding active underline with shimmer */}
                    {active && (
                      <motion.span
                        layoutId="activeUnderline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-accent-blue overflow-hidden shadow-soft"
                      >
                        <span
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-shine"
                          style={{ animationDuration: "1.5s" }}
                        />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="rounded-full bg-accent-red px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-500 hover:translate-y-[-2px] hover:shadow-card md:inline-flex cursor-pointer relative overflow-hidden group animate-red-pulse"
            >
              <span className="relative z-10">Admissions Open</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
            </Link>
          </motion.div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-foreground/5 md:hidden cursor-pointer active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0, scale: open ? 0.9 : 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-7xl rounded-3xl glass border border-white/60 p-5 shadow-float md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        active
                          ? "bg-accent-blue/10 text-accent-blue"
                          : "hover:bg-foreground/5 text-foreground/80"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  to="/contact"
                  className="mt-1 block rounded-full bg-accent-red px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  Admissions Open - Enquire Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
