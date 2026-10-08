export const WA_NUMBER = '6287859228358'

export const getWaLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

export const getCourseWaMessage = (courseTitle: string) =>
  `Halo Admin Mengdabyte Digital Indonesia, saya ingin mendaftar program ${courseTitle}. Mohon info selengkapnya.`
