import { FaDiscord, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiDeviceMobile, HiCloud, HiCog } from "react-icons/hi";

export const config = {
    developer: {
        name: "UMER BIN SAMI",
        title: "Mobile Application Developer - Flutter",
        location: "Rawalpindi, Pakistan"
    },
    social: {
        linkedin: "umer-bin-sami-40ab39203",
        email: "umersamikhan03@gmail.com",
        phone: "+92-3341058994"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "uVision",
            description: "uVision is a sleek, service-based mobile application that bridges the gap between clients and creative professionals such as photographers, videographers, designers, and more. The platform allows professionals to create engaging portfolios while enabling clients to discover, review, and book services effortlessly.",
            image: "/projects/uVision.jpg",
            technologies: ["App Design", "API Integration", "Stripe", "Google Maps", "AI"],
            category: "Services & Creative"
        },
        {
            id: 2,
            title: "MIP",
            description: "MIP is a modern and intuitive eCommerce mobile application designed to seamlessly connect customers and sellers in one unified platform. With dual-interface functionality, MIP offers a comprehensive shopping experience for buyers and a powerful business dashboard for sellers.",
            image: "/projects/mip-customer.png",
            technologies: ["App Development", "API Integration", "Payment Integration Framework", "Google Maps", "Push Notifications"],
            category: "eCommerce"
        },
        {
            id: 3,
            title: "SitElbait",
            description: "Customer-facing mobile app for ordering fresh meat from trusted vendors. Browse meat categories, view detailed product information, and place delivery or pickup orders with real-time offers, order tracking, and secure payment processing.",
            image: "/projects/SitElbait.png",
            technologies: ["App Design", "API Integration", "Google Maps", "Push Notifications", "Payment Gateway"],
            category: "Food & Retail"
        },
        {
            id: 4,
            title: "SetVendor",
            description: "Vendor management app that empowers meat vendors with a complete business solution. Manage products and inventory, track live orders in real-time, print invoices using thermal printer, and view detailed analytics through an intuitive dashboard.",
            image: "/projects/SetVendor.png",
            technologies: ["App Design", "API Integration", "Google Maps", "Push Notifications", "Thermal Printer"],
            category: "Food & Retail"
        },
        {
            id: 5,
            title: "Voice Personal Assistant for Smart TV",
            description: "A voice-enabled personal assistant remote controller app for Smart TVs. Connects to Smart TV over Wi-Fi and allows users to control the TV through voice commands in multiple languages.",
            image: "/projects/smart-tv-controller.png",
            technologies: ["Flutter", "Dart", "WiFi", "Voice Recognition", "IoT"],
            category: "IoT & Voice Control"
        }
    ],
    skills: [
        {
            title: "Mobile Development",
            icon: <HiDeviceMobile />,
            description: "Cross-platform & Native",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Flutter Framework", level: "Expert", hot: true },
                { name: "Dart Programming", level: "Expert", hot: true },
                { name: "UI/UX Design", level: "Advanced" },
                { name: "Cross-platform Development", level: "Expert" },
                { name: "App Architecture (MVVM/MVC)", level: "Advanced", hot: true }
            ]
        },
        {
            title: "State Management",
            icon: <HiCog />,
            description: "Data Flow & Architecture",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Provider", level: "Expert", hot: true },
                { name: "Bloc/Cubit", level: "Advanced" },
                { name: "GetX", level: "Advanced" },
                { name: "Riverpod", level: "Intermediate" },
                { name: "State Management Patterns", level: "Expert" }
            ]
        },
        {
            title: "Backend & APIs",
            icon: <HiDatabase />,
            description: "Server & Integration",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Firebase Integration", level: "Expert", hot: true },
                { name: "RESTful API", level: "Expert" },
                { name: "Socket.IO Client", level: "Advanced" },
                { name: "HTTP/GraphQL", level: "Advanced" },
                { name: "Real-time Communication", level: "Expert" }
            ]
        },
        {
            title: "IoT & Hardware",
            icon: <HiCog />,
            description: "Connected Devices",
            bgClass: "bg-cyan-500/10",
            iconClass: "text-cyan-500",
            skills: [
                { name: "Flutter Blue Plus", level: "Advanced", hot: true },
                { name: "MQTT Protocol", level: "Advanced" },
                { name: "BLE Integration", level: "Expert" },
                { name: "IoT Device Management", level: "Advanced" },
                { name: "Hardware Communication", level: "Advanced" }
            ]
        },
        {
            title: "Monetization & Payments",
            icon: <HiCube />,
            description: "Revenue & Transactions",
            bgClass: "bg-green-500/10",
            iconClass: "text-green-500",
            skills: [
                { name: "AdMob Integration", level: "Advanced", hot: true },
                { name: "Stripe Payment Gateway", level: "Advanced" },
                { name: "In-App Purchases", level: "Expert" },
                { name: "Payment Processing", level: "Advanced" },
                { name: "Revenue Optimization", level: "Intermediate" }
            ]
        },
        {
            title: "Maps & Location",
            icon: <HiDatabase />,
            description: "Geospatial Services",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Google Maps Integration", level: "Expert", hot: true },
                { name: "Location Services", level: "Advanced" },
                { name: "Geolocation Tracking", level: "Advanced" },
                { name: "Route Optimization", level: "Intermediate" },
                { name: "Map Customization", level: "Advanced" }
            ]
        },
        {
            title: "Communication & Media",
            icon: <HiCog />,
            description: "Real-time & Streaming",
            bgClass: "bg-pink-500/10",
            iconClass: "text-pink-500",
            skills: [
                { name: "WebRTC", level: "Advanced", hot: true },
                { name: "Video/Audio Streaming", level: "Advanced" },
                { name: "Push Notifications (FCM)", level: "Expert" },
                { name: "Real-time Chat", level: "Expert" },
                { name: "Media Processing", level: "Intermediate" }
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: <HiCube />,
            description: "Intelligent Features",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-500",
            skills: [
                { name: "AI Integration in Mobile Apps", level: "Advanced", hot: true },
                { name: "Machine Learning Models", level: "Intermediate" },
                { name: "TensorFlow Lite", level: "Intermediate" },
                { name: "Natural Language Processing", level: "Intermediate" },
                { name: "Computer Vision", level: "Intermediate" }
            ]
        },
        {
            title: "Tools & Methodologies",
            icon: <HiCube />,
            description: "Development & Management",
            bgClass: "bg-amber-500/10",
            iconClass: "text-amber-500",
            skills: [
                { name: "Git Version Control", level: "Advanced" },
                { name: "Postman API Testing", level: "Advanced" },
                { name: "Agile Methodologies", level: "Advanced", hot: true },
                { name: "Team Leadership", level: "Advanced" },
                { name: "Project Management", level: "Expert" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Umer Bin Sami",
            link: `https://linkedin.com/in/umer-bin-sami-40ab39203`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "umersamikhan03@gmail.com",
            link: "mailto:umersamikhan03@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+92-3341058994",
            link: "tel:+923341058994"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Rawalpindi, Pakistan",
            link: null
        }
    ]
}