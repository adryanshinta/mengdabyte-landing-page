import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  Languages,
  Monitor,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCourses } from "../../services/content.service";

import { getWaLink } from "../../lib/whatsapp";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const icons = { Languages, Monitor, Code2, Briefcase: BriefcaseBusiness };

export function Programs() {
  const courses = getCourses();
  return (
    <SectionWrapper id="program" className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">
              Belajar bersama kami
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Program Unggulan Kami
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Dirancang untuk membangun fondasi keterampilan masa depan.
            </p>
          </div>
          <span className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500 md:inline-flex">
            Belajar fleksibel · Sertifikat resmi
          </span>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = icons[course.iconName];
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card
                  className={`flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${course.isComingSoon ? "opacity-60" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-2xl bg-blue-50 p-3.5 text-primary">
                      <Icon size={26} />
                    </span>
                    <Badge className="gap-1.5">
                      <Check size={13} /> Bersertifikat
                    </Badge>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Program keterampilan
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">
                    {course.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>
                  <div className="mt-5 space-y-3 border-y border-slate-100 py-4">
                    <div className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Clock3 size={16} className="text-slate-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Tag size={16} className="text-slate-400" />
                      <span className="font-semibold text-slate-900">
                        {course.price}
                      </span>
                      {course.priceOriginal && (
                        <span className="text-xs text-slate-400 line-through">
                          {course.priceOriginal}
                        </span>
                      )}
                    </div>
                  </div>
                  {course.isComingSoon ? (
                    <Button disabled className="mt-5 w-full">
                      Segera Hadir
                    </Button>
                  ) : (
                    <Link to={`/kursus/${course.slug}`} className="mt-5">
                      <Button variant="outline" className="w-full">
                        Lihat Detail Kurikulum <ArrowRight size={16} />
                      </Button>
                    </Link>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span className="rounded-xl bg-white/10 p-3 text-cyan-300">
            <BriefcaseBusiness size={23} />
          </span>
          <div className="flex-1">
            <p className="font-heading text-lg font-bold">
              Pelatihan untuk perusahaan & institusi
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Tingkatkan kapabilitas tim dengan program yang disesuaikan
              kebutuhan.
            </p>
          </div>
          <a
            href={getWaLink(
              "Halo Admin Mengdabyte, saya ingin berkonsultasi tentang pelatihan perusahaan.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="white" className="w-full sm:w-auto">
              Konsultasi Pelatihan <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
