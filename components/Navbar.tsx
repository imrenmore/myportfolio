import SlideIn from "@/animations/SlideIn";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <SlideIn direction="top">
      <nav className="flex justify-between items-center px-8 py-4 w-full">
        <h1 className="text-lg font-semibold">Imren More</h1>

        {/* Center: Navigation */}
        <div className="flex gap-6">
          <a
            href="#about"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            About
          </a>
          <a
            href="#projects"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            Projects
          </a>
          <a
            href="#resume"
            className="hover:underline px-4 py-2 rounded-lg bg-opacity-30">
            Resume
          </a>
        </div>

        {/*Theme transition button */}
        <ThemeToggle />
      </nav>
    </SlideIn>
  );
};

export default Navbar;
