import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Precision Sand Blasting",
  description: "Official website of Precision Sand Blasting",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
