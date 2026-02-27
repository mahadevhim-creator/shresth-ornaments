import Image from "next/image";

const products = [
  { id: 1, name: "Bridal Set 1", price: "₹1,45,000", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800" },
  { id: 2, name: "Bridal Set 2", price: "₹1,65,000", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" },
  { id: 3, name: "Bridal Set 3", price: "₹1,85,000", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800" },
  { id: 4, name: "Bridal Set 4", price: "₹2,10,000", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
];

export default function BridalCollection() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <h1 className="text-5xl font-black text-center mb-4">Bridal Collection</h1>
      <p className="text-center text-gray-600 mb-14">
        Exquisite bridal jewellery for weddings & grand occasions.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map(p => (
          <div key={p.id} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition">
  <div className="relative h-72 w-full">
    <Image
      src={p.img}
      alt={p.name}
      fill
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             25vw"
      className="object-cover group-hover:scale-110 transition"
    />
  </div>

  <div className="p-5 bg-white">
    <h3 className="text-lg font-bold">{p.name}</h3>
    <p className="text-amber-600 font-extrabold mt-2">{p.price}</p>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}
