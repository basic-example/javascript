import { GetStaticProps } from "next";

export default function RootPage({
  host,
  user,
  pass,
  port,
}: {
  host: string;
  user: string;
  pass: string;
  port: string;
}): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <p>DB_HOST: {host}</p>
      <p>DB_USER: {user}</p>
      <p>DB_PASS: {pass}</p>
      <p>DB_PORT: {port}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      // .env + .env.local + .env.(mode)
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      port: process.env.DB_PORT,
    },
  };
};
