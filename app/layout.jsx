import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import Navbar from "./components/Navbar";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import {Spinner} from "@nextui-org/react";


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
          <ClerkLoading>
            <div className="flex w-screen h-screen justify-center items-center">
              <Spinner color="primary" size="lg" />
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <div id="navbar">
              <Navbar />
            </div>
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
