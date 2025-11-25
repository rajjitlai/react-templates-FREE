import { useState, useMemo } from "react"
import "./global.css"

// Import all components
import { DropDown_01 } from "./Components/DropDown_01/DropDown_01"
import DropDown_02 from "./Components/DropDown_02/DropDown_02"
import DropDown_03 from "./Components/DropDown_03/DropDown_03"
import { DropDown_04 } from "./Components/DropDown_04/DropDown_04"
import DropDown_05 from "./Components/DropDown_05/DropDown_05"
import HeaderNormal from "./Components/Header_normal/Header"
import HeaderFramerMotion from "./Components/Header_framer-motion/Header"
import Carousel from "./Components/Image_Slider_01/Image_Slider_01"
import Menu_01 from "./Components/Menu_01/Menu_01"
import Menu_02 from "./Components/Menu_02/Menu_02"
import Notifications from "./Components/Notification/Notifications"
import PageTransition from "./Components/PageTransition/PageTransition"

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("dropdown-01")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showDescription, setShowDescription] = useState(false)

  const components = [
    { 
      id: "dropdown-01", 
      name: "Dropdown 01", 
      category: "dropdown",
      description: "Simple account dropdown with profile menu and click-outside-to-close functionality",
      icon: "🔽",
      component: <DropDown_01 /> 
    },
    { 
      id: "dropdown-02", 
      name: "Dropdown 02", 
      category: "dropdown",
      description: "Animated dropdown with icon support and dynamic positioning",
      icon: "🔽",
      component: <DropDown_02 /> 
    },
    { 
      id: "dropdown-03", 
      name: "Dropdown 03 (Search)", 
      category: "dropdown",
      description: "Search-based dropdown with real-time filtering capabilities",
      icon: "🔍",
      component: <DropDown_03 /> 
    },
    { 
      id: "dropdown-04", 
      name: "Dropdown 04 (Swiper)", 
      category: "dropdown",
      description: "Swiper-powered dropdown with pagination and slide navigation",
      icon: "📄",
      component: <DropDown_04 /> 
    },
    { 
      id: "dropdown-05", 
      name: "Dropdown 05 (Nested)", 
      category: "dropdown",
      description: "Nested menu dropdown with sub-items and smooth transitions",
      icon: "📂",
      component: <DropDown_05 /> 
    },
    { 
      id: "header-normal", 
      name: "Header (Normal)", 
      category: "header",
      description: "Standard responsive header with mobile hamburger menu",
      icon: "📋",
      component: <HeaderNormal /> 
    },
    { 
      id: "header-framer", 
      name: "Header (Framer Motion)", 
      category: "header",
      description: "Animated header with smooth transitions using Framer Motion",
      icon: "✨",
      component: <HeaderFramerMotion /> 
    },
    { 
      id: "image-slider", 
      name: "Image Slider", 
      category: "slider",
      description: "Beautiful coverflow image carousel with navigation controls",
      icon: "🖼️",
      component: <Carousel /> 
    },
    { 
      id: "menu-01", 
      name: "Menu 01 (Swiper)", 
      category: "menu",
      description: "Swiper-based navigation menu with slide transitions",
      icon: "☰",
      component: <Menu_01 /> 
    },
    { 
      id: "menu-02", 
      name: "Menu 02 (Router)", 
      category: "menu",
      description: "Router-integrated menu with page transitions and navigation",
      icon: "🧭",
      component: <Menu_02 /> 
    },
    { 
      id: "notifications", 
      name: "Notifications", 
      category: "other",
      description: "Tabbed notification system with filtering and read/unread states",
      icon: "🔔",
      component: <Notifications /> 
    },
    { 
      id: "page-transition", 
      name: "Page Transition", 
      category: "other",
      description: "Smooth page transitions with loading bars and router integration",
      icon: "⚡",
      component: <PageTransition /> 
    },
  ]

  const categories = [
    { id: "all", name: "All", icon: "📦", color: "#6366f1" },
    { id: "dropdown", name: "Dropdowns", icon: "🔽", color: "#8b5cf6" },
    { id: "header", name: "Headers", icon: "📋", color: "#ec4899" },
    { id: "menu", name: "Menus", icon: "☰", color: "#f59e0b" },
    { id: "slider", name: "Sliders", icon: "🖼️", color: "#10b981" },
    { id: "other", name: "Other", icon: "✨", color: "#06b6d4" },
  ]

  const filteredComponents = useMemo(() => {
    return components.filter(comp => {
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           comp.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || comp.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const currentComponent = components.find(c => c.id === selectedComponent)

  return (
    <div className="app-wrapper">
      {/* Top Bar with Categories */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-title">React Components</span>
            </div>
          </div>
        </div>
        
        <div className="top-bar-center">
          <div className="categories-nav">
            {categories.map(category => {
              const count = category.id === "all" 
                ? components.length 
                : components.filter(c => c.category === category.id).length
              return (
                <button
                  key={category.id}
                  className={`category-nav-btn ${selectedCategory === category.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-nav-icon">{category.icon}</span>
                  <span className="category-nav-label">{category.name}</span>
                  <span className="category-nav-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="top-bar-right">
          <a 
            href="https://github.com/rajjitlai/react-templates-FREE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="app-layout">
        {/* Left Sidebar - Components */}
        <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <button 
                className="sidebar-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle sidebar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <h2 className="sidebar-title">Components</h2>
            </div>

            {/* Search */}
            <div className="search-section">
              <div className="search-box">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    className="search-clear-btn"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Components List */}
            <div className="components-section">
              <div className="components-list">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((comp) => (
                    <button
                      key={comp.id}
                      className={`component-item ${selectedComponent === comp.id ? "active" : ""}`}
                      onClick={() => setSelectedComponent(comp.id)}
                    >
                      <div className="component-icon">{comp.icon}</div>
                      <div className="component-details">
                        <div className="component-name">{comp.name}</div>
                        <div className="component-desc">{comp.description}</div>
                      </div>
                      {selectedComponent === comp.id && (
                        <div className="component-check">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon">🔍</div>
                    <p className="empty-text">No components found</p>
                    <p className="empty-hint">Try a different search</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Playground */}
        <main className={`main-content ${sidebarOpen ? "" : "full-width"}`}>
          <div className="playground-area">
            {currentComponent ? (
              <div className="preview-frame">
                {currentComponent.component}
              </div>
            ) : (
              <div className="welcome-screen">
                <div className="welcome-content">
                  <div className="welcome-icon">🎨</div>
                  <h2 className="welcome-title">Playground</h2>
                  <p className="welcome-text">Select a component to start</p>
                </div>
              </div>
            )}
          </div>

          {/* Description Button - Bottom Right */}
          {currentComponent && (
            <button 
              className="description-btn"
              onClick={() => setShowDescription(!showDescription)}
            >
              Description
            </button>
          )}

          {/* Description Panel */}
          {showDescription && currentComponent && (
            <div className="description-panel">
              <div className="description-header">
                <h3>{currentComponent.name}</h3>
                <button 
                  className="description-close"
                  onClick={() => setShowDescription(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="description-content">
                <p>{currentComponent.description}</p>
                <div className="description-meta">
                  <span className="meta-item">
                    <strong>Category:</strong> {categories.find(c => c.id === currentComponent.category)?.name}
                  </span>
                  <span className="meta-item">
                    <strong>Path:</strong> src/Components/{currentComponent.name.replace(/\s+/g, "_")}
                  </span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
