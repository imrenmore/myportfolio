import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import ScrollButton from "@/components/Scrollbutton";
import FadeIn from "@/animations/FadeIn";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <section className="relative flex flex-col items-center justify-center h-screen">
          <FadeIn delay={0.2}>
            <h2 className="text-lg">Hi, my name is</h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl font-bold mt-2">Imren More</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="mt-2 text-lg">I specialize in design and security.</p>
          </FadeIn>
          {/* Background elements toggle between stars and ducks */}
          <BackgroundElements />
          <ScrollButton />
        </section>
      </main>
    </ThemeProvider>
  );
}
