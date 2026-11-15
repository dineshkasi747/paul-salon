export default function PageBanner({
  title,
  bgImage = "/wp-content/uploads/2022/12/about-us-title-image.jpg",
}) {
  return (
    <div
      className="qodef-page-title qodef-m qodef-title--standard qodef-alignment--center qodef-vertical-alignment--header-bottom qodef--has-image"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="qodef-m-inner">
        <div className="qodef-m-content qodef-content-grid">
          <h1 className="qodef-m-title entry-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}
