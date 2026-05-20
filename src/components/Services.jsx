export default function Services() {
  const list = [
    {
      title: "Domestic Gas Pipeline Installation",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80&auto=format"
    },
    {
      title: "Commercial Gas Pipeline Work",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80&auto=format"
    },
    {
      title: "Gas Leak Checking & Repair",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format"
    },
    {
      title: "Pipeline Maintenance",
      img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&q=80&auto=format"
    },
    {
      title: "Home Visit Services",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format"
    }
  ];

  return (
    <section id="services" className="reveal">
      <h2 style={{ textAlign: "center" }}>Services</h2>

      <div className="services">
        {list.map((item, index) => (
          <div key={index} className={`card reveal delay${index % 3}`}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}