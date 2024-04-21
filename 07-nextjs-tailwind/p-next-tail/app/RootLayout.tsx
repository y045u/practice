import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { inter, navItems } from "./layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(inter.className, "min-h-dvh")}>
        <header className="container h-16 flex items-center border-b justify-between">
          <h1 className="font-bold">LOGO</h1>
          <nav>
            <ul className="flex gap-4">
              {navItems.map((item) => (
                <li key={item.label} />
              ))}
              <li>
                <Button variant={"ghost"} asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant={"ghost"} asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant={"ghost"} asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant={"ghost"} asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="container sticky top-full h-16 flex items-center border-t">
          <p>&copy; y045u</p>
        </footer>
      </body>
    </html>
  );
}
