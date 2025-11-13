import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 830);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 830);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 flex w-full h-auto items-center relative justify-between lg:my-5 py-1 w-full h-auto text-white z-50">
      {/*Logo*/}
      {isDesktop ? (
        <h1 className="font-bold text-xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl">
          My<span className="text-[#868484]">Folio</span>.
        </h1>
      ) : (
        <h1 className=" font-bold  text-4xl px-3">
          My<span className="text-[#868484]">Folio</span>.
        </h1>
      )}

      {/* Navigation */}
      {isDesktop ? (
        <nav className="hidden md:flex space-x-8 lg:text-2xl 2xl:text-3xl pl-10">
          <a href="#about" className="hover:text-gray-400">
            AboutMe
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className=" w-10 h-10 text-white"
            >
              <Menu className="h-100 w-500" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black text-white w-50 h-40 border-none"
          >
            <nav className="flex flex-col items-center space-y-6 py-5">
              <a href="#about" className="hover:text-gray-400">
                AboutMe
              </a>
              <a href="#projectS" className="hover:text-gray-400">
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
}
