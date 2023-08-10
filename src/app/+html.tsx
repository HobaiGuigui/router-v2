import { ScrollViewStyleReset } from "expo-router/html";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1" />
        <ScrollViewStyleReset />
      </head>

      <body>
        <h1>Adicionado no HTML</h1>
        {children}
      </body>
    </html>
  );
}
