"use client";

import { navItems } from "@/constant/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { FloatingNav } from "./floating-navbar";
import { IconArrowRight } from "@tabler/icons-react";
import AuthForm from "./AuthForm";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import useMyProfile from "@/hooks/useMyProfile";
import { Avatar, AvatarFallback, AvatarImage } from "../shared/avatar";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="py-8 px-4 sm:py-1 sm:px-16 bg-blue-50">
      <div className="max-w-7xl  mx-auto flex items-center justify-between  border-blue-400">
        <div className="flex flex-row gap-4 sm:gap-8">
          {navItems.map((route, idx) => (
            <Link href={route.path} key={route.path + route.name + idx}>
              {route.name}
            </Link>
          ))}
        </div>
        <div className="max-sm:hidden">
          <Link href={"/"}>
            <Image
              src={"/heritage_logo.png"}
              width={80}
              height={80}
              alt="heritage company logo"
            />
          </Link>
        </div>
        <div>
          <Modal>
            {user?.username ? (
              <div className="size-10 bg-blue-400 rounded-full flex items-center justify-center">
                <Avatar>
                  <AvatarImage src={user?.avatar} alt={user?.username} />
                  <AvatarFallback>avatar</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <h4
                  className="font-semibold cursor-pointer hover:opacity-80 group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                  id="sign_in_trigger"
                >
                  Sign In
                </h4>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <IconArrowRight />
                </div>
              </ModalTrigger>
            )}
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Want to access
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    Heritage
                  </span>{" "}
                  ?
                </h4>

                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                  {/* hello */}
                  <AuthForm />
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div className="w-full ">
        <FloatingNav />
      </div>
    </nav>
  );
};

export default Navbar;
