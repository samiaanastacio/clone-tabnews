import Image from "next/image";

function Home() {
  return (
    <>
      <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
        {" "}
        Ps: Eu dedico essa primeira página a você, meu amor, Bruno Anastacio!
        Obrigada por ser meu primeiro apoiador, mentor. Sem você eu não estaria
        trilhando esse caminho! Te amo! :){" "}
      </h1>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/image.png"
          alt="Bruno Anastacio"
          width={800}
          height={800}
        />
      </h2>
    </>
  );
}

export default Home;
