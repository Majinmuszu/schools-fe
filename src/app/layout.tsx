'use client'

import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { lightTheme } from "@/utils/theme";
import { roboto } from "@/utils/fonts";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline enableColorScheme/>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
