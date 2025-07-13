import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectData = [
    {
      title: "FILLER TaskMaster Pro",
      description:
        "A comprehensive web app for managing tasks, deadlines, and team collaboration with real-time updates.",
      techStack: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"],
      features: [
        "Drag-and-drop kanban board with custom workflows.",
        "Role-based permissions and team assignments.",
        "Real-time notifications via WebSockets.",
        "Built-in reports and analytics dashboard.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=TaskMaster+1",
        "https://via.placeholder.com/800x400?text=TaskMaster+2",
        "https://via.placeholder.com/800x400?text=TaskMaster+3",
      ],
      type: "Web",
    },
    {
      title: "FILLER PhotoSnap",
      description:
        "A mobile app for snapping, filtering, and instantly sharing photos with friends and followers.",
      techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
      features: [
        "30+ built-in photo filters and adjustment tools.",
        "Stories and ephemeral posts that disappear after 24h.",
        "In-app chat with image and video support.",
        "Offline capture and automatic sync on reconnect.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=PhotoSnap+1",
        "https://via.placeholder.com/800x400?text=PhotoSnap+2",
      ],
      type: "Mobile",
    },
    {
      title: "FILLER CryptoTracker",
      description:
        "An API service that aggregates real-time cryptocurrency prices, portfolio values, and market alerts.",
      techStack: ["Node.js", "Express", "MongoDB", "Redis"],
      features: [
        "RESTful endpoints for price, volume, and market cap.",
        "Webhook alerts for price thresholds.",
        "Historical data charts via Highcharts integration.",
        "API key management and rate limiting.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=CryptoTracker+1",
        "https://via.placeholder.com/800x400?text=CryptoTracker+2",
        "https://via.placeholder.com/800x400?text=CryptoTracker+3",
      ],
      type: "API",
    },
    {
      title: "FILLER EcoShop",
      description:
        "A green-ecommerce platform that highlights sustainable brands and tracks your carbon footprint per purchase.",
      techStack: ["Vue.js", "Nuxt", "Stripe", "Docker"],
      features: [
        "Sustainability score on every product page.",
        "One-click checkout with carbon offset calculation.",
        "Vendor portal for inventory and order management.",
        "Containerized deployment with Kubernetes support.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=EcoShop+1",
        "https://via.placeholder.com/800x400?text=EcoShop+2",
      ],
      type: "Web",
    },
    {
      title: "FILLER ChatWise",
      description:
        "An AI-powered chatbot framework for websites and messaging apps with customizable personalities.",
      techStack: ["Python", "FastAPI", "OpenAI API", "Docker"],
      features: [
        "Plug-and-play persona templates (support, sales, FAQ).",
        "Contextual memory across multi-turn conversations.",
        "Dashboard for monitoring conversations and metrics.",
        "Easy on-premise or cloud container deployment.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=ChatWise+1",
        "https://via.placeholder.com/800x400?text=ChatWise+2",
        "https://via.placeholder.com/800x400?text=ChatWise+3",
      ],
      type: "AI",
    },
    {
      title: "FILLER GameArcade",
      description:
        "A browser-based gaming portal hosting HTML5 mini-games and live leaderboards.",
      techStack: ["Phaser.js", "JavaScript", "HTML5", "CSS3"],
      features: [
        "15+ arcade-style games with high-score tracking.",
        "Player profiles with achievements and badges.",
        "Real-time multiplayer rooms using Socket.io.",
        "Custom game editor for adding new levels.",
      ],
      images: [
        "https://via.placeholder.com/800x400?text=GameArcade+1",
        "https://via.placeholder.com/800x400?text=GameArcade+2",
      ],
      type: "Game",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0A0A0A] text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 justify-items-center">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
