import React from "react";
import dynamic from "next/dynamic";
import "../index.css";
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false, // Impede a renderização do lado do servidor
});

import "@brainhubeu/react-carousel/lib/style.css";

export const Projects = [
  {
    id: 0,
    Side: "Right",
    Title: "Hello Service",
    SubTitle:
      "O projeto é uma homepage para o Aplicativo HelloService é uma plataforma que serve de intermediário para contato entre profissionais da área de atendimento ao cliente e culinária.",
    Url: "https://jjbxdcfzgsgvpnluftzo.supabase.co/storage/v1/object/sign/portifolio/Imagens/HelloServerHomepage?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0aWZvbGlvL0ltYWdlbnMvSGVsbG9TZXJ2ZXJIb21lcGFnZSIsImlhdCI6MTY3NDEwMjM1MiwiZXhwIjoxZSs1MH0.eqaB2v7l0f3sRlBfEj8DNB6YJ1rFs3MckCfsUvD5f-I&t=2023-01-19T04%3A25%3A52.239Z",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1.png?alt=media&token=ce1d2bdf-a95d-4c59-af4b-da1c36d24684",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P2.png?alt=media&token=d6bcb918-6be3-447e-95f1-ca8dea96299f",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P3.png?alt=media&token=a5c0bde3-5e02-49a6-ad3b-43e293a3e313",
    GitHub: "https://github.com/MathLevi20/Hello-Service-WebPage",
    Live: "https://hello-service-app.netlify.app",
  },
  {
    id: 1,
    Side: "Left",
    Title: "Progressive",
    SubTitle:
      "Gerenciar projetos de maneira digital permite o melhor aproveitamento de tempo dos colaboradores, além de fornecer um panorama visual de progresso. Tendo por base o modelo Kanban, visa-se produzir um sistema capaz de proporcionar as qualidades descritas e associá-las a uma interface que priorize a retenção de elementos essenciais.",
    Url: "https://jjbxdcfzgsgvpnluftzo.supabase.co/storage/v1/object/sign/portifolio/Imagens/HelloServerHomepage?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0aWZvbGlvL0ltYWdlbnMvSGVsbG9TZXJ2ZXJIb21lcGFnZSIsImlhdCI6MTY3NDEwMjM1MiwiZXhwIjoxZSs1MH0.eqaB2v7l0f3sRlBfEj8DNB6YJ1rFs3MckCfsUvD5f-I&t=2023-01-19T04%3A25%3A52.239Z",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1_1.png?alt=media&token=2afe41fe-b1c6-493b-9653-b334a3253a54",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P1_1_2.png?alt=media&token=4217fb66-c8f1-4221-bc38-7f7c9f9a88ba",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-2ebbb.appspot.com/o/Portifolio%2FReact_P3_3.png?alt=media&token=6f9544bf-ff55-41ea-885a-5dcb4d8fa925",
    GitHub: "https://github.com/MathLevi20/Progressive",
    Live: "https://progressive-41851d.netlify.app/",
  },
];

function Projetos() {
  return (
    <div className=" text-black font-mono body-font bg-gray-300 ">
      <h2 className="text-center text-3xl pt-5 font-mono"> Projetos</h2>
      {Projects.map((data) => (
        <div key={data.id}>
          <section className=" text-black body-font bg-gray-300 ">
            <div
              className={
                " container   grid-cols-1 sm:rid-cols-2 auto-cols-max order-first mx-auto  py-10 px-3 flex flex-wrap"
              }
            >
              <div
                className={`${
                  data.Side == "Left"
                    ? "order-last lg:order-first "
                    : "order-last lg:order-last"
                } order-last w-full  lg:w-4/6 mb-10  lg:mb-0 overflow-hidden`}
              >
                <div className="rounded-md object-cover object-center h-full w-full">
                  <Carousel plugins={["arrows"]}>
                    <img className="h-200" src={data.Image1} />
                    <img src={data.Image2} />
                    <img src={data.Image3} />
                  </Carousel>
                </div>
              </div>
              <div
                className={`${
                  data.Side == "Left"
                    ? "order-first lg:order-last "
                    : "order-first lg:order-first"
                }  w-full lg:w-1/3  md:pr-16 lg:pr-3 pr-3 text-left self-center py-10 px-10`}
              >
                <h1 className="title-font  font-medium text-3xl text-gray-900 text-center">
                  {data.Title}
                </h1>
                <p className="leading-relaxed mt-4  text-center">
                  {data.SubTitle}
                </p>
                <div className="grid grid-cols-2 mx-auto gap-2 mt-8 ">
                  <a
                    href={data.GitHub}
                    className="text-white flex bg-gray-800 px-10 py-3 rounded-md"
                  >
                    <img className="pr-1 " width={30} src="/github.svg" />
                    <p>GitHub</p>
                  </a>
                  <a
                    href={data.Live}
                    className="text-white flex bg-gray-800 px-10 py-3 rounded-md"
                  >
                    <img className="pr-1" width={30} src="/arrow.svg" />
                    <p>Live</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Projetos;
