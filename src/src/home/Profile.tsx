/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "next/image";
import { Resume } from "./Navbar";

function Profile() {
  const icons = [
    { key: 0, path: "icons/typescript.svg", alt: "TypeScript" },
    { key: 1, path: "icons/javascript.svg", alt: "JavaScript" },
    { key: 2, path: "icons/python.svg", alt: "Python" },
    { key: 3, path: "icons/react.svg", alt: "React" },
    { key: 4, path: "icons/next.svg", alt: "Next.js" },
    { key: 5, path: "icons/nestjs.svg", alt: "Nest.js" },
    { key: 6, path: "icons/django.svg", alt: "Django" },
    { key: 7, path: "icons/flask.svg", alt: "Flask" },
    { key: 8, path: "icons/mongodb.svg", alt: "MongoDB" },
    { key: 9, path: "icons/firebase.svg", alt: "Firebase" },
    { key: 10, path: "icons/postgresql.svg", alt: "PostgreSQL" },
    { key: 12, path: "icons/supabase.svg", alt: "Supabase" },
    { key: 13, path: "icons/flutter.svg", alt: "Flutter" },
    { key: 14, path: "icons/dart.svg", alt: "Dart" },
    { key: 15, path: "icons/docker.svg", alt: "Docker" },
    { key: 16, path: "icons/google.svg", alt: "Google" },
    { key: 17, path: "icons/numpy.svg", alt: "NumPy" },
    { key: 18, path: "icons/pandas.svg", alt: "Pandas" },
  ];

  return (
    <div className=" font-mono flex w-full flex-wrap mb-10 flex-col md:flex-row content-center">
      <div className="  h-full n w-full sm:w-3/4 lg:w-1/2 pt-10 mx-auto p-3  ">
        <h1 className="text-7xl   my-auto text-center mt-2 sm:mt-10 animate-fade">
          Olá,Meu nome é Matheus
        </h1>
        <p className=" mx-auto pt-6 text-center animate-fade4">
          "Sou um desenvolvedor Full Stack com habilidades em desenvolvimento de
          software e uma paixão constante por aprender e aplicar novas
          tecnologias. Busco sempre desafios e oportunidades para crescer
          profissionalmente e contribuir para o sucesso dos projetos em que
          atuo. Este portfólio apresenta alguns dos meus projetos mais recentes
          e de maior destaque, que demonstram minhas habilidades e dedicação à
          excelência no desenvolvimento de software."
        </p>
        <div className=" p-1 flex py-4  justify-center  ">
          <button className="nav-item">
            <a
              className="px-5 py-2 rounded-md flex items-center text-xs uppercase bg-gray-700 font-bold leading-snug text-white hover:opacity-75"
              href={Resume}
            >
              {" "}
              <span className="">Resumo</span>
            </a>
          </button>
        </div>
        <div className=" p-1 flex py-4  justify-center  ">
          <a
            href="https://twitter.com/L_math2022"
            className="animate-fade5 text-gray-800"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="svg-inline--fa fa-twitter w-11"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-levi-621125150/"
            className="mx-10 text-gray-800"
          >
            <svg
              width={100}
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="svg-inline--fa animate-fade5 fa-linkedin-in w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/MathLevi20" className=" text-gray-800">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className=" svg-inline--fa animate-fade5 fa-github w-11"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-auto py-4 w-3/4 text-center text-2xl text-bold">
        Sobre Mim
      </div>
      <div className=" grid sm:grid-flow-col">
        <div>
          <Image
            className=" m-auto pl-4  p-5 rounded-md content-left"
            width={200}
            height={200}
            src="/MyImage.jpeg"
            alt="Logo"
          />
        </div>
        <div className="my-auto   w-full text-left">
          <p className="text-lg p-4 mb-5">
            "Como um apaixonado pela tecnologia e sempre buscando me
            desenvolver, sou um programador com conhecimentos sólidos em
            JavaScript, TypeScript e Python. Estou ansioso para explorar e
            aprender mais sobre Ciência de Dados e Inteligência Artificial. Com
            minha experiência prática em React e Flask, e meus estudos atuais em
            ferramentas avançadas de análise de dados em Python, estou pronto
            para abraçar novos desafios e contribuir de forma significativa para
            o sucesso dos projetos."
          </p>
        </div>
      </div>
      <div className="mx-auto py-4 w-4/6 text-center text-2xl text-bold">
        <div className="p-6">Ferramentas que eu uso</div>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 place-items-center ">
          {icons.map((icons) => (
            <Image
              key={icons.key}
              className="mx-auto rounded-lg bg-gray-400 p-3  "
              width={100}
              height={100}
              src={icons.path}
              alt={icons.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
