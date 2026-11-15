import Link from "next/link";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  const cleanCrumbs = breadcrumbs.filter(
    (c) => (c.label || "").toLowerCase().trim() !== "home"
  );

  return (
    <div className="subpage-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="subpage-header-box text-center">
              {subtitle && <span className="subpage-subtitle wow fadeInUp">{subtitle}</span>}
              <h1 className="text-anime-style-3 text-white" suppressHydrationWarning={true}>{title}</h1>
              <ol className="breadcrumb wow fadeInUp justify-content-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {cleanCrumbs.map((crumb, idx) => (
                  <li key={idx}>
                    {crumb.href ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
