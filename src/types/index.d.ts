export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    x: string
    instagram: string
    facebook: string
  }
}

export type NavigationConfig = {
  mainNav: MainNavItem[]
}
