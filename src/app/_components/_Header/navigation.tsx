import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineDownload, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { AtSign, Download, FolderGit2, Star, User, X } from "lucide-react";

function Navigation() {
  return (
    <>
      {/* Navegação Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"secondary"}
            className="md:hidden text-violet-900 shadow-2xl"
          >
            <HiOutlineMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full bg-violet-900/95 text-white border-0">
          <SheetClose className="absolute top-4 right-3">
            <X className="h-6 w-6 rounded-sm text-rose-300" />
          </SheetClose>
          <SheetHeader>
            <SheetTitle className="text-gradient text-xl">
              Lucashackd
            </SheetTitle>
            <SheetDescription className="text-gray-300">
              What are you looking for?
            </SheetDescription>
          </SheetHeader>
          <nav className="grid flex-1 auto-rows-min">
            <ul className="grid gap-4 px-4">
              <li className="border-amber-200 border-b-2 bg-violet-950 p-2 rounded-md">
                <Link
                  href={"#about"}
                  className="flex items-center gap-2 text-amber-200 font-medium"
                >
                  <User />
                  About
                </Link>
              </li>

              <li className="border-lime-200 border-b-2 bg-violet-950 p-2 rounded-md">
                <Link
                  href={"#skills"}
                  className="flex items-center gap-2 text-lime-200 font-medium"
                >
                  <Star />
                  Skills
                </Link>
              </li>

              <li className="border-sky-300 border-b-2 bg-violet-950 p-2 rounded-md">
                <Link
                  href={"#projects"}
                  className="flex items-center gap-2 text-sky-300 font-medium"
                >
                  <FolderGit2 /> Projects
                </Link>
              </li>

              <li className="border-rose-300 border-b-2 bg-violet-950 p-2 rounded-md">
                <Link
                  href={"#contact"}
                  className="flex items-center gap-2 text-rose-300 font-medium"
                >
                  <AtSign /> Contact
                </Link>
              </li>
            </ul>
          </nav>
          <SheetFooter>
            <Link
              href={"#curriculum"}
              className="flex items-center gap-2 text-rose-300 font-medium"
            >
              <Button className="flex items-center gap-2 text-violet-900 font-bold w-full bg-[linear-gradient(to_bottom_right,rgb(253,230,138),rgb(217,249,157),rgb(125,211,252),rgb(253,164,175))]">
                <Download />
                Curriculum
              </Button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Navegação Desktop */}
      <nav>
        <ul className="hidden md:flex items-center space-x-4 text-xl text-white text-shadow-[2px_2px_.5px_rgba(0,0,0,0.25)]">
          <li>
            <Link
              href={"#about"}
              className="hover:text-amber-200 gradient-border-bottom"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href={"#skills"}
              className="hover:text-amber-200 gradient-border-bottom"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href={"#projects"}
              className="hover:text-amber-200 gradient-border-bottom"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href={"#contact"}
              className="hover:text-amber-200 gradient-border-bottom"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link href={"#curriculum"}>
              <Button className="bg-gradient-to-br from-sky-300 to-rose-300 font-semibold text-violet-900 hover:from-rose-300 hover:to-sky-300 transition-colors ease-in-out duration-800">
                <HiOutlineDownload />
                CSurriculum
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
