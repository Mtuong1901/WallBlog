import "./globals.css";
import "../../../public/bootstrap/css/bootstrap.min.css";

export const metadata = {
  title: "Welcome to wALLBlog",
  description: "Generated MINH TUONG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body style={{backgroundColor : "#001933"}}>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
        <script src="https://kit.fontawesome.com/ea6209cd9f.js" crossorigin="anonymous"></script><script src="https://kit.fontawesome.com/ea6209cd9f.js" crossorigin="anonymous"></script><script src="https://kit.fontawesome.com/ea6209cd9f.js" crossorigin="anonymous"></script>
        
      </body>
    </html>
  );
}
