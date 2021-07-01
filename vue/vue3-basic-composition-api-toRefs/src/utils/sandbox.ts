export default (
  scope: Record<string, unknown>
): { exec: (code: string) => void; result: (code: string) => string } => {
  const apply = (code: string) => {
    code = code.replaceAll("const ", "scope.");
    code = code.replaceAll("let ", "scope.");
    return new Function(...Object.keys(scope), "scope", code)(
      ...Object.values(scope),
      scope
    );
  };

  const exec = (code: string): void => {
    const textarea = document.createElement("textarea");
    const output = `${code}`;
    const lineCount = (<RegExpMatchArray>output.match(/\n/g) || []).length + 1;
    textarea.value = output;
    textarea.setAttribute("style", `width: 100%; height:${lineCount}em`);
    textarea.setAttribute("disabled", "");
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(textarea);
    document.body.appendChild(document.createElement("br"));
    apply(code);
  };

  const result = (code: string): string => {
    const textarea = document.createElement("textarea");
    const result = apply("return " + code);
    const jsonify =
      typeof result === typeof Function.prototype
        ? result.toString()
        : JSON.stringify(result, null, 2);
    const isMultiLine = jsonify && jsonify.match(/\n/) ? true : false;
    const output = `\n${code} ${
      isMultiLine ? "/* " + jsonify + " */" : "// " + jsonify
    }\n`.replaceAll("\n", "\n  ");
    const lineCount = (<RegExpMatchArray>output.match(/\n/g) || []).length + 1;
    textarea.value = output;
    textarea.setAttribute("style", `width: 100%; height:${lineCount}em`);
    textarea.setAttribute("disabled", "");
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(textarea);
    document.body.appendChild(document.createElement("br"));
    console.log(code, result);

    return result;
  };

  return { exec, result };
};
