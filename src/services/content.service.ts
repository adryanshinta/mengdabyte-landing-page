import contentData from "../data/content.json";
import type { ContentData, Course, FAQ, Testimonial } from "../types";

const content = contentData as ContentData;

export const getCourses = (): Course[] => content.courses;
export const getTestimonials = (): Testimonial[] => content.testimonials;
export const getFaqs = (): FAQ[] => content.faqs;
export const getCourseBySlug = (slug: string): Course | undefined =>
  content.courses.find((course) => course.slug === slug);
