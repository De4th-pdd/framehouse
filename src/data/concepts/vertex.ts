export interface ArchProject {
  id: string;
  number: string;
  name: string;
  typology: "Cultural" | "Residential" | "Commercial" | "Public";
  location: string;
  year: string;
  scale: string;
  materials: string[];
  headline: string;
  statement: string;
  palette: { name: string; hex: string }[];
}

export const VERTEX_PROJECTS: ArchProject[] = [
  {
    id: "proj-01",
    number: "01",
    name: "The Margalla Observatory & Pavilion",
    typology: "Cultural",
    location: "Islamabad, Pakistan",
    year: "2025",
    scale: "2,400 M²",
    materials: ["Rammed Earth", "Honed White Terrazzo", "Raw Cast Bronze"],
    headline: "A monolithic hillside sanctuary sculpted into limestone topography.",
    statement: "Designed to frame light voids across the mountain valley. Passive geothermal cooling tunnels combined with locally quarried aggregate masonry.",
    palette: [
      { name: "Rammed Earth", hex: "#9D7D62" },
      { name: "Raw Terrazzo", hex: "#E3DFD5" },
      { name: "Oxidized Bronze", hex: "#3A332C" },
    ],
  },
  {
    id: "proj-02",
    number: "02",
    name: "Terrace Penthouse Horizon",
    typology: "Residential",
    location: "Zurich, Switzerland",
    year: "2026",
    scale: "680 M²",
    materials: ["Cast Concrete", "Swiss Larch", "Thermal Triple Glazing"],
    headline: "Cantilevered panoramic residence over Lake Zurich.",
    statement: "Unbroken 360-degree glass perimeter supported by four post-tensioned concrete pylons. Custom recessed acoustic ceilings and concealed millwork.",
    palette: [
      { name: "Formwork Concrete", hex: "#A8ABB0" },
      { name: "Swiss Larch", hex: "#8A6946" },
      { name: "Darkened Zinc", hex: "#2E3033" },
    ],
  },
  {
    id: "proj-03",
    number: "03",
    name: "DIFC Monolith Headquarters",
    typology: "Commercial",
    location: "Dubai, UAE",
    year: "2026",
    scale: "8,900 M²",
    materials: ["Perforated Basalt", "Low-E Solar Glazing", "Brushed Titanium"],
    headline: "High-density institutional corporate campus with shaded internal courtyards.",
    statement: "Engineered with dual-skin facade fins that reduce solar heat gain by 42% while filtering daylight into double-height atrium gardens.",
    palette: [
      { name: "Black Basalt", hex: "#1C1C1E" },
      { name: "Reflective Glass", hex: "#5C6A78" },
      { name: "Sandstone Dust", hex: "#D4C7B5" },
    ],
  },
];
