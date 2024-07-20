import Text from "../components/text";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <p>parent depth 1 paragraph</p>
      <div>
        <style jsx>
          {`
            p {
              color: blue;
            }
            .custom {
              color: lime;
            }
          `}
        </style>
        <p>parent depth 2 paragraph</p>
        <div>
          <p className="custom">parent depth 3 paragraph with custom class</p>
        </div>
        <Text />
      </div>
    </main>
  );
}
