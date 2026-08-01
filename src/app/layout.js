import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pop = Poppins({
  weight:["300","400"]
});

export const metadata = {
  title: {
    default: "SPACE ACADEMY",
    template: "%s | SPACE ACADEMY",
  },

  description:
    "SPACE ACADEMY is a leading educational institute dedicated to academic excellence, student success, experienced faculty, and quality learning.",

  keywords: [
    "SPACE ACADEMY",
    "Space Academy",
    "Space Academy Classes",
    "Coaching Institute",
    "Tuition Classes",
    "Education",
    "Best Coaching Classes",
    "School Coaching",
    "Competitive Exams",
    "Student Learning",
  ],

  applicationName: "SPACE ACADEMY",

  authors: [
    {
      name: "SPACE ACADEMY",
    },
  ],

  creator: "SPACE ACADEMY",

  publisher: "SPACE ACADEMY",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SPACE ACADEMY",
    description:
      "Empowering Minds • Building Futures. Join SPACE ACADEMY for quality education and academic excellence.",
    siteName: "SPACE ACADEMY",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "SPACE ACADEMY",
    description:
      "Empowering Minds • Building Futures.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pop.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col no-scrollbar">
        <ScrollProgress/>
        {children}
        </body>
    </html>
  );
}
