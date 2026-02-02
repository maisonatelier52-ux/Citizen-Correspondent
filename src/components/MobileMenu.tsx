"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaFacebookF, FaInstagram, FaMedium, FaReddit, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

interface MenuItem {
  name: string;
  href: string;
  title: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, onClose }) => {
  const pathname = usePathname();

  const firstRow = menuItems.slice(0, 6);
  const secondRow = menuItems.slice(6, 12);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
      <div className="px-6 pt-12 pb-6 space-y-6">
        
        {/* Categories Title */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-gray-900">
            Categories
          </h3>
          <div className="border-t border-gray-200" />
        </div>

        {/* Top Nav Grid */}
  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-left">

          {[...firstRow, ...secondRow].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              title={item.title}
              className={`text-xs font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-orange-500"
                  : "text-gray-800 hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Footer Links */}
        <div className="space-y-4 text-xs font-semibold text-gray-700">
          <div className="grid grid-cols-2 gap-4 text-left">
            <Link href="/about-us" onClick={onClose} className="hover:text-orange-500">
              About Us
            </Link>
            <Link href="/our-team" onClick={onClose} className="hover:text-orange-500">
              Our Team
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            <Link
              href="/privacy-policy"
              onClick={onClose}
              className="hover:text-orange-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              onClick={onClose}
              className="hover:text-orange-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
{/* Divider */}
<div className="border-t border-gray-200 pt-4 space-y-4">


  {/* Follow Us Row */}
  <div className="flex items-center justify-between border-b pb-5 border-gray-200">
    <span className="text-xs font-semibold text-gray-700">
      Follow Us
    </span>

    <div className="flex items-center gap-4 text-gray-700 ">
      {/* <Link href="#" aria-label="YouTube" className="hover:text-orange-500">
     <FaFacebookF />
      </Link>
      <Link href="#" aria-label="Instagram" className="hover:text-orange-500">
       <FaTwitter/>
      </Link>
      <Link href="#" aria-label="Medium" className="hover:text-orange-500">
        <FaMedium/>
      </Link> */}
      <Link href="https://substack.com/@citizencorrespondent" aria-label="Facebook" className="hover:text-orange-500">
        <SiSubstack/>
      </Link>
      {/* <Link href="#" aria-label="RSS" className="hover:text-orange-500">
        <FaReddit/>
      </Link> */}
    </div>
    
  </div>

</div>

      </div>
    </div>
  );
};

export default MobileMenu;
