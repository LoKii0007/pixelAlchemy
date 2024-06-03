import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import "./globals.css";

export const metadata: Metadata = {
  title: "imagnify",
  description: "AI saas app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary: '#624cf5'}}} >
      <html lang="en">
        <body >
          <SignedOut>
            <SignInButton></SignInButton>
          </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
