export default (
  code: string,
  result: string | boolean | Record<string, unknown>
): void => {
  const p = document.createElement("P");
  p.innerText = code + ":" + JSON.stringify(result, null, 2);
  document.body.appendChild(p);
  console.log(code, result);
};
