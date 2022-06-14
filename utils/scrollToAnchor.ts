export const scrollToAnchor = (anchor: string) => {
  document.getElementById(anchor).scrollIntoView({
    behavior: 'smooth'
  })
}