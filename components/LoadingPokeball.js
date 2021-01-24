export default function LoadingPokeball() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-4">
      <div className="mb-1">
        <img
          className="App-logo"
          src="/icons/pokeball.png"
          alt="pokeball"
        />
      </div>
      <style jsx>
        {`
          .App-logo {
            width: 100px;
            pointer-events: none;
            animation: App-logo-spin 1.5s infinite;
          }

          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}