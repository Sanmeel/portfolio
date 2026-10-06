"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Layers,
  Calendar,
  BookOpen,
  X,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function ScholarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

// Support single image, flat array of images, or nested rows of images
type ImageItem = string | string[];

interface Project {
  id: string;
  title: string;
  timeline: string;
  affiliation: string;
  category: string;
  summary: string;
  bullets: string[];
  tools: string[];
  imageSrc?: string | ImageItem[] | null;
}

const SCHOLAR_URL = "https://scholar.google.com/citations?user=2F6xMKcAAAAJ&hl=en";

const EDUCATION = [
  {
    degree: "Master of Science in Mechanical Engineering",
    institution: "University of Massachusetts Lowell",
    timeline: "Sept 2024 – May 2026",
    focus:
      "Thesis: A Biofidelic Approach to Measuring Bending Stiffness in Carbon-Fiber Reinforced Footwear and Insoles. Graduate Research Assistant at Applied Solid Mechanics Lab.",
  },
  {
    degree: "Bachelor of Science in Mechanical Engineering",
    institution: "Virginia Tech",
    timeline: "Aug 2019 – May 2024",
    focus:
      "Undergraduate Research Assistant at Bio-Inspired Sciences and Technology Lab & Multiscale Modeling of Materials (DEMMOS) Lab.",
  },
];

const INDUSTRIAL_PROJECTS: Project[] = [
  {
    id: "3d-cmm-inspection",
    title: "3D Part Inspection & CMM Metrology Pipeline",
    timeline: "2026",
    affiliation: "Supernova Waterjet Cutting Systems",
    category: "Metrology / 3D Scanning",
    summary:
      "Laser scanning and robotic inspection framework performing hands-free point-cloud to CAD model alignment with automated GD&T validation aligned with ISO 9001:2015 requirements.",
    bullets: [
      "Guiding the development of an automated 3D scanner-based CMM metrology system for component verification.",
      "Implemented point-cloud to nominal CAD model alignment using Delaunay triangulated mesh surface reconstruction.",
      "Automated dimensional inspection reports comparing scanned surfaces directly to stated engineering GD&T tolerances.",
    ],
    tools: ["Python", "Point Clouds", "Delaunay Meshing", "CAD Kernels", "3D Scanning", "ISO 9001"],
    imageSrc: null,
  },
  {
    id: "2d-cv-inspection",
    title: "CV-Based 2D In-Process Part Inspection",
    timeline: "2026",
    affiliation: "Supernova Waterjet Cutting Systems",
    category: "Computer Vision / Automation",
    summary:
      "Automated optical metrology platform utilizing a refitted gantry and telecentric backlight to perform real-time DXF-correlated tolerance verification on laser-cut sheet metal components.",
    bullets: [
      "Refitted an Ender-3 frame with a Sony IMX477 HQ camera for precise XY stage translation.",
      "Replaced table with an LED backlight panel to capture high-contrast silhouettes across multiple positions.",
      "Engineered multi-tile image stitching with lossless compression for edge storage optimization.",
      "Detected geometric primitives (lines, chamfers, radii) and evaluated dimensions against nominal CAD DXF coordinates.",
      "Integrated agentic AI workflows to optimize operator UI interactions and data flow.",
    ],
    tools: ["Python", "OpenCV", "ezdxf", "NumPy", "Hardware Integration", "Agentic UI"],
    imageSrc: "/projects/2d-part-inspection.png",
  },
  {
    id: "fusion-360-mcp-llm",
    title: "Fusion 360 MCP Integration with LLM",
    timeline: "2025",
    affiliation: "Supernova Waterjet Cutting Systems",
    category: "CAD Automation / Tooling",
    summary:
      "Model Context Protocol (MCP) server connecting Large Language Models directly to Autodesk Fusion 360's Python API for automated parametric CAD modeling and toolpath querying.",
    bullets: [
      "Constructed an MCP service layer bridging local/remote LLMs directly into the Fusion 360 runtime environment.",
      "Mapped generative AI prompts to parametric sketch generation, feature extrusion, and geometry modification scripts.",
      "Implemented structured validation pipelines to verify dimensional constraints and prevent API geometry execution errors.",
    ],
    tools: ["Python", "Autodesk Fusion API", "Model Context Protocol (MCP)", "LLMs"],
    imageSrc: null,
  },
  {
    id: "round-bottle-labeling",
    title: "Automated Round-Bottle Labeling Machine",
    timeline: "2021 – 2025",
    affiliation: "Supernova Waterjet Cutting Systems",
    category: "Machine Design / Mechatronics",
    summary:
      "Mechatronic packaging automation system supporting variable diameter bottles with inline optical quality inspection and dynamic conveyor rejection.",
    bullets: [
      "Engineered components and dynamic assemblies optimized for vibration damping and structural rigidity via Ansys Mechanical FEA.",
      "Manufactured components in-house using 3-axis CNC milling and 2-axis turning with toolpaths programmed in Fusion 360.",
      "Developed a computer vision and ML pipeline to detect label wrinkles and trigger live conveyor rejections.",
      "Designed control architecture with Raspberry Pi as master and STM32 microcontrollers as slaves over I2C, paired with a parallel Rockwell / Allen-Bradley PLC system.",
      "Built a Python-based HMI touch interface to monitor and operate the machine.",
    ],
    tools: ["Ansys Mechanical", "Fusion 360", "OpenCV", "Raspberry Pi", "STM32", "Allen-Bradley PLC"],
    imageSrc: "/projects/RBLM.png",
  },
];

const ACADEMIC_PROJECTS: Project[] = [
  {
    id: "biofidelic-footwear-tester",
    title: "Biofidelic Footwear Performance Testing System (Master's Thesis)",
    timeline: "Sept 2024 – May 2026",
    affiliation: "Applied Solid Mechanics Lab, UMass Lowell",
    category: "Biomechanics / Experimental Testing",
    summary:
      "Anatomically informed footwear testing apparatus and 3D-printed foot surrogate driven by 3000 fps high-speed tracking, replicating coupled sagittal-plane push-off kinematics.",
    bullets: [
      "Formulated a kinematic pulley-string analytical model extracting Effective Bending Stiffness (EBS), capturing upper-structure engagement showing values 2.5–4x higher than standard 3-point bending.",
      "Assessed cyclic hysteresis and torque-rotation responses across 54 military boot specimens, proving carbon-fiber composite insoles boost energy return efficiency by 5–10%.",
      "Built an automated data reduction pipeline using Savitzky-Golay filtering and iterative regression (R² ≥ 0.99), isolating setup variability (5–7% CV) from manufacturing variance (12–14% CV).",
    ],
    tools: ["Experimental Mechanics", "High-Speed Motion Capture (3000 fps)", "Composite Mechanics", "Python Data Pipeline"],
    imageSrc: "/projects/biofidelic-tester.png",
  },
  {
    id: "fiber-composite-orientation",
    title: "CFRP Microstructure & CT Fiber Orientation Analysis",
    timeline: "Sept 2024 – May 2026",
    affiliation: "Applied Solid Mechanics Lab, UMass Lowell",
    category: "Computational Mechanics / Imaging",
    summary:
      "Orientation-tensor-based fiber orientation algorithm analyzing low-resolution X-ray Computed Tomography (XCT) scans of carbon-fiber reinforced polymers (CFRP).",
    bullets: [
      "Engineered an orientation-tensor algorithm retaining 80% fiber orientation detection accuracy from low-resolution scans (down to 1.5% resolution).",
      "Implemented structure-tensor eigenvalue decomposition for continuous vector field orientation mapping.",
      "Calculated orientation tensors across voxel sets for direct constitutive mapping into structural FEA models.",
    ],
    tools: ["Python", "SciPy", "XCT Volumetric Analysis", "Tensor Analysis", "CFRP Constitutive Modeling"],
    imageSrc: null,
  },
  {
    id: "optical-flow-suite",
    title: "Optical Flow Point Tracking Suite",
    timeline: "Sept 2024 – May 2026",
    affiliation: "Applied Solid Mechanics Lab, UMass Lowell",
    category: "Computer Vision / Experimental Mechanics",
    summary:
      "Multi-point optical tracking suite applied to human gait kinematic marker analysis and dynamic crack-propagation monitoring.",
    bullets: [
      "Developed a multi-point Lucas-Kanade optical flow tracking program for video sequence analysis.",
      "Tracked kinematic markers in human gait videos to benchmark against biomimetic testing rigs.",
      "Derived a low-cost crack detection and tracking method for tensile testing in composite textiles as an alternative to DIC.",
      "Coordinated an automated motorized microscope stage to track crack tips dynamically throughout tensile experiments.",
    ],
    tools: ["Python", "OpenCV", "Lucas-Kanade Optical Flow", "Stage Automation", "Tensile Testing"],
    imageSrc: ["/projects/bootbending.gif", ["/projects/lkdic-1.gif", "/projects/lkdic-2.gif"]],
  },
  {
    id: "microstructure-image-ml",
    title: "Microstructure Image Processing & ML Property Prediction",
    timeline: "Jun 2023 – May 2024",
    affiliation: "Multiscale Modeling of Materials (DEMMOS) Lab, Virginia Tech",
    category: "Image Processing / Machine Learning",
    summary:
      "Automated image segmentation and dimensionality reduction framework utilizing 2-point spatial correlation and PCA to train Artificial Neural Networks for predicting composite material properties, integrated with peridynamic mesh generation.",
    bullets: [
      "Engineered automated image segmentation workflows converting raw microstructural and CT images into segmented binary phase matrices.",
      "Formulated spatial 2-point correlation statistics (void-void spatial distribution) to quantify phase morphology and spatial dispersion.",
      "Applied Principal Component Analysis (PCA) for statistical dimensionality reduction, extracting dominant low-dimensional microstructural descriptors.",
      "Trained Artificial Neural Network (ANN) regression architectures using PCA features to accurately predict effective material properties.",
      "Automated particle-discretization pipelines converting segmented phase domains into discrete lattice meshes for downstream Peridynamics fracture simulations.",
      "Built post-processing automation in MATLAB and Tecplot for ensemble averaging and multi-case visualization across HPC datasets.",
    ],
    tools: ["Python", "OpenCV", "PCA (scikit-learn)", "Artificial Neural Networks (ANN)", "2-Point Correlation", "Peridynamics", "MATLAB"],
    imageSrc: "/projects/PD-ann.png",
  },
  {
    id: "self-aligning-filtration-vessel",
    title: "Self-Aligning Polymer Filtration Vessel System",
    timeline: "Aug 2022 – May 2023",
    affiliation: "Maag Group Americas / Virginia Tech",
    category: "Mechanical Design / CFD",
    summary:
      "Self-aligning coupling mechanism for high-pressure polymer filtration vessels delivering retrofit capability and a 50% cost reduction.",
    bullets: [
      "Designed a self-aligning mechanical interface maintaining sealed polymer flow up to ±10 degrees of angular misalignment.",
      "Simulated non-Newtonian polymer fluid flow in Ansys Fluent to eliminate shear dead zones, localized pressure drop, and vortex stagnation.",
      "Conducted manufacturability analysis (DFM) for vertical machining center (VMC) milling of high-pressure components and authored technical documentation.",
    ],
    tools: ["Ansys Fluent (CFD)", "SolidWorks", "DFM (VMC Milling)", "Fluid Mechanics"],
    imageSrc: [["/projects/maag-1.png", "/projects/maag-2.png"], "/projects/maag-3.png"],
  },
  {
    id: "biomimetic-bat-robot",
    title: "Biomimetic Echolocation Bat Robot",
    timeline: "Jan 2020 – May 2023",
    affiliation: "Bio-Inspired Sciences and Technology Lab, Virginia Tech",
    category: "Soft Robotics / Bio-Acoustics",
    summary:
      "Biomimetic robot replicating greater horseshoe bat biosonar via soft-robotic pinnae and noseleaf morphing for dynamic Doppler shift induction at ultrasonic frequencies (40-80 kHz).",
    bullets: [
      "Designed hybrid actuation architectures combining pneumatic systems and tendon-driven mechanisms to actuate soft-robotic pinnae (ears) and noseleaf structures.",
      "Induced dynamic Doppler shifts across high ultrasonic frequency bands (80–110 kHz) to emulate horseshoe bat biosonar morphometry.",
      "Conducted hyperelastic material simulations in Ansys Mechanical and acoustic wave propagation modeling in COMSOL Multiphysics.",
      "Compiled acoustic datasets and deployed a CNN to classify plant species based on echo signatures (published in Advanced Intelligent Systems).",
      "Presented research at the 181st and 185th Acoustical Society of America (ASA) meetings; awarded the Robert W. Young Award for Undergraduate Research in Acoustics.",
    ],
    tools: ["Soft Robotics", "Ansys Mechanical", "COMSOL Multiphysics", "Pneumatics", "Acoustics"],
    imageSrc: ["/projects/batbot-1.jpeg", "/projects/batbot-2.png"],
  },
];

const SKILL_GROUPS = [
  {
    category: "Mechanical & Manufacturing",
    items: ["SolidWorks", "Fusion 360", "Creo / Siemens NX", "DFM (CNC Milling/Turning)", "GD&T", "CMM Inspection"],
  },
  {
    category: "Simulation & Modeling",
    items: ["Ansys Structural", "Ansys CFX / Fluent", "COMSOL Multiphysics", "Abaqus (UMAT/VUMAT)", "Peridynamics"],
  },
  {
    category: "Vision & Computation",
    items: ["Python", "MATLAB", "C# / C++", "OpenCV", "Optical Flow", "CT Image Processing", "PyTorch / ML", "CUDA programming"],
  },
  {
    category: "Controls & Instrumentation",
    items: ["Raspberry Pi", "STM32 (I2C)", "Allen-Bradley / Rockwell PLC", "High-Speed MoCap", "Sensors & DAQ"],
  },
];

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (imageSrc: string, title: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize imageSrc into rows (an array of string or string[])
  const rows: ImageItem[] = React.useMemo(() => {
    if (!project.imageSrc) return [];
    if (typeof project.imageSrc === "string") return [project.imageSrc];
    return project.imageSrc;
  }, [project.imageSrc]);

  const hasValidImages = rows.length > 0;
  const isImageLeft = index % 2 === 1;

  return (
    <article className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-stone-300 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500">
          <span className="flex items-center gap-1.5 font-medium text-stone-700">
            <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            {project.timeline}
          </span>
          <span className="text-stone-500">{project.affiliation}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-stone-500 font-semibold">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-stone-900 mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="self-start sm:self-auto inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors py-1 cursor-pointer shrink-0"
          >
            <span>{isOpen ? "Hide details" : "Read details"}</span>
            {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
          </button>
        </div>

        <div
          className={`flex flex-col gap-5 ${
            hasValidImages
              ? isImageLeft
                ? "md:flex-row-reverse md:items-start"
                : "md:flex-row md:items-start"
              : ""
          }`}
        >
          <div className="flex-1 space-y-3">
            <p className="text-stone-600 text-sm leading-relaxed text-justify">
              {project.summary}
            </p>

            {isOpen && (
              <div className="pt-2 border-t border-stone-100 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                  Implementation Highlights
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700 leading-relaxed list-disc list-outside pl-4">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-justify">{bullet}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200/60 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {hasValidImages && (
            <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-2.5">
              {rows.map((rowItem, rIdx) => {
                if (Array.isArray(rowItem)) {
                  return (
                    <div key={rIdx} className="flex gap-2 w-full">
                      {rowItem.map((imgSrc, cIdx) => (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() => onImageClick(imgSrc, project.title)}
                          className="group/img relative flex-1 h-32 sm:h-36 rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs cursor-zoom-in block text-left focus:outline-none focus:ring-2 focus:ring-stone-400 p-1.5"
                          aria-label={`Enlarge image ${rIdx + 1}-${cIdx + 1} for ${project.title}`}
                        >
                          <div className="relative w-full h-full bg-white">
                            <Image
                              src={imgSrc}
                              alt={`${project.title} - ${rIdx + 1}.${cIdx + 1}`}
                              fill
                              unoptimized
                              className="object-contain transition-transform duration-300 group-hover/img:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-stone-900/0 group-hover/img:bg-stone-900/5 transition-colors pointer-events-none rounded-xl" />
                        </button>
                      ))}
                    </div>
                  );
                }

                return (
                  <button
                    key={rIdx}
                    type="button"
                    onClick={() => onImageClick(rowItem, project.title)}
                    className="group/img relative w-full h-40 sm:h-44 rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs cursor-zoom-in block text-left focus:outline-none focus:ring-2 focus:ring-stone-400 p-2"
                    aria-label={`Enlarge image ${rIdx + 1} for ${project.title}`}
                  >
                    <div className="relative w-full h-full bg-white">
                      <Image
                        src={rowItem}
                        alt={`${project.title} - ${rIdx + 1}`}
                        fill
                        unoptimized
                        className="object-contain transition-transform duration-300 group-hover/img:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-stone-900/0 group-hover/img:bg-stone-900/5 transition-colors pointer-events-none rounded-xl" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sanmeel.lagad@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenImage = (src: string, title: string) => {
    setActiveModalImage({ src, title });
  };

  const handleCloseImage = () => {
    setActiveModalImage(null);
  };

  useEffect(() => {
    if (!activeModalImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalImage]);

  return (
    <div style={{ backgroundColor: "#FBFBFA", color: "#1c1917" }} className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-20">

        {/* 1. Introduction Section */}
        <header className="space-y-10">
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-mono tracking-widest uppercase text-stone-500 font-semibold">
                Portfolio & Engineering Work
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-950 leading-[1.12]">
                Sanmeel Vijay Lagad
              </h1>
              <p className="text-lg text-stone-600 font-normal leading-relaxed">
                Mechanical & Computational Engineer
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/sanmeellagad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium shadow-xs transition-all active:scale-98"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
                  LinkedIn Profile
                </a>
                <a
                  href={SCHOLAR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium shadow-xs transition-all active:scale-98"
                >
                  <ScholarIcon className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                  Google Scholar
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium shadow-xs transition-all active:scale-98 cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  )}
                  <span>{copied ? "Copied: sanmeel.lagad@gmail.com" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div
              style={{ width: "220px", height: "220px" }}
              className="relative rounded-full overflow-hidden border-2 border-stone-300 bg-white shadow-md shrink-0"
            >
              <Image
                src="/profile.jpg"
                alt="Sanmeel Vijay Lagad"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* About Narrative */}
          <div className="pt-6 border-t border-stone-200 space-y-2.5 max-w-3xl">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
              About
            </h2>
            <p className="text-base text-stone-700 leading-relaxed font-normal text-justify">
              Mechanical Engineering M.S. graduate specializing in advanced composite materials, experimental mechanics, and test apparatus design. Experienced in dynamic test rig development, microstructural analysis via CT image processing, and manufacturing automation—combining hands-on fabrication, high-speed instrumentation, and Python/MATLAB pipelines with finite element modeling (Abaqus, Ansys, COMSOL) to evaluate processing-structure-performance relationships.
            </p>
          </div>
        </header>

        {/* 2. Technical Focus Areas */}
        <section className="space-y-6 border-t border-stone-200 pt-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-stone-100 text-stone-800">
              <Layers className="w-5 h-5 shrink-0" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Technical Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl border border-stone-200 bg-white shadow-sm space-y-2.5"
              >
                <div className="text-xs font-semibold text-stone-900 font-mono uppercase tracking-wider">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded text-xs bg-stone-100 text-stone-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Education Section */}
        <section className="space-y-5">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
            <div className="p-2 rounded-lg bg-stone-100 text-stone-800">
              <BookOpen className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                Education
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Academic degrees, lab affiliations, and research specializations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-white shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    {edu.timeline}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-medium text-stone-600 mt-0.5">
                    {edu.institution}
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pt-1 border-t border-stone-100 text-justify">
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Industrial Projects */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
            <div className="p-2 rounded-lg bg-stone-100 text-stone-800">
              <Briefcase className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                Industrial Projects
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Manufacturing automation, optical inspection systems, and CAD tooling integrations.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {INDUSTRIAL_PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onImageClick={handleOpenImage}
              />
            ))}
          </div>
        </section>

        {/* 5. Academic Projects */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
            <div className="p-2 rounded-lg bg-stone-100 text-stone-800">
              <GraduationCap className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                Academic & Research Projects
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Experimental biomechanics, soft robotics, computer vision, and computational modeling.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {ACADEMIC_PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onImageClick={handleOpenImage}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <span>Sanmeel Vijay Lagad</span>
          <div className="flex items-center gap-4">
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/sanmeellagad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </main>

      {/* Lightbox Modal Popup */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleCloseImage}
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
          >
            {/* Modal Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 bg-stone-50 text-stone-800 text-xs font-mono">
              <span className="truncate pr-4 font-medium">{activeModalImage.title}</span>
              <button
                type="button"
                onClick={handleCloseImage}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[75vh] bg-white p-4">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.title}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}