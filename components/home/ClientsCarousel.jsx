"use client";

export default function ClientsCarousel() {
  const clients = [
    { name: "Client 1", src: "/wp-content/uploads/2022/12/Client-01.png", width: 140, height: 82 },
    { name: "Client 2", src: "/wp-content/uploads/2022/12/Client-02.png", width: 170, height: 82 },
    { name: "Client 4", src: "/wp-content/uploads/2022/12/Client-04.png", width: 97, height: 82 },
    { name: "Client 3", src: "/wp-content/uploads/2022/12/Client-03.png", width: 94, height: 82 },
    { name: "Client 5", src: "/wp-content/uploads/2022/12/Client-05.png", width: 153, height: 82 },
    { name: "Client 6", src: "/wp-content/uploads/2022/12/Client-06.png", width: 129, height: 82 },
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-7247e63 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="7247e63"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
      style={{ padding: "60px 0", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4526d0a"
          data-id="4526d0a"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-44d229b elementor-widget elementor-widget-paulhair_core_clients_list"
              data-id="44d229b"
              data-element_type="widget"
              data-widget_type="paulhair_core_clients_list.default"
            >
              <div className="elementor-widget-container">
                <div
                  className="qodef-shortcode qodef-m qodef-clients-list"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "30px",
                    padding: "0 20px",
                  }}
                >
                  {clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="qodef-e"
                      style={{
                        flex: "1 1 120px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="qodef-e-logo">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={client.width}
                          height={client.height}
                          src={client.src}
                          alt={client.name}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            transition: "all 0.3s ease",
                          }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
