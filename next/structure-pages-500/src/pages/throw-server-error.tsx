import { GetServerSideProps } from "next";

export default function ThrowServerErrorPage(): JSX.Element {
  return (
    <div>
      <h1>Throw Server Error Page</h1>
      <p>throw server error page is rendered</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  throw new Error("server error occurred");
};
