// Site Configuration for rjsblog.in integration
export const siteConfig = {
  // Main site information
  mainSite: {
    name: "RJ's Blog.",
    url: "https://rjsblog.in",
    logo: "/logo.png" // Add your logo path
  },
  
  // Subdomain information
  subdomain: {
    name: "React Components",
    shortName: "Components",
    url: "https://reactcomponents.rjsblog.in", // or components.rjsblog.in
    description: "Free, reusable React components collection"
  },
  
  // Theme colors (can be customized to match rjsblog.in)
  theme: {
    primary: "#667eea",
    secondary: "#764ba2",
    accent: "#f093fb",
    background: "#ffffff",
    surface: "#f9f9fb",
    text: "#1a1a2e",
    textSecondary: "#4a4a5e",
    border: "#e0e0e5",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  },
  
  // Typography
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    headingFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
  },
  
  // Navigation links
  navigation: {
    mainSite: [
      { label: "Home", url: "https://rjsblog.in" },
      { label: "Blog", url: "https://rjsblog.in/blogs" },
      { label: "About", url: "https://rjsblog.in/about" },
      { label: "Contact", url: "https://rjsblog.in/contact" }
    ]
  },
  
  // SEO
  seo: {
    title: "React Components - Free UI Components Library | RJ's Blog.",
    description: "Explore our collection of free, reusable React components. Perfect for building modern web applications.",
    keywords: "react components, ui components, react library, free components, web development",
    author: "RJ's Blog.",
    ogImage: "/og-image.png"
  },
  
  // Social links
  social: {
    github: "https://github.com/rajjitlai/rjsblog_free_react-components",
    twitter: "", // Add if available
    linkedin: "" // Add if available
  }
}

