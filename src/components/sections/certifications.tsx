"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  href?: string;
  icon: LucideIcon;
  accent: string;
  tone: string;
  kind: "Certification" | "Training";
  summary: string;
};

const certifications: Certification[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    issued: "January 2026",
    href: "https://drive.google.com/file/d/1E48TDW6fr9lpoC6U1ADKy7yrmeJAquzv/view?usp=drive_link",
    icon: BadgeCheck,
    accent: "from-[#0056D2] via-[#4C8DFF] to-[#8AB4FF]",
    tone: "Machine Learning",
    kind: "Certification",
    summary:
      "Core supervised learning credential focused on regression, classification, evaluation, and strong ML fundamentals.",
  },
  {
    title: "Mastering Data Structures and Algorithms",
    issuer: "AlgoTutor Academy",
    issued: "July 2025",
    href: "https://drive.google.com/file/d/1u3t9y9cAxgYYQpdl31fZDGivw9bDYn2p/view?usp=drive_link",
    icon: BrainCircuit,
    accent: "from-[#ff7b00] via-[#ff9f43] to-[#ffd166]",
    tone: "Problem Solving",
    kind: "Certification",
    summary:
      "Focused DSA training that strengthened algorithmic thinking and coding interview preparation.",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundation Associate",
    issuer: "Oracle",
    issued: "September 2025",
    href: "https://drive.google.com/file/d/1tlkFMTyBCBo0ULTdnUfz6U5Y4f4PzBlK/view?usp=drive_link",
    icon: ShieldCheck,
    accent: "from-[#C74634] via-[#F05A28] to-[#FFB27D]",
    tone: "Cloud + AI",
    kind: "Certification",
    summary:
      "Foundation-level credential spanning OCI services, cloud basics, and AI-oriented platform concepts.",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp 2023",
    issuer: "Udemy",
    issued: "September 2023",
    href: "https://drive.google.com/file/d/1Q4koMxTpr6hOkecKpZN70myr1mItqm3N/view?usp=drive_link",
    icon: BookOpen,
    accent: "from-[#6A1B9A] via-[#8E44AD] to-[#C39BD3]",
    tone: "Python",
    kind: "Certification",
    summary:
      "Hands-on Python coursework covering programming fundamentals, projects, and practical coding fluency.",
  },
  {
    title: "AI-Powered NLP Training",
    issuer: "Algo Tutor Academy",
    issued: "August 2025",
    icon: Sparkles,
    accent: "from-[#0f766e] via-[#14b8a6] to-[#67e8f9]",
    tone: "NLP",
    kind: "Training",
    summary:
      "Applied NLP learning focused on preprocessing, classical ML, transformers, and real project relevance.",
  },
];

const featured = certifications[0];
const archive = certifications.slice(1);

const CertificationsSection = () => {
  const FeaturedIcon = featured.icon;

  return (
    <SectionWrapper
      id="certifications"
      className="min-h-screen max-w-7xl mx-auto"
    >
      <SectionHeader
        id="certifications"
        className="relative mb-14"
        title="Certifications"
        desc="A clean snapshot of the credentials and training that support your machine learning, NLP, cloud, and Python journey."
      />

      <div className="px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.78),rgba(255,255,255,0.48))] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_25%),linear-gradient(145deg,rgba(12,12,14,0.95),rgba(24,24,30,0.88))] md:p-7">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-white/20 blur-3xl dark:bg-white/8" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/5" />
          </div>

          <div className="relative space-y-6">
            <Card className="overflow-hidden rounded-[1.75rem] border-white/15 bg-white/55 shadow-none backdrop-blur-sm dark:bg-white/5">
              <CardContent className="p-0">
                <div className={cn("h-2 w-full bg-gradient-to-r", featured.accent)} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="mb-5 flex items-center gap-4">
                        <div
                          className={cn(
                            "flex h-14 w-14 items-center justify-center rounded-[1.25rem] text-white shadow-lg",
                            `bg-gradient-to-br ${featured.accent}`
                          )}
                        >
                          <FeaturedIcon size={24} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            Featured Credential
                          </p>
                          <p className="text-sm font-medium text-muted-foreground">
                            {featured.issuer}
                          </p>
                        </div>
                      </div>

                      <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                        {featured.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {featured.summary}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                      <Badge variant="secondary" className="rounded-full px-4 py-1.5">
                        {featured.issued}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-white/20 bg-white/50 px-4 py-1.5 dark:bg-white/10"
                      >
                        {featured.tone}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-white/20 bg-white/50 px-4 py-1.5 dark:bg-white/10"
                      >
                        {featured.kind}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-muted-foreground">
                      Highlighting the credential that best anchors your current ML-focused portfolio.
                    </p>
                    {featured.href && (
                      <Link
                        href={featured.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-black"
                      >
                        View Certificate
                        <ArrowUpRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {archive.map((cert) => {
                const Icon = cert.icon;
                const content = (
                  <Card className="h-full overflow-hidden rounded-[1.5rem] border-white/15 bg-white/45 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/35 dark:bg-white/5">
                    <CardContent className="p-0">
                      <div className={cn("h-1.5 w-full bg-gradient-to-r", cert.accent)} />
                      <div className="p-5">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div
                            className={cn(
                              "flex h-11 w-11 items-center justify-center rounded-2xl text-white",
                              `bg-gradient-to-br ${cert.accent}`
                            )}
                          >
                            <Icon size={20} />
                          </div>
                          <Badge variant="secondary" className="rounded-full px-3 py-1 text-[10px]">
                            {cert.issued}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge
                              variant="outline"
                              className="rounded-full border-white/20 bg-white/50 px-2.5 py-0.5 text-[10px] dark:bg-white/10"
                            >
                              {cert.kind}
                            </Badge>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                              {cert.tone}
                            </p>
                          </div>
                          <h3 className="text-lg font-semibold leading-snug">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-sm leading-6 text-muted-foreground">
                            {cert.summary}
                          </p>
                        </div>

                        <div className="mt-5">
                          {cert.href ? (
                            <div className="inline-flex items-center gap-2 text-sm font-medium">
                              Open Certificate
                              <ArrowUpRight size={14} />
                            </div>
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              Resume-listed training
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return cert.href ? (
                  <Link
                    key={cert.title}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={cert.title}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
