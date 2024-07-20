export default function Text(): JSX.Element {
  return (
    <div>
      <style jsx>
        {`
          p {
            color: red;
          }
        `}
      </style>
      <p className="custom">child depth 1 paragraph with custom class</p>
    </div>
  );
}
