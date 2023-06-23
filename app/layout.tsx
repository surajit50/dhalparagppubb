import "../styles/globals.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "Dhalpara Gram Panchayat",
  description: "Panchayat & Rural Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Header />

          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
