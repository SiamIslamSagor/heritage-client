import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0 max-w-80 md:mr-10">
          <Image
            src={"/heritage_logo.png"}
            width={80}
            height={80}
            alt="heritage company logo"
          />
          <p className="text-gray-700">
            {" "}
            Design amazing digital experiences that create more happy in the
            world.{" "}
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Product</h4>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Bidding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Upload Property
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Resources</h4>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Social</h4>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-400 my-8 max-w-7xl mx-auto"></div>

      <div className="flex gap-4 max-sm:flex-col px-5 max-w-7xl mx-auto">
        <div className="flex-grow">
          <p>
            &copy;
            {date.getFullYear()} Heritage All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-5">
          <Link href={"#"} className="hover:text-s-color duration-300">
            <IconBrandTwitter />
          </Link>
          <Link href={"#"} className="hover:text-s-color duration-300">
            <IconBrandLinkedin />
          </Link>
          <Link href={"#"} className="hover:text-s-color duration-300">
            <IconBrandFacebook />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
