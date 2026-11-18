import React from "react";
import "./styles.css";
import "@/components/Card/Card.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "Filmklubben Rulletekst",
  description:
    "Filmen er slutt. Samtalen begynner. Les filmanmeldelser, artikler og oppdag kommende filmkvelder hos Filmklubben Rulletekst.",
};
export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
