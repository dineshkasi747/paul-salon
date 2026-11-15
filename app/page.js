import HeroSlider from "@/components/home/HeroSlider";
import QuickBookingBar from "@/components/home/QuickBookingBar";
import AboutSection from "@/components/home/AboutSection";
import VideoPriceListSection from "@/components/home/VideoPriceListSection";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import ShopFeatureSection from "@/components/home/ShopFeatureSection";
import BannersSection from "@/components/home/BannersSection";
import VouchersSection from "@/components/home/VouchersSection";
import TextMarquee from "@/components/home/TextMarquee";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import GalleryGrid from "@/components/home/GalleryGrid";
import SubscribeSection from "@/components/home/SubscribeSection";

export const metadata = {
  title: "PaulHair - Hair Salon and Hairdresser Theme",
  description: "Life is more beautiful when you meet the right hairdresser. Bespoke hair salon, haute coiffure, coloring, styling and products.",
};

export default function HomePage() {
  return (
    <div data-elementor-type="wp-page" data-elementor-id="18" className="elementor elementor-18">
      {/* 1. Hero Revolution Slider */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-99e2038 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="99e2038"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-df4cc61"
            data-id="df4cc61"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Reservation / Booking Strip */}
      <QuickBookingBar />

      {/* 3. About Section with Watermark & Image */}
      <AboutSection />

      {/* 4. Background Video & Price List Menu */}
      <VideoPriceListSection />

      {/* 5. Brand Clients Logos Carousel */}
      <ClientsCarousel />

      {/* 6. Shop Products Feature Section */}
      <ShopFeatureSection />

      {/* 7. All Hair Services - 3 Banners */}
      <BannersSection />

      {/* 8. Vouchers Gift Section */}
      <VouchersSection />

      {/* 9. Animated Text Marquee Ticker */}
      <TextMarquee />

      {/* 10. Video Testimonials Section */}
      <VideoTestimonialsSection />

      {/* 11. 12-Image Lookbook Gallery Grid with Lightbox */}
      <GalleryGrid />

      {/* 12. Special Offers & Deals Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}
