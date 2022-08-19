import * as React from "react";
import { HeadFC } from "gatsby";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="bg-gradient-to-r from-purple-400 via-blue-600 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent">
        Proximamente
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title={"Gestiona tu Psicologia"} />;
