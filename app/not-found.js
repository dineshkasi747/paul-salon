import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";

export const metadata = {
  title: "404 - Page Not Found | PaulHair",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="404 - Page Not Found"
        subtitle="ERROR"
        breadcrumbs={[{ label: "404" }]}
      />

      <section className="py-5 my-5 text-center">
        <div className="container">
          <div className="max-w-600 mx-auto py-5">
            <h1 className="display-1 text-gold fw-bold mb-3">404</h1>
            <h2 className="text-white mb-3">Looking for a Fresh Look?</h2>
            <p className="text-white-50 mb-4">
              The page you are looking for does not exist or has been relocated. Let us direct you back to our salon studio.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/" className="btn-gold">
                <span>Return to Home</span>
                <i className="fa-solid fa-house ms-2"></i>
              </Link>
              <Link href="/services" className="btn-outline-gold">
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
