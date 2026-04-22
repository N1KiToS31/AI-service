export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Tailwind работает</h1>
        <p className="mt-3 text-slate-600">
          Если видишь тёмный фон, белую карточку и красивую кнопку, значит всё ок.
        </p>

        <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition">
          Нажми меня
        </button>
      </div>
    </div>
  )
}