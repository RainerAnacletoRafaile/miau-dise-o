import "./styles/app.css";

const moods = [
  { id: "feliz", label: "Feliz", emoji: "😸" },
  { id: "alegre", label: "Alegre", emoji: "🥰" },
  { id: "triste", label: "Triste", emoji: "🥺" },
  { id: "molesta", label: "Molesta", emoji: "😾" },
  { id: "tranquila", label: "Tranquila", emoji: "😌" },
];

export default function App() {
  return (
    <main className="miau-page">
      <section className="miau-card">
        <p className="eyebrow">TU RINCÓN DE CADA DÍA</p>
        <h1>¡Hola, qué bueno verte! <span>🐾</span></h1>
        <p className="intro">
          Este es tu espacio seguro. Respira un poquito y cuéntame,
          ¿cómo te sientes hoy?
        </p>

        <div className="mood-grid" aria-label="Elige cómo te sientes">
          {moods.map((mood) => (
            <button className="mood-option" key={mood.id} type="button">
              <span className="mood-emoji">{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>

        <p className="hint">Cada emoción merece un poquito de cariño 💜</p>
      </section>
    </main>
  );
}
