// SoftDevGlobal's live business apps. Each entry gets its own page at /solutions/<slug>.
// Copy, links, screenshots and demo logins come from the portfolio on softdev.global.

export type Module = {
  title: string;
  desc: string;
  image: string; // public path
  previewUrl?: string; // "Live Preview"
  videoUrl?: string; // "Watch Video"
  demo?: { email: string; password: string }; // public demo login for the live preview
  note?: string;
};

export type Solution = {
  slug: string;
  name: string; // short name for cards, menus and the footer
  title: string; // full product title
  categories: string[]; // the filter tags used on softdev.global
  platforms: string;
  summary: string; // card description
  intro: string; // detail-page introduction
  image: string; // public path, 3:2 screenshot
  modules: Module[];
  features: { title: string; desc: string }[];
  quote: string;
  flagship?: boolean; // shown large on the home page
};

export const solutions: Solution[] = [
  {
    slug: "bms-pro-pink",
    name: "BMS PRO PINK",
    title: "BMS PRO PINK Business Booking System",
    categories: ["Business", "Beauty & Personal Care"],
    platforms: "Web & mobile",
    flagship: true,
    summary:
      "Empower beauty, wellness, and personal care businesses with a modern online booking app that streamlines appointments, manages staff and services, tracks clients, and automates daily operations—delivering a seamless scheduling experience that boosts efficiency, reduces no-shows, and drives consistent growth.",
    intro:
      "Explore key sections of the BMS PRO PINK booking platform, built for beauty, wellness, and personal care businesses. From the owner dashboard and branch management to the booking engine and staff tools, each module is designed to streamline operations, simplify scheduling, and enhance the client experience.",
    image: "/solutions/bms-pro-pink/main.png",
    modules: [
      {
        title: "Owner Dashboard",
        desc: "The full picture of your business: bookings, staff, services, customers and every branch in one place.",
        image: "/solutions/bms-pro-pink/owner-dashboard.png",
        previewUrl: "https://pink.bmspros.com.au/login",
        videoUrl: "https://www.youtube.com/watch?v=JdAXnr4pRws",
        demo: { email: "abcd@email.com", password: "abcd@email.com" },
      },
      {
        title: "Branch Admin",
        desc: "Run each location day to day: today's bookings, staff attendance, requests and appointments.",
        image: "/solutions/bms-pro-pink/branch-admin.png",
        previewUrl: "https://pink.bmspros.com.au/login",
        videoUrl: "https://www.youtube.com/shorts/VL0BqeutLz8",
        demo: { email: "stf01@email.com", password: "123456" },
      },
      {
        title: "Smart Booking Engine",
        desc: "A branded online booking page where clients pick a service, a staff member and a time that suits them.",
        image: "/solutions/bms-pro-pink/smart-booking-engine.png",
        previewUrl: "https://pink.bmspros.com.au/book-now/abcd",
        videoUrl: "https://www.youtube.com/watch?v=muOYA2gzDTY",
        demo: { email: "client@email.com", password: "123456" },
      },
    ],
    features: [
      { title: "Online appointments", desc: "Clients book 24/7 from a modern booking page, with no phone tag." },
      { title: "Staff & services", desc: "Manage team members, rosters and your service menu in one place." },
      { title: "Client tracking", desc: "Keep client details and booking history at your fingertips." },
      { title: "Automated operations", desc: "Automate everyday admin so your team can focus on clients." },
      { title: "Fewer no-shows", desc: "A seamless scheduling experience that keeps appointments on track." },
      { title: "Multi-branch ready", desc: "Owner and branch admin views for businesses with more than one location." },
    ],
    quote: "A seamless scheduling experience that boosts efficiency and drives consistent growth.",
  },
  {
    slug: "finance-app",
    name: "Finance App",
    title: "Finance App",
    categories: ["Finance"],
    platforms: "Web & mobile",
    summary:
      "Empower your customers with a smart finance app that delivers real-time insights, loan management tools, and financial tracking to build lasting trust and engagement.",
    intro:
      "Explore the different templates and layouts available with our Finance app. Each one is fully customizable to match your brand and meet your clients' financial needs. See how it can elevate your digital banking experience.",
    image: "/solutions/finance-app/main.png",
    modules: [
      {
        title: "Client View",
        desc: "What your customers see: their loans, balances and financial insights in a clean, branded app.",
        image: "/solutions/finance-app/client-view.png",
        previewUrl: "https://silver.softdev.global/dashboard",
        demo: { email: "admin@email.com", password: "11111111" },
      },
      {
        title: "Admin View",
        desc: "Manage customers, loans and content from a secure admin dashboard.",
        image: "/solutions/finance-app/admin-view.png",
        previewUrl: "https://silver.softdev.global/admin/dashboard",
        demo: { email: "admin@email.com", password: "11111111" },
      },
    ],
    features: [
      { title: "Real-time insights", desc: "Up-to-date figures that help customers understand their finances." },
      { title: "Loan management", desc: "Tools to view, track and manage loans in one place." },
      { title: "Financial tracking", desc: "Customers can follow their progress and stay on top of their goals." },
      { title: "Your brand", desc: "Every template is fully customisable to match your brand." },
      { title: "Client & admin views", desc: "A customer-facing app plus an admin dashboard for your team." },
      { title: "Trust & engagement", desc: "A modern digital experience that keeps customers coming back." },
    ],
    quote: "Real-time insights and loan tools that build lasting trust and engagement.",
  },
  {
    slug: "church-app",
    name: "Church App",
    title: "Church App",
    categories: ["Church", "Religious"],
    platforms: "Web & mobile",
    summary: "A modern church app connecting congregations through worship, events, and community.",
    intro:
      "Explore the different templates and layouts available with our Church app. Each one is fully customizable to reflect your church's mission and community. See how it can bring your ministry to life.",
    image: "/solutions/church-app/main.png",
    modules: [
      {
        title: "Membership View",
        desc: "Members stay connected with worship, events and church news from their phone.",
        image: "/solutions/church-app/membership-view.jpg",
        previewUrl: "https://faith.softdev.global/church-dashboard",
      },
      {
        title: "Admin View",
        desc: "Church staff manage members, events and announcements from one dashboard.",
        image: "/solutions/church-app/admin-view.png",
        previewUrl: "https://faith.softdev.global/admin/dashboard",
      },
    ],
    features: [
      { title: "Worship", desc: "Bring services, messages and resources to your congregation." },
      { title: "Events", desc: "Share upcoming events and keep everyone in the loop." },
      { title: "Community", desc: "Help members connect with each other throughout the week." },
      { title: "Membership", desc: "A dedicated member experience built around your church." },
      { title: "Admin dashboard", desc: "Simple tools for staff and volunteers to keep things running." },
      { title: "Your mission, your brand", desc: "Fully customisable to reflect your church's mission and community." },
    ],
    quote: "Connecting congregations through worship, events, and community.",
  },
  {
    slug: "club-app",
    name: "Club App",
    title: "Club App",
    categories: ["Sports & Community Club"],
    platforms: "Web & mobile",
    summary:
      "Engage your members with a powerful club app that brings all activities, events, and communications into one seamless experience — boosting participation, connection, and community spirit.",
    intro:
      "Explore the different templates and layouts available with our Club app. Each one is fully customizable to reflect your club's identity and streamline member engagement. See how it can transform your club's digital experience.",
    image: "/solutions/club-app/main.jpg",
    modules: [
      {
        title: "Membership View",
        desc: "Members see activities, events and club news in one app.",
        image: "/solutions/club-app/membership-view.jpg",
        previewUrl: "https://club.softdev.global/",
      },
      {
        title: "Admin View",
        desc: "Committee members manage members, events and communications.",
        image: "/solutions/club-app/admin-view.jpg",
        previewUrl: "https://club.softdev.global/admin/dashboard",
      },
    ],
    features: [
      { title: "Activities", desc: "Every club activity in one place, easy for members to find." },
      { title: "Events", desc: "Promote events and boost participation across your club." },
      { title: "Communications", desc: "Keep members informed with news and updates." },
      { title: "Member engagement", desc: "Build connection and community spirit all season long." },
      { title: "Admin dashboard", desc: "Tools for your committee to manage the club with ease." },
      { title: "Your club's identity", desc: "Fully customisable to reflect your colours and brand." },
    ],
    quote: "All activities, events, and communications in one seamless experience.",
  },
  {
    slug: "salon-app",
    name: "Salon App",
    title: "Salon App",
    categories: ["Beauty & Personal Care"],
    platforms: "Web & mobile",
    summary:
      "Delight your clients with a smart salon app that offers seamless booking, personalized beauty recommendations, and real-time updates—building trust, loyalty, and an exceptional customer experience.",
    intro:
      "Explore the different templates and layouts available with our Salon app. Each one is fully customizable to reflect your salon's style and cater to your clients' beauty needs. See how it can elevate your client experience and brand presence.",
    image: "/solutions/salon-app/main.png",
    modules: [
      {
        title: "Client View",
        desc: "Clients book appointments, browse services and get real-time updates.",
        image: "/solutions/salon-app/client-view.png",
        previewUrl: "https://salon.softdev.global/",
      },
      {
        title: "Admin View",
        desc: "Manage bookings, services, staff and clients from one dashboard.",
        image: "/solutions/salon-app/admin-view.png",
        previewUrl: "https://salon.softdev.global/admin",
      },
      {
        title: "Staff View",
        desc: "Stylists see their schedule and appointments at a glance.",
        image: "/solutions/salon-app/staff-view.png",
        previewUrl: "https://salon.softdev.global/staff",
      },
    ],
    features: [
      { title: "Seamless booking", desc: "Clients book their next visit in a few taps." },
      { title: "Personalised recommendations", desc: "Beauty suggestions tailored to each client." },
      { title: "Real-time updates", desc: "Keep clients informed about their appointments." },
      { title: "Loyalty & trust", desc: "An experience that keeps clients coming back." },
      { title: "Staff view", desc: "A dedicated view for your team's day." },
      { title: "Your salon's style", desc: "Fully customisable to reflect your brand." },
    ],
    quote: "Building trust, loyalty, and an exceptional customer experience.",
  },
  {
    slug: "bms-pro-trade",
    name: "BMS PRO TRADE",
    title: "BMS PRO TRADE",
    categories: ["Business", "Industrial Job Management"],
    platforms: "Web, iOS & Android",
    flagship: true,
    summary:
      "Manage your trade business with a powerful all-in-one platform designed for contractors, field service pros, and trade specialists. BMS PRO TRADE streamlines job bookings, site inspections, instant quoting, field staff dispatching, invoicing, and customer follow-ups.",
    intro:
      "Discover the powerful modules that make up BMS PRO TRADE, purpose-built for trade contractors, field service pros, and repair specialists. From job scheduling and site inspections to instant quoting, field dispatching, and automated invoicing, every feature is designed to keep your trade business running smoothly, eliminate administrative friction, and deliver exceptional service to your clients.",
    image: "/solutions/bms-pro-trade/main.png",
    modules: [
      {
        title: "Owner Dashboard",
        desc: "Jobs, quotes, staff and invoices across your whole trade business.",
        image: "/solutions/bms-pro-trade/owner-dashboard.png",
        previewUrl: "https://trade.bmspros.com.au/login",
        demo: { email: "jhons@email.com", password: "jhons@email.com" },
      },
      {
        title: "Smart Booking Engine",
        desc: "Customers book a job online and pick a time that works for them.",
        image: "/solutions/bms-pro-trade/smart-booking-engine.png",
        previewUrl: "https://trade.bmspros.com.au/booknow/tech-electrical",
        demo: { email: "customer@email.com", password: "customer@email.com" },
      },
      {
        title: "Staff Mobile App",
        desc: "Field staff get their jobs, site details and updates on the go.",
        image: "/solutions/bms-pro-trade/staff-mobile-app.png",
        note: "Download the BMS PRO Trade App from the Google Play Store or Apple App Store.",
        demo: { email: "sam@email.com", password: "00001111" },
      },
    ],
    features: [
      { title: "Job bookings", desc: "Take bookings online and keep your schedule full." },
      { title: "Site inspections", desc: "Capture inspection details on site, straight from the app." },
      { title: "Instant quoting", desc: "Send quotes fast and win more work." },
      { title: "Field staff dispatch", desc: "Send the right person to the right job." },
      { title: "Invoicing", desc: "Automated invoicing so you get paid sooner." },
      { title: "Customer follow-ups", desc: "Stay in touch and turn one-off jobs into repeat work." },
    ],
    quote: "Eliminate administrative friction, capture more revenue, and grow with total confidence.",
  },
  {
    slug: "bms-pro-mechanic",
    name: "BMS PRO MECHANIC",
    title: "BMS PRO MECHANIC Workshop Management System",
    categories: ["Business", "Automotive", "Auto & Vehicles"],
    platforms: "Web, iOS & Android",
    flagship: true,
    summary:
      "Manage your automotive workshop with a powerful all-in-one platform designed for mechanics, service centers, and repair businesses. BMS PRO MECHANIC streamlines job bookings, vehicle management, inspections, estimates, invoicing, inventory tracking, and staff coordination.",
    intro:
      "Discover the powerful modules that make up BMS PRO MECHANIC, purpose-built for automotive workshops, service centers, and repair businesses. From vehicle management and job tracking to inspections and team coordination, every feature is designed to keep your workshop running efficiently, improve productivity, and deliver exceptional service to your customers.",
    image: "/solutions/bms-pro-mechanic/main.png",
    modules: [
      {
        title: "Owner Dashboard",
        desc: "Every workshop, job and vehicle in one view, with the numbers that matter.",
        image: "/solutions/bms-pro-mechanic/owner-dashboard.png",
        previewUrl: "https://black.bmspros.com.au/login",
        videoUrl: "https://www.youtube.com/watch?v=HZI5MryE-Ao",
        demo: { email: "555@gmail.com", password: "555@gmail.com" },
      },
      {
        title: "Branch Admin",
        desc: "Run a single workshop: bookings, bays, staff and today's jobs.",
        image: "/solutions/bms-pro-mechanic/branch-admin.png",
        previewUrl: "https://black.bmspros.com.au/login",
        videoUrl: "https://www.youtube.com/watch?v=z1VuLDhGYRU&t=42s",
        demo: { email: "staf1@email.com", password: "123456" },
      },
      {
        title: "Smart Booking Engine",
        desc: "Customers book a service for their vehicle online, any time.",
        image: "/solutions/bms-pro-mechanic/smart-booking-engine.png",
        previewUrl: "https://black.bmspros.com.au/book-now/star-gate",
        videoUrl: "https://www.youtube.com/watch?v=XbNEzLlGhMc&t=5s",
        demo: { email: "acsu@gmail.com", password: "acsu@gmail.com" },
      },
      {
        title: "Staff Mobile App",
        desc: "Mechanics see their jobs, inspections and vehicle details on their phone.",
        image: "/solutions/bms-pro-mechanic/staff-mobile-app.png",
        videoUrl: "https://www.youtube.com/watch?v=r5TpKx7l-so&t=1s",
        note: "Download the BMS PRO BLACK Mechanic App from the Google Play Store or Apple App Store.",
        demo: { email: "staf1@email.com", password: "123456" },
      },
    ],
    features: [
      { title: "Job bookings", desc: "Online bookings that flow straight into your workshop schedule." },
      { title: "Vehicle management", desc: "Vehicle details and service history for every customer." },
      { title: "Inspections & estimates", desc: "Record inspections and send estimates quickly." },
      { title: "Invoicing", desc: "Turn finished jobs into invoices without double entry." },
      { title: "Inventory tracking", desc: "Know what parts you have and what you need." },
      { title: "Staff coordination", desc: "Keep your team aligned with a dedicated mobile app." },
    ],
    quote: "Improve efficiency, deliver better customer service, and grow your business.",
  },
  {
    slug: "real-estate-app",
    name: "Real Estate App",
    title: "Real Estate App",
    categories: ["Real Estate", "Property"],
    platforms: "Web & mobile",
    summary:
      "Empower customers with a smart real estate app that delivers real-time property listings, personalised search tools, and seamless agent communication to drive faster decisions and stronger engagement.",
    intro:
      "Explore a range of templates and layouts designed for our real estate app. Each option is fully customizable to match your brand and support buyers, sellers, and agents. See how it can elevate your digital property experience.",
    image: "/solutions/real-estate-app/main.png",
    modules: [
      {
        title: "Admin View",
        desc: "Agents manage listings, enquiries and clients from one dashboard.",
        image: "/solutions/real-estate-app/admin-view.png",
        previewUrl: "https://realestate.bmspros.com.au/agent",
      },
      {
        title: "Client View",
        desc: "Buyers browse listings, search by what matters and contact agents.",
        image: "/solutions/real-estate-app/client-view.png",
        previewUrl: "https://realestate.bmspros.com.au/browse",
      },
    ],
    features: [
      { title: "Real-time listings", desc: "Property listings that are always up to date." },
      { title: "Personalised search", desc: "Search tools that help buyers find the right home faster." },
      { title: "Agent communication", desc: "Seamless contact between buyers, sellers and agents." },
      { title: "Faster decisions", desc: "Everything a buyer needs to act with confidence." },
      { title: "Agent dashboard", desc: "Manage listings and enquiries in one place." },
      { title: "Your brand", desc: "Fully customisable to match your agency." },
    ],
    quote: "Faster decisions and stronger engagement for buyers, sellers, and agents.",
  },
];

// Filter tags in the order softdev.global shows them.
export const categories = [
  "Business",
  "Beauty & Personal Care",
  "Finance",
  "Church",
  "Religious",
  "Sports & Community Club",
  "Industrial Job Management",
  "Automotive",
  "Auto & Vehicles",
  "Real Estate",
  "Property",
];

export function findSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
