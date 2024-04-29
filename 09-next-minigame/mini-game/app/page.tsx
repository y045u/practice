import Image from "next/image";

type Monster = {
  id: number;
  name: string;
  hp: number;
};

const monsters: Monster[] = [
  { id: 1, name: "グリーンモンスター", hp: 50 },
  { id: 2, name: "オレンジモンスター", hp: 100 },
  { id: 3, name: "1モンスター", hp: 100 },
  { id: 4, name: "2モンスター", hp: 100 },
  { id: 5, name: "3モンスター", hp: 100 },
  { id: 6, name: "4モンスター", hp: 100 },
  { id: 7, name: "5モンスター", hp: 100 },
  { id: 8, name: "6モンスター", hp: 100 },
  { id: 9, name: "7モンスター", hp: 100 },
  { id: 10, name: "8モンスター", hp: 100 },
  { id: 11, name: "9モンスター", hp: 100 },
  { id: 12, name: "10モンスター", hp: 100 },
];

export default function Home() {
  const MonsterCount = 12;

  return (
    <main>
      <div className="grid grid-cols-3 container gap-4 py-10">
        {monsters.map((monster, i) => {
          return <Monster key={monster.id} monsterData={monster} />;
        })}
      </div>
    </main>
  );
}

function Monster({ monsterData }: { monsterData: Monster }) {
  return (
    <div key={monsterData.id} className="border-4 p-4 shadow-sm">
      <Image
        src={`/images/monster${monsterData.id}.png`}
        width={80}
        height={80}
        alt={`monster${monsterData.id}`}
      />
      <h2>{monsterData.name}</h2>
      <p>HP: {monsterData.hp}</p>
      <div className="h-3 rounded-full overflow-hidden border">
        <div className="bg-lime-500 size-full"></div>
      </div>
    </div>
  );
}
