export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-8">
      {/* Hero */}
      <section className="text-center max-w-2xl mx-auto py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Жорик — твой помощник по калориям 🐱</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Просто отправь фото еды — и получи точный разбор!
        </p>
        <a
          href="https://t.me/joryk_livebot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-medium transition"
        >
          Запустить бота в Telegram
        </a>
      </section>

      {/* Как работает */}
      <section className="max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Как это работает?</h2>
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <div className="text-4xl mb-2">📷</div>
            <p>Отправь фото еды</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤖</div>
            <p>Получи разбор калорий и макро</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📊</div>
            <p>Следи за прогрессом</p>
          </div>
        </div>
      </section>

      {/* О Жорике */}
      <section className="max-w-2xl mx-auto py-16 text-gray-300 space-y-4">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">О Жорике</h2>
        <p>
          Жорик — твой дружелюбный ассистент, который помогает понимать, что ты ешь и как это влияет на тебя.
        </p>
        <p>
          Просто отправь фото еды или опиши, что было на тарелке — Жорик оценит калорийность, макроэлементы и сохранит всё в личном дневнике.
        </p>
        <p>
          📊 Через некоторое время ты начнёшь видеть:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>тенденции: сколько ты съедаешь в среднем, что переедаешь, а чего не хватает,</li>
          <li>отчёты и графики по дням и неделям,</li>
          <li>связь между питанием, весом и самочувствием (если захочешь отмечать).</li>
        </ul>
        <p>
          Жорик помогает честно взглянуть на картину и чуть больше заботиться о себе. 😺🥪
        </p>
      </section>
    </main>
  );
}
