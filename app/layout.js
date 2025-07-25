import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ak76024 - Url shortener",
  description: "A simple URL shortener application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
