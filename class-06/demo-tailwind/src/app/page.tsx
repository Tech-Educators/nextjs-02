export default function Home() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1>airbnb</h1>
      </div>
      <div>
        <nav className="border border-solid rounded-3xl p-4 drop-shadow">
          <ul className="flex justify-between gap-4">
            <li>Anywhere</li>
            <li>Any week</li>
            <li>Any guests Q</li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between">
        <p>Airbnb your home</p>
        <p>O</p>
      </div>
    </header>
  );
}
