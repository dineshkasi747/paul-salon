import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import { blogsData } from "@/data/blogsData";

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export function generateMetadata({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | PaulHair Editorial`,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const recentPosts = blogsData
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <>
      <PageHeader
        title={blog.title}
        subtitle={blog.category}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-5">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="rounded-1 overflow-hidden mb-4 border border-dark">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-100"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
              </div>

              <div className="d-flex align-items-center gap-3 text-white-50 small mb-4 pb-3 border-bottom border-dark">
                <span><i className="fa-regular fa-user text-gold me-1"></i> {blog.author}</span>
                <span>•</span>
                <span><i className="fa-regular fa-calendar text-gold me-1"></i> {blog.date}</span>
                <span>•</span>
                <span><i className="fa-regular fa-clock text-gold me-1"></i> {blog.readTime}</span>
              </div>

              <div
                className="blog-content text-white-50"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              />

              {/* Share / Author Box */}
              <div className="mt-5 p-4 rounded-1 border border-dark d-flex align-items-center justify-content-between" style={{ background: "var(--card-bg)" }}>
                <div>
                  <strong className="text-white d-block">Written by {blog.author}</strong>
                  <span className="text-white-50 small">Master Colorist &amp; Stylist at PaulHair Atelier</span>
                </div>
                <Link href="/appointment" className="btn-gold-sm">
                  Book with {blog.author.split(" ")[0]}
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="p-4 rounded-1 border border-dark mb-4" style={{ background: "var(--card-bg)" }}>
                <h4 className="text-white mb-3 pb-2 border-bottom border-dark">More Editorial Articles</h4>
                <div className="d-flex flex-column gap-3">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="d-block text-decoration-none group"
                    >
                      <span className="text-gold small d-block mb-1">{post.date}</span>
                      <strong className="text-white small d-block">{post.title}</strong>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-1 border border-dark text-center" style={{ background: "var(--card-bg)" }}>
                <h4 className="text-white mb-2">Experience the Atelier</h4>
                <p className="text-white-50 small mb-3">Reserve your personalized consultation and haircut today.</p>
                <Link href="/appointment" className="btn-gold w-100">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
