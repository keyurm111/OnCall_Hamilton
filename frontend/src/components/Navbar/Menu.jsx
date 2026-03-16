import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";

const Menu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  const menuLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECT", path: "/projects" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleNav = (link) => {
    onClose();
    if (link.path.startsWith("/")) {
      navigate(link.path);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link.path);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        const element = document.querySelector(link.path);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#181717] z-[100] transform -translate-y-full flex flex-col justify-center items-center p-10"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 bg-[#f4efe7] p-3 rounded-full text-[#181717] text-2xl cursor-pointer hover:scale-110 transition-transform"
      >
        <IoClose />
      </button>

      <div className="flex flex-col items-center gap-6">
        {menuLinks.map((link, index) => (
          <div key={link.name} className="overflow-hidden">
            <button
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => handleNav(link)}
              className="text-[#f4efe7] text-5xl md:text-7xl font-bold tracking-tighter hover:text-[#b1a696] transition-colors uppercase"
            >
              {link.name}
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
        <div className="text-[#b1a696] text-sm font-medium uppercase italic">
          <p>© 2024 OnCall Hamilton®</p>
          <p>Honest Craftsmanship & Quality</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-[#f4efe7] hover:text-[#b1a696] transition-colors">Instagram</a>
          <a href="#" className="text-[#f4efe7] hover:text-[#b1a696] transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
