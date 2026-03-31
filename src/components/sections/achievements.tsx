"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Star, Target, Trophy, type LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

type PlatformKey = "leetcode" | "hackerrank" | "codechef";

const platforms: Record<
  PlatformKey,
  {
    label: string;
    username: string;
    href: string;
    accent: string;
    icon: LucideIcon;
    eyebrow: string;
    headline: string;
    description: string;
    stats: { label: string; value: string; hint: string }[];
  }
> = {
  leetcode: {
    label: "LeetCode",
    username: "tharun_73",
    href: "https://leetcode.com/u/tharun_73/",
    accent: "from-[#f89f1b] via-[#ffb84d] to-[#ffda85]",
    icon: Code2,
    eyebrow: "Problem Solving Dashboard",
    headline: "Structured DSA practice with consistent solving momentum.",
    description:
      "A portfolio-style dashboard for my LeetCode journey, centered on problem solving volume and interview-focused practice.",
    stats: [
      { label: "Solved", value: "330+", hint: "Problems solved across coding platforms" },
      { label: "Focus", value: "DSA", hint: "Arrays, trees, graphs, and dynamic programming" },
      { label: "Profile", value: "@tharun_73", hint: "Public coding profile" },
    ],
  },
  hackerrank: {
    label: "HackerRank",
    username: "tharuntej7373",
    href: "https://www.hackerrank.com/profile/tharuntej7373",
    accent: "from-[#00ea64] via-[#26f58c] to-[#b4ffd4]",
    icon: Star,
    eyebrow: "Badge Progress",
    headline: "Strong language fundamentals backed by star-rated practice.",
    description:
      "Interactive badge-style highlights for the language proficiency milestones listed on my resume.",
    stats: [
      { label: "C++", value: "5 Stars", hint: "Top badge highlighted on resume" },
      { label: "Python", value: "4 Stars", hint: "Consistent problem solving badge" },
      { label: "C", value: "4 Stars", hint: "Language fundamentals badge" },
    ],
  },
  codechef: {
    label: "CodeChef",
    username: "cp_shanks77",
    href: "https://www.codechef.com/users/cp_shanks77",
    accent: "from-[#6b4f3b] via-[#b98b5f] to-[#ffd8a8]",
    icon: Target,
    eyebrow: "Contest Rating",
    headline: "Competitive programming progress built through regular contests.",
    description:
      "A rating-focused card showing the competitive side of my problem solving journey.",
    stats: [
      { label: "Rating", value: "1400+", hint: "Resume-listed CodeChef rating" },
      { label: "Handle", value: "@cp_shanks77", hint: "Contest profile username" },
      { label: "Mode", value: "Contests", hint: "Rating earned through participation" },
    ],
  },
};

const starLevels = [
  { label: "C++", filled: 5 },
  { label: "Python", filled: 4 },
  { label: "C", filled: 4 },
];

const selectorOrder: PlatformKey[] = ["leetcode", "hackerrank", "codechef"];

const AchievementsSection = () => {
  const [activePlatform, setActivePlatform] = React.useState<PlatformKey>("leetcode");

  const platform = platforms[activePlatform];
  const ActiveIcon = platform.icon;

  return (
    <SectionWrapper id="achievements" className="min-h-screen max-w-7xl mx-auto">
      <SectionHeader
        id="achievements"
        className="relative mb-14"
        title="Achievements"
        desc="Interactive coding profiles, badges, and contest milestones."
      />

      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="space-y-4">
          {selectorOrder.map((key) => {
            const item = platforms[key];
            const ItemIcon = item.icon;
            const isActive = activePlatform === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActivePlatform(key)}
                className={cn(
                  "w-full rounded-2xl border p-4 text-left transition-all duration-300 pointer-events-auto",
                  "bg-white/65 dark:bg-black/60 backdrop-blur-sm",
                  isActive
                    ? "border-white/70 shadow-xl shadow-black/10 scale-[1.02]"
                    : "border-white/20 hover:border-white/40 hover:-translate-y-1"
                )}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-2xl text-white",
                      `bg-gradient-to-br ${item.accent}`
                    )}
                  >
                    <ItemIcon size={20} />
                  </div>
                  {isActive && <Badge variant="secondary">Active</Badge>}
                </div>
                <div className="text-lg font-semibold">{item.label}</div>
                <div className="font-mono text-xs text-muted-foreground">
                  @{item.username}
                </div>
              </button>
            );
          })}
        </div>

        <Card className="overflow-hidden border-white/20 bg-white/70 backdrop-blur-sm dark:bg-black/70">
          <CardContent className="p-0">
            <div className={cn("h-2 w-full bg-gradient-to-r", platform.accent)} />
            <div className="p-6 md:p-8">
              <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl text-white",
                        `bg-gradient-to-br ${platform.accent}`
                      )}
                    >
                      <ActiveIcon size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {platform.eyebrow}
                      </p>
                      <h3 className="text-2xl font-semibold">{platform.label}</h3>
                    </div>
                  </div>
                  <p className="text-lg font-medium">{platform.headline}</p>
                  <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>

                <Link
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-black px-4 py-2 text-sm text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-black"
                >
                  Visit Profile
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {platform.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/20 bg-black/5 p-4 dark:bg-white/5"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.hint}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/20 bg-gradient-to-br from-black/[0.04] to-black/[0.08] p-5 dark:from-white/[0.04] dark:to-white/[0.08]">
                {activePlatform === "leetcode" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Dashboard Snapshot</p>
                        <p className="text-sm text-muted-foreground">
                          Portfolio display based on your listed achievements.
                        </p>
                      </div>
                      <Trophy className="opacity-60" size={22} />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Arrays", value: "Strong" },
                        { label: "DP", value: "Growing" },
                        { label: "Graphs", value: "Active" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl bg-white/60 p-4 dark:bg-black/30"
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="mt-2 text-lg font-semibold">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Problem solving momentum</span>
                        <span className="font-medium">330+ solved</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#f89f1b] to-[#ffd166]" />
                      </div>
                    </div>
                  </div>
                )}

                {activePlatform === "hackerrank" && (
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-medium">Language Star Badges</p>
                      <p className="text-sm text-muted-foreground">
                        Interactive badge display for the stars listed on your resume.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {starLevels.map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium">{item.label}</span>
                            <span className="text-sm text-muted-foreground">
                              {item.filled}/5 stars
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <div
                                key={`${item.label}-${idx}`}
                                className={cn(
                                  "h-10 flex-1 rounded-xl border transition-transform hover:-translate-y-1",
                                  idx < item.filled
                                    ? "border-[#00ea64]/30 bg-[#00ea64]/20"
                                    : "border-white/10 bg-black/5 dark:bg-white/5"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activePlatform === "codechef" && (
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-medium">Competitive Rating Meter</p>
                      <p className="text-sm text-muted-foreground">
                        Rating-focused presentation for your contest profile.
                      </p>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-end gap-6">
                      <div className="rounded-3xl bg-white/70 p-5 text-center dark:bg-black/30">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Rating
                        </p>
                        <p className="mt-3 text-4xl font-semibold">1400+</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Contest strength</span>
                          <span className="font-medium">Rising</span>
                        </div>
                        <div className="h-4 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#6b4f3b] via-[#b98b5f] to-[#ffd8a8]" />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Beginner</span>
                          <span>Competitive</span>
                          <span>Advanced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
