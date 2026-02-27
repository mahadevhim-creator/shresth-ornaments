import Image from "next/image";

const products = [
  { id: 1, name: "Daily Wear 1", price: "₹18,000", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800" },
  { id: 2, name: "Daily Wear 2", price: "₹22,000", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" },
  { id: 3, name: "Daily Wear 3", price: "₹19,500", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800" },
  { id: 4, name: "Daily Wear 4", price: "₹25,000", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
];

export default function DailyWearCollection() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20">
      <h1 className="text-5xl font-black text-center mb-4">Daily Wear Jewellery</h1>
      <p className="text-center text-gray-600 mb-14">
        Lightweight and elegant jewellery for everyday wear.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
            <div className="relative h-56">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-amber-600 font-bold mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
