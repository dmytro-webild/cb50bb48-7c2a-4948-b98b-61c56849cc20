import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Master Dropshipping with 3D Interactive Learning | 3D Dropship Pro',
  description: 'Premium 3D-visualized dropshipping course. Join 5,000+ entrepreneurs scaling their income. Start your free module today.',
  openGraph: {
    "title": "Master Dropshipping with 3D Interactive Learning | 3D Dropship Pro",
    "description": "Unlock advanced ecommerce strategies with our premium 3D training platform.",
    "siteName": "3D Dropship Pro",
    "type": "website"
  },
};

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
