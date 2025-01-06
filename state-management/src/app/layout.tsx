import "./globals.css";
import { StateProvider } from "@/context/state/StateProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body>
        <StateProvider>
          { children }
        </StateProvider>
      </body>
    </html>
  )
}
