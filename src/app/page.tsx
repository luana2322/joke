import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Fuck you</h1>
      <div className="image-wrapper">
        <Image
          src="/joke.jpg"
          alt="Joke"
          width={600}
          height={600}
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
