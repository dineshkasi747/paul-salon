import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import DemoToolbar from "@/components/common/DemoToolbar";

export const metadata = {
  metadataBase: new URL("https://paulhair.qodeinteractive.com"),
  title: {
    default: "PaulHair - Hair Salon and Hairdresser Theme",
    template: "%s | PaulHair Salon",
  },
  description:
    "Life is more beautiful when you meet the right hairdresser. Modern salon, precision haircutting, balayage, creative styling, and professional hair care.",
  icons: {
    icon: "/wp-content/uploads/2023/03/cropped-ph-favicon-img-1-192x192.png",
    shortcut: "/wp-content/uploads/2023/03/cropped-ph-favicon-img-1-32x32.png",
    apple: "/wp-content/uploads/2023/03/cropped-ph-favicon-img-1-180x180.png",
  },
  openGraph: {
    title: "PaulHair - Hair Salon and Hairdresser Theme",
    description: "Life is more beautiful when you meet the right hairdresser.",
    url: "https://paulhair.qodeinteractive.com",
    siteName: "PaulHair",
    images: [
      {
        url: "/wp-content/uploads/2023/03/o-g-img-1.png",
        width: 1200,
        height: 630,
        alt: "PaulHair",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300..900;1,300..900&family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Roboto:wght@300;400;500;700&family=Roboto+Slab:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        {/* Authentic PaulHair Stylesheets */}
        <link rel="stylesheet" href="/wp-content/plugins/qi-blocks/assets/css/plugins/animate/animate.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/instagram-feed/css/sbi-styles.min6fb3.css" />
        <link rel="stylesheet" href="/wp-content/plugins/paulhair-core/inc/icons/elegant-icons/assets/css/elegant-icons.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/paulhair-core/inc/icons/font-awesome/assets/css/all.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/booked/dist/bookedb2da.css" />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles4999.css" />
        <link rel="stylesheet" href="/wp-content/plugins/qi-blocks/assets/dist/grid06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/qi-blocks/assets/dist/main06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/qi-addons-for-elementor/assets/css/grid.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/qi-addons-for-elementor/assets/css/helper-parts.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/qi-addons-for-elementor/assets/css/main.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/revslider/public/assets/css/rs668eb.css" />
        <link rel="stylesheet" href="/wp-content/plugins/paulhair-core/assets/plugins/perfect-scrollbar/perfect-scrollbar06ca.css" />
        <link rel="stylesheet" href="/wp-content/themes/paulhair/assets/css/main.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/paulhair-core/assets/css/paulhair-core.min06ca.css" />
        <link rel="stylesheet" href="/wp-content/themes/paulhair/style06ca.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min3b94.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-frontend-lite.mind4b4.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-4d4b4.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-18c14d.css" />
      </head>
      <body className="home wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-18 wp-theme-paulhair theme-paulhair qi-blocks-1.1 qodef-gutenberg--no-touch qode-framework-1.2.1 woocommerce-no-js qodef-qi--no-touch qi-addons-for-elementor-1.5.7 qodef-age-verification--opened qodef-back-to-top--enabled qodef-header--divided qodef-header-appearance--sticky qodef-header--transparent qodef-mobile-header--standard qodef-drop-down-second--full-width qodef-drop-down-second--default paulhair-core-1.0 paulhair-1.0 qodef-content-grid-1300 qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-18">
        <div id="qodef-page-wrapper">
          <Header />
          <div id="qodef-page-outer">
            <div id="qodef-page-inner" className="qodef-content-full-width">
              <main id="qodef-page-content" className="qodef-grid qodef-layout--template" role="main">
                <div className="qodef-grid-inner clear">
                  <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
          <Footer />
          <ScrollToTop />
          <DemoToolbar />
        </div>
      </body>
    </html>
  );
}
