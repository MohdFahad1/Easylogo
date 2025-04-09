import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EasyLogo | Create Professional, Free Logos Online",
  description:
    "Design and generate stunning, professional logos quickly and easily for free with EasyLogo. Ideal for startups, small businesses, and personal branding.",
  keywords: [
    "free logo maker",
    "online logo creator",
    "free logo design tool",
    "EasyLogo",
    "professional logos",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/create"
      signUpFallbackRedirectUrl="/create"
    >
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
