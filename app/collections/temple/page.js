import Image from "next/image";

const products = [
  { id: 1, name: "Temple Set 1", price: "₹85,000", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800" },
  { id: 2, name: "Temple Set 2", price: "₹92,000", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800" },
  { id: 3, name: "Temple Set 3", price: "₹88,000", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
  { id: 4, name: "Temple Set 4", price: "₹95,000", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800" },
];

export default function TempleCollection() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20">
      <h1 className="text-5xl font-black text-center mb-4">Temple Jewellery</h1>
      <p className="text-center text-gray-600 mb-14">
        Traditional temple jewellery inspired by heritage designs.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
          >
            <div className="relative h-64">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
              <p className="text-amber-600 font-extrabold mt-2">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
