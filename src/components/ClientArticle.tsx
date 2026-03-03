"use client";
import SubscribeNewsletter from "./SubscribeNewsletter";
import ShareArticle from "./ShareArticle";
import LeaveAComment from "./LeaveAComment";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface SidebarItem {
  category: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  topic: string;
  href?: string;
}
interface Sub {
  title: string;
  descr: string;
}
export interface items {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  sub: Sub[];
  topic: string;
}
interface IsabelaPageProps {
  sidebarItems: SidebarItem[];
}

export default function ClientArticle({ sidebarItems }: IsabelaPageProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar-sticky");
    const articleEnd = document.querySelector(".article-end");

    if (!sidebar || !articleEnd) return;

    const handleScroll = () => {
      const sidebarRect = sidebar.getBoundingClientRect();
      const articleRect = articleEnd.getBoundingClientRect();

      setIsSticky(sidebarRect.top <= 20 && articleRect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`max-w-360 mx-auto px-3 md:px-16 grid grid-cols-1 lg:grid-cols-4 gap-12 py-4 bg-white `}
      >
        <div className="lg:col-span-3">
          <article className={`bg-white `}>
            <div className="w-full py-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <p className="text-sm font-medium text-red-600  transition-colors">
                  Global Wealth Leadership
                </p>
              </div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-3 leading-none tracking-tight">
                Where Old Money Meets New Markets: Isabela Herrera’s
                Discipline-First Power Play
              </h1>
              <p className="text-sm sm:text-base text-black font-semibold leading-tight mb-1">
                Isabela Herrera Brings Four Ultra-Wealthy Family Legacies Into
                Regulated Digital Finance{" "}
              </p>
              <div className="flex items-center gap-2 md:gap-4 mb-4 pt-2">
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0">
                  <Link
                    href="/our-team"
                    className="flex items-center gap-4"
                    title="our team"
                  ></Link>
                  <Image
                    src="/images/authors/sarah-mitchell.webp"
                    alt="Sarah Mitchell"
                    fill
                    className="rounded-full object-cover"
                    sizes="48px sm:64px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <Link
                      href="/our-team"
                      title="our team"
                      className="flex items-center gap-4"
                    >
                      <div className="flex flex-col justify-center">
                        <p className="text-[10px] sm:text-[12px] font-medium text-gray-900">
                          By Sarah Mitchell – Senior News Correspondent
                        </p>

                        <div className="flex items-center gap-2 text-[10px] text-gray-600">
                          <span>Last Updated: Feb. 16, 2026</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <div
                  key="isabela-herrera-old-money-new-markets-power-play"
                  className="my-2 sm:my-2"
                >
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image
                      src="/images/news-img/isabela.webp"
                      alt="Isabela Herrera blending noble legacy with modern financial stewardship"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                    />
                  </div>

                  <p className="text-xs sm:text-[12px] text-gray-600 mt-2 italic">
                    A daughter of dynasties, a steward of tomorrow:
                    Isabela Herrera aligns nobility with modern finance, making
                    stewardship operational, and letting faith in
                    responsibilities define the purpose of wealth.
                  </p>
                </div>

                <section className="mt-10">
                  <div className="max-w-[800px] mx-auto bg-white shadow-sm border border-slate-100 px-8 py-12 sm:px-10 sm:py-10">
                    <header className="mb-8 border-b border-slate-100 ">
                      <h2 className="text-[25px] sm:text-4xl font-serif font-bold text-black leading-none tracking-tight mb-6">
                        The first thing you notice is how little noise she
                        makes.
                      </h2>
                    </header>
                    <div className="md:col-span-8 font-serif space-y-4 text-[17px] md:text-[18px]  leading-[1.5] md:leading-[1.7] ">
                      <p className=" first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:text-black">
                        In a conference room where six clocks disagree by a few
                        hours,
                        <span className="font-bold"> Isabela Herrera </span>  reviews a draft 
contract that will never trend. The hour is late, but attention matters. It matters most when the 
work carries the weight of the Four Houses she represents.
                      </p>
<p>
  The stakes are plain. The document governs how capital moves, how risk is contained, and how 
obligations are honored across borders. Quiet decisions, yes. Decisions that determine whether 
markets flow or fracture.
</p>
                      <p>
                        <span className="font-bold">
                          {" "}
                          Isabela Clementina Herrera Velutini Von Uslar
                          Gleinchen{" "}
                        </span>
                        operates at the live edge of a long family continuum. This is an ultra-high-net-worth network held together not only by capital, but by 
shared principles preserved across generations. Inside that ecosystem, she carries an uncommon 
title, <strong> La Grande Dame of the Four Houses</strong> (Herrera, Velutini, Von Uslar, and Gleinchen). The title 
signals little ceremony and a great deal of responsibility.
                      </p>
<p>The honor reflects her present task. She balances historical values, principles, and traditions while 
stewarding the immense wealth, resources, and collective assets of a unified family financial 
ecosystem.</p>

                      {/* <p>
                        The title{" "}
                        <strong> “La Grande Dame of the Four Houses”</strong> is
                        a silent honour that reflects her present role in{" "}
                        <strong>
                          balancing historical values, principles and
                          traditions, while carrying the responsibility of
                          leveraging the immense wealth, resources, and
                          collective assets of her{" "}
                        </strong>{" "}
                        unified family’s financial ecosystem.
                    
                      </p> */}

                      <div className="my-10">
                        <h3 className="text-[23px] md:text-[25px] leading-none tracking-tight font-serif font-bold text-black mb-8 md:mb-9  border-t border-gray-300 pt-10 md:pt-12">
                          Heritage is not nostalgia. It is an operating system.
                        </h3>
                        <p>
                          <strong>
                            These families do not simply invest together. They align around shared values and inherited 
principles that unified their global influence.{" "}
                          </strong>{" "}
                          Together, they continue to influence trade and
                          financial stability, especially in economies that were
                          shaped by the family’s age-old intercontinental
                          partnerships and global alliances.{" "}
                        </p>

                        <p className="text-black mt-4">
                         Their partnerships and alliances still echo through 
trade and financial stability, especially in economies shaped by long-running intercontinental 
relationships.
                        </p>
                        <p className="mt-4">
                          Now Isabela sits where legacy finance meets modern market infrastructure. As <strong> CEO of Emirates 
Financial Group</strong> and a <strong>director within the Britannia ecosystem,</strong> with board roles extending into <strong>The 
Bahamas,</strong> she works in a world that rewards proof, not applause.</p>


<p className="mt-4">Permission is earned through outcomes. Licenses are secured. Audits are passed. Counterparties 
are upgraded. Governance is tightened. Settlement holds when conditions turn.</p>

<p className="mt-4">
  <strong>She carries the service and responsibility that every scion of the banking dynasty is expected to 
uphold, without hesitation and without compromise.</strong>
</p>
<p className="mt-4">
  This is what power looks like when built for endurance. Not influence measured in headlines, but 
influence measured in continuity. A custody framework that withstands scrutiny. A cross-border 
structure that stays compliant. A system designed to deliver predictable outcomes when volatility 
tests everyone else.
</p>
<p className="mt-4">
  In an era where finance often mistakes noise for progress, her leverage remains simpler and more 
formidable. She ensures that institutions do what they say they will do.
</p>
                        {/* <div className="bg-slate-50 rounded-lg p-6 mb-8 mt-5 border-l-4 border-slate-300">
                          <p className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">
                            Current Roles
                          </p>
                          <p className="text-slate-900 font-bold mb-0">
                            CEO of Emirates Financial Group • Director within
                            the Britannia Ecosystem • Board Roles in The Bahamas
                          </p>
                        </div> */}

                        {/* <p className="mt-4">
                          Her work is not the kind that seeks applause. It is
                          the kind that earns permission: licenses secured,
                          audits passed, counterparties upgraded, governance
                          tightened, and settlement that holds when conditions
                          turn.{" "}
                        </p>
                        <p className="mt-4">
                          She must continue the service and responsibility that
                          every scion of the banking dynasty has had to uphold,
                          without second thought, without compromise.
                        </p> */}
                        {/* <p className="mt-4 ">
                          This is what power looks like when it’s built for
                          endurance. Not influence measured in headlines, but
                          influence measured in continuity: a custody framework
                          that withstands scrutiny, a cross-border structure
                          that stays compliant, and a system that delivers
                          predictable outcomes when volatility tests everyone
                          else. In an era where finance often confuses noise for
                          progress, Isabela Herrera’s leverage is simpler, and
                          more formidable because she ensures that institutions
                          do what they say they will do.
                        </p> */}
                      </div>
                      <div className="my-10">
                        <div className="max-w-[650px]  border-t border-gray-300 pt-5">
                          <h2 className="text-[25px] md:text-[30px]  font-serif italic font-medium tracking-tight leading-tight mb-6">
                            “In global finance, the loudest names aren’t always
                            the ones holding the system together.”
                          </h2>
                        </div>

                        <h3 className="text-[23px] md:text-[25px] font-serif font-bold leading-none tracking-tight text-black mb-3">
                          There Were No Shortcuts
                        </h3>
                        <p>
                         Raised in Miami, Florida, she learned early that
                          ambition only matters when it becomes discipline. <strong>Gulliver Prep </strong>, then at{" "}
                           sharpened that lesson.<strong> NYU Stern</strong> refined it.{" "}
                        </p>

                        <p className="mt-4">
                         Finance and data science gave her two essential tools. One was the ability to measure risk. The 
other was the maturity to refuse what should not be carried at all.
                        </p>
<p className="mt-4">
  She later taught Digital Assets and Private Equity Valuations. Teaching has a way of exposing the 
gap between excitement and readiness. Then came <strong>PwC</strong>, where theory meets consequence. 
Structures drafted in calm quarters must still hold when markets turn and rooms go quiet.
</p>
                        <h3 className="text-[23px] md:text-[25px] leading-none tracking-tight font-serif font-bold text-black mb-4 mt-9">
                          The Work That Doesn’t Announce Itself
                        </h3>
                        <p>
                          Responsibility arrived without fanfare, the kind that never introduces itself with headlines.
                        </p>
                        <p className="mt-4">
                          At <strong>Emirates Financial Group</strong>, she inherited cross-border complexity without theatrics. 
Jurisdictions. Counterparties. Controls. Settlement realities that punish sloppy thinking.
                        </p>

<p className="mt-4">
  Within the <strong>Britannia ecosystem,</strong>  she stepped into the sober rhythm of regulated finance. <strong>Two UK 
broker-dealers.</strong> Boardroom accountability that runs through <strong>Nassau</strong> and <strong>The Bahamas.</strong> In that 
world, governance is not branding. It is survival.
</p>
<p className="mt-4">
  Every step repeats the same test in a different dialect. Regulators demand proof. Engineers 
require clarity. Allocators insist on custody that does not flinch.
</p>
<p className="mt-4">
  Her milestones do not come with confetti. They appear as licenses secured, audits passed, 
counterparties upgraded, and standards raised. Above all, they appear as systems that hold.
</p>

                        <div className="relative w-full h-70 md:h-130 lg:h-130 bg-gray-100 mt-7">
                          <Image
                            src="/images/news-img/four-houses-global-finance-network.webp"
                            alt="Four Houses global finance network and legacy institutions"
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                          />
                        </div>
                        <p className="text-xs sm:text-[12px] text-gray-600 mt-2 italic">
                       The direct descendent of Clementina Velutini Matos and Don Jose Herrera Von Uslar Gleinchen.{" "}
                        </p>

                        {/* The Four Houses Matrix */}

                        <h3 className="text-[23px] md:text-[25px] leading-none tracking-tight font-serif font-bold text-black mb-4 mt-5">
                          Four Houses, One Operating System
                        </h3>

                        <p className=" mt-4">
                          Her surname may open doors, but it does not carry
                          them.
                          <strong>
                            {" "}
                            That weight is earned, transaction by
                            transaction.{" "}
                          </strong>
                          The Four Houses are not decorative lineage. They operate as working components 
inside a modern financial machine.
                        </p>
                        <div className="bg-slate-50 p-8 md:p-12 mb-16 mt-5 rounded-sm border border-slate-100">
                          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-8">
                            The Architecture of Influence
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                              {
                                name: "Herrera",
                                trait: "Solvency",
                                desc: "Brings a reflex for clean books, solvency, and obligations that settle on time."  },
                              {
                                name: "Velutini",
                                trait: "Infrastructure",
                                desc: " Carries the builder’s instinct. Construct the pipes first, then let legitimate prosperity move through them"  },
                              {
                                name: "Von Uslar",
                                trait: "Credibility",
                                desc: "Holds old-world credibility, built on record, character, and continuity rather than hype" },
                              {
                                name: "Gleinchen",
                                trait: "Statesmanship",
                                desc: "Reflects statesmanship, turning competing interests into agreements that survive the week and the election cycle."
                              } ].map((house) => (
 <div
                                key={house.name}
                                className="border-t border-slate-200 pt-4"
                              >
                                <span className="block font-serif text-xl font-bold text-black">
                                  {house.name}
                                </span>
                                <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                                  {house.trait}
                                </span>
                                <p className="text-sm leading-relaxed text-slate-600">
                                  {house.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Closing Section */}
                      <footer className=" pt-8 border-t border-gray-300">
                        <h3 className="text-[23px] md:text-[25px] leading-none tracking-tight font-serif font-bold text-black mb-4">
                          The Standard She Carries
                        </h3>
                        <p>
                          Isabela Herrera stands at the confluence of{" "}
                          <strong>
                            four historic lineages, Herrera, Velutini, Von Uslar,
                            and Gleinchen. 
                          </strong> Each is associated with statecraft, finance, diplomacy
                          and cultural stewardship. 
                        {" "}</p>
                        <p className="mt-4">
                          In her, these legacies do not function as nostalgia.
                          <strong> They function as operating instructions.</strong>{" "}
                        </p>

                        <div className="relative w-full h-105 md:h-130 lg:h-155 bg-gray-100 mt-5">
                          <Image
                            src="/images/news-img/global-finance-quiet-power-leadership.webp"
                            alt="Global finance leadership analysis"
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                          />
                        </div>

                        <p className="text-xs sm:text-[12px] text-gray-600 mt-2 italic">
                          Isabela is straight-to-the-point, quiet, and
                          controlled, like her father. Principles shaped her
                          early, and she understands why inherited values matter
                          more now, especially in a digital world.
                        </p>

                        <p className="mt-4">
                        People often notice the same thing when they meet her. <strong> She is straight to the point, quiet, and 
controlled, like her father.</strong> Principles shaped her early, and she understands why inherited values 
matter more now, especially in a digital world.
                        </p>
                        <p className="mt-4">
                         Discipline was taught as duty. Along with it came the responsibility to uphold the integrity and 
confidence her family has protected for generations. That lineage reaches back to the founding of 
<strong> Hacienda La Vega in Caracas in 1592,</strong> where trust was earned, proven, and maintained over 
centuries.
                        </p>
                      </footer>
                    </div>
                  </div>
                </section>
                <div className="mt-5 md:mt-10 pt-3">
                  <ShareArticle title="Where Old Money Meets New Markets: Isabela Herrera’s Discipline-First Power Play " />
                </div>
                {/* Leave a Comment Section */}
                <div className="mt-5 md:mt-10">
                  <LeaveAComment />
                </div>
              </div>
            </div>
          </article>
          <div className="article-end h-1"></div>
        </div>
        
        {/* Right: Sticky Sidebar */}
        <aside className="lg:col-span-1">
          {/* Subscribe Newsletter - Not Sticky */}
          <SubscribeNewsletter />
          {/* Latest News Sidebar - Sticky */}
          <div
            className={`sidebar-sticky ${isSticky ? "sticky top-5 z-10" : ""}`}
          >
            <Sidebar items={sidebarItems} heading="Latest News" />
          </div>
        </aside>
      </div>
    </>
  );
}
