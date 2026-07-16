// import { Button } from "@/components/Button";
// import {
//   ArrowRight,
//   ChevronDown,
//   Github,
//   Linkedin,
//   Twitter,
//   Download,
// } from "lucide-react";
// import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// const skills = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Node.js",
//   "PostgreSQL",
//   "MongoDB",
//   "Vercel",
//   "Tailwind CSS",
//   "Prisma",
//   "Figma",
//   "Git",
//   "GitHub Actions",
// ];

// export const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Bg */}
//       {/* <div className="absolute inset-0">
//         <img
//           src="/hero-bg.jpg"
//           alt="Hero image"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
//       </div> */}

//       {/* Green Dots */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             className="absolute w-1.5 h-1.5 rounded-full opacity-60"
//             style={{
//               backgroundColor: "#20B2A6",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `slow-drift ${
//                 15 + Math.random() * 20
//               }s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
//                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//                 Software Engineer • React • Next
//               </span>
//             </div>

//             {/* Headline */}
//             <div className="space-y-4">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
//                 Crafting <span className="text-primary glow-text">digital</span>
//                 <br />
//                 experiences with
//                 <br />
//                 <span className="font-serif italic font-normal text-white">
//                   precision.
//                 </span>
//               </h1>
//               <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
//                 Hi, I'm Muhammad Qasim — a software engineer specializing in
//                 React, Next.js, and TypeScript. I build scalable, performant web
//                 applications that users love.
//               </p>
//             </div>

//             {/* CTAs */}
//             <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
//               <Button size="lg">
//                 Contact Me <ArrowRight className="w-5 h-5" />
//               </Button>
//               <AnimatedBorderButton>
//                 <Download className="w-5 h-5" />
//                 Download CV
//               </AnimatedBorderButton>
//             </div>

//             {/* Social Links */}
//             <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
//               <span className="text-sm text-muted-foreground">Follow me: </span>
//               {[
//                 { icon: Github, href: "https://github.com/MuhammadQasim479" },
//                 { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-qasim-b3b9b82b1/" },
//                 // { icon: Twitter, href: "#" },
//               ].map((social, idx) => (
//                 <a
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
//                 >
//                   {<social.icon className="w-5 h-5" />}
//                 </a>
//               ))}
//             </div>
//           </div>
//           {/* Right Column - Profile Image */}
//           <div className="relatice animate-fade-in animation-delay-300">
//             {/* Profile Image */}
//             <div className="relative max-w-md mx-auto">
//               <div
//                 className="absolute inset-0 
//               rounded-3xl bg-gradient-to-br 
//               from-primary/30 via-transparent 
//               to-primary/10 blur-2xl animate-pulse"
//               />
//               <div className="relative glass rounded-3xl p-2 glow-border">
//                 <img
//                   src="/profile-photo.jpg"
//                   alt="Pedro Machado"
//                   className="w-full aspect-[4/5] object-cover rounded-2xl"
//                 />

//                 {/* Floating Badge */}
//                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                     <span className="text-sm font-medium">
//                       Available for work
//                     </span>
//                   </div>
//                 </div>
//                 {/* Stats Badge */}
//                 <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
//                   <div className="text-2xl font-bold text-primary">2+</div>
//                   <div className="text-xs text-muted-foreground">
//                     Years Exp.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="mt-20 animate-fade-in animation-delay-600">
//           <p className="text-sm text-muted-foreground mb-6 text-center">
//             Technologies I work with
//           </p>
//           <div className="relative overflow-hidden">
//             <div
//               className="absolute left-0 top-0 bottom-0 w-32
//              bg-gradient-to-r from-background to-transparent z-10"
//             />
//             <div
//               className="absolute right-0 top-0 bottom-0 w-32
//              bg-gradient-to-l from-background to-transparent z-10"
//             />
//             <div className="flex animate-marquee">
//               {[...skills, ...skills].map((skill, idx) => (
//                 <div key={idx} className="flex-shrink-0 px-8 py-4">
//                   <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
//                     {skill}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 
//       animate-fade-in animation-delay-800"
//       >
//         <a
//           href="#about"
//           className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
//         >
//           <span className="text-xs uppercase tracking-wider">Scroll</span>
//           <ChevronDown className="w-6 h-6 animate-bounce" />
//         </a>
//       </div>
//     </section>
//   );
// };



import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useEffect, useState } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];

// Lines shown in the fake code editor, with syntax-highlight-ish spans
const codeLines = [
  { indent: 0, content: [{ t: "const ", c: "keyword" }, { t: "developer", c: "var" }, { t: " = {", c: "plain" }] },
  { indent: 1, content: [{ t: "name", c: "prop" }, { t: ": ", c: "plain" }, { t: '"Muhammad Qasim"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 1, content: [{ t: "role", c: "prop" }, { t: ": ", c: "plain" }, { t: '"Software Engineer"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 1, content: [{ t: "stack", c: "prop" }, { t: ": [", c: "plain" }] },
  { indent: 2, content: [{ t: '"React"', c: "string" }, { t: ", ", c: "plain" }, { t: '"Next.js"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 2, content: [{ t: '"TypeScript"', c: "string" }, { t: ", ", c: "plain" }, { t: '"Node.js"', c: "string" }] },
  { indent: 1, content: [{ t: "],", c: "plain" }] },
  { indent: 1, content: [{ t: "passion", c: "prop" }, { t: ": ", c: "plain" }, { t: '"Building great UX"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 1, content: [{ t: "available", c: "prop" }, { t: ": ", c: "plain" }, { t: "true", c: "keyword" }] },
  { indent: 0, content: [{ t: "};", c: "plain" }] },
];

const colorMap = {
  keyword: "text-primary",
  var: "text-white font-semibold",
  prop: "text-sky-300",
  string: "text-emerald-300",
  plain: "text-muted-foreground",
};

export const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Finished typing all lines -> pause, then clear and start again
    if (visibleLines >= codeLines.length) {
      const pause = setTimeout(() => {
        setVisibleLines(0);
      }, 1800);
      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 220);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      {/* <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div> */}

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React • Next
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Muhammad Qasim — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs sm:text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/MuhammadQasim479" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-qasim-b3b9b82b1/" },
                // { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Code Editor Mockup */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Glow behind editor */}
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />

              {/* Editor Window */}
              <div className="relative glass rounded-2xl sm:rounded-3xl p-1 sm:p-2 glow-border">
                <div className="rounded-xl sm:rounded-2xl bg-[#0d1117] border border-white/5 overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-xs text-muted-foreground font-mono">
                      developer.ts
                    </span>
                  </div>

                  {/* Code body */}
                  <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-6 sm:leading-7 min-h-[260px] sm:min-h-[320px]">
                    {codeLines.slice(0, visibleLines).map((line, i) => (
                      <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                        <span className="select-none text-muted-foreground/30 mr-3 sm:mr-4">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {line.content.map((token, j) => (
                          <span key={j} className={colorMap[token.c]}>
                            {token.t}
                          </span>
                        ))}
                      </div>
                    ))}
                    {visibleLines < codeLines.length && (
                      <span
                        className={`inline-block w-2 h-4 bg-primary ml-1 align-middle ${
                          showCursor ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 sm:mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 sm:w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 sm:w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 sm:px-8 py-4">
                  <span className="text-lg sm:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};