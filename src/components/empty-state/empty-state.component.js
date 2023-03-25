import Image from 'next/image';

export default function EmptyState({ mine }) {
  const title = mine ? 'You have not Pokémon yet.' : 'You not ever catch Pokémon yet';
  return (
    <div
      className="
        flex flex-col justify-center items-center
        rounded-xl bg-gray-200 shadow-2xl p-4"
      data-cy="card-empty"
    >
      <Image
        src="/imgs/pikachu.png"
        width={400}
        height={400}
        alt="pikachu"
      />
      <div className="text-center">
        <h3 className="font-extrabold text-lg">{title}</h3>
        <span className="text-gray-700">try to catch in adventure</span>
      </div>
    </div>
  );
}