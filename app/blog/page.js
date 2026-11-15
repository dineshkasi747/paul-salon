import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { blogsData } from "@/data/blogsData";

export const metadata = {
  title: "Hair & Beauty Trends Blog | PaulHair",
  description: "Read professional styling guides, balayage maintenance tips, and autumn trends from PaulHair master stylists.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Hair &amp; Trends Journal"
        subtitle="THE SALON EDITORIAL"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-4">
            {blogsData.map((blog, idx) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div className="service-card-item wow fadeInUp" data-wow-delay={`${0.15 * idx}s`}>
                  <div className="service-card-thumb">
                    <img src={blog.image} alt={blog.title} />
                    <span className="service-card-badge">{blog.category}</span>
                  </div>
                  <div className="service-card-body">
                    <div className="text-white-50 small mb-2">
                      <i className="fa-regular fa-calendar text-gold me-1"></i> {blog.date} • {blog.readTime}
                    </div>
                    <h3 className="fs-5">{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="service-card-footer">
                      <span className="text-white-50 small">By {blog.author}</span>
                      <Link href={`/blog/${blog.slug}`} className="service-read-more">
                        Read Article <i className="fa-solid fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
