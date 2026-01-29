import g1 from "../assets/grid-1.jpg";
import g2 from "../assets/grid-2.jpg";
import g3 from "../assets/grid-3.jpg";

const items = [
  { id: 1, img: g1, badge: "pin" },
  { id: 2, img: g2, badge: "copy" },
  { id: 3, img: g3, badge: "copy" },
  { id: 4, img: g1, badge: "copy" },
  { id: 5, img: g2, badge: "copy" },
  { id: 6, img: g3, badge: "copy" },
];

export default function MediaGrid() {
  return (
    <section className="gridWrap">
      <div className="tabRow">
        <button className="tab active" aria-label="Grid">
          ▦
        </button>
        <button className="tab" aria-label="Reels">
          ▶
        </button>
        <button className="tab" aria-label="Tagged">
          👤
        </button>
      </div>

      <div className="grid">
        {items.map((it) => (
          <div key={it.id} className="gridItem">
            <img className="gridImg" src={it.img} alt={`post-${it.id}`} />
            <div className="gridBadge" title={it.badge}>
              {it.badge === "pin" ? "📌" : "▢"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
