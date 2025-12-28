import Image from "next/image";

export default function Home() {
  return (
    <div className="container" style={{ width: '100%', maxWidth: '800px', padding: '2rem 1rem' }}>
      <h1 className="title">Fuck you</h1>

      <div className="image-wrapper" style={{ margin: '2rem 0' }}>
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
