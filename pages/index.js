export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Bienvenido a Tyson Shopp</h1>
      <p className="mt-4 text-lg opacity-80">Tu tienda urbana con flow.</p>
      <a
        href="/products"
        className="mt-8 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition"
      >
        Ver productos
      </a>
    </div>
  );
}
