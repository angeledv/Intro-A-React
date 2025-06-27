import Tarjeta from "./Tarjeta";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </div>
  );
}

export default App;
