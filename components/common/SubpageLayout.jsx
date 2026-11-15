import PageBanner from "./PageBanner";

export default function SubpageLayout({
  title,
  bgImage,
  postCss,
  children,
  rawHtml,
}) {
  return (
    <>
      {postCss && <link rel="stylesheet" href={postCss} />}
      <PageBanner title={title} bgImage={bgImage} />
      <div id="qodef-page-inner" className="qodef-content-full-width">
        <main
          id="qodef-page-content"
          className="qodef-grid qodef-layout--template"
          role="main"
        >
          <div className="qodef-grid-inner clear">
            <div className="qodef-grid-item qodef-page-content-section qodef-col--12 qodef-col--content">
              {rawHtml ? (
                <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
              ) : (
                children
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
