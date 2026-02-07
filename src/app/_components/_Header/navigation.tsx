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
            className="text-violet-900 shadow-2xl md:hidden"
          >
            <HiOutlineMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full border-0 bg-violet-900/95 text-white">
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
              <li className="rounded-md border-b-2 border-amber-200 bg-violet-950 p-2">
                <Link
                  href={"#about"}
                  className="flex items-center gap-2 font-medium text-amber-200"
                >
                  <User />
                  About
                </Link>
              </li>

              <li className="rounded-md border-b-2 border-lime-200 bg-violet-950 p-2">
                <Link
                  href={"#skills"}
                  className="flex items-center gap-2 font-medium text-lime-200"
                >
                  <Star />
                  Skills
                </Link>
              </li>

              <li className="rounded-md border-b-2 border-sky-300 bg-violet-950 p-2">
                <Link
                  href={"#projects"}
                  className="flex items-center gap-2 font-medium text-sky-300"
                >
                  <FolderGit2 /> Projects
                </Link>
              </li>

              <li className="rounded-md border-b-2 border-rose-300 bg-violet-950 p-2">
                <Link
                  href={"#contact"}
                  className="flex items-center gap-2 font-medium text-rose-300"
                >
                  <AtSign /> Contact
                </Link>
              </li>
            </ul>
          </nav>
          <SheetFooter>
            <Link
              href={"#curriculum"}
              className="flex items-center gap-2 font-medium text-rose-300"
            >
              <Button className="flex w-full items-center gap-2 bg-[linear-gradient(to_bottom_right,rgb(253,230,138),rgb(217,249,157),rgb(125,211,252),rgb(253,164,175))] font-bold text-violet-900">
                <Download />
                Curriculum
              </Button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Navegação Desktop */}
      <nav>
        <ul className="hidden items-center space-x-4 text-xl text-white text-shadow-[2px_2px_.5px_rgba(0,0,0,0.25)] md:flex">
          <li>
            <Link
              href={"#about"}
              className="gradient-border-bottom hover:text-amber-200"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href={"#skills"}
              className="gradient-border-bottom hover:text-amber-200"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href={"#projects"}
              className="gradient-border-bottom hover:text-amber-200"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href={"#contact"}
              className="gradient-border-bottom hover:text-amber-200"
            >
              Contact
            </Link>
          </li>

          {/* TODO: Adicionar o botão de download do currículo */}
          {/* <li>
            <Link href={"#curriculum"}>
              <Button className="bg-gradient-to-br from-sky-300 to-rose-300 font-semibold text-violet-900 transition-colors duration-800 ease-in-out hover:from-rose-300 hover:to-sky-300">
                <HiOutlineDownload />
                Curriculum
              </Button>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
