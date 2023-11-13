function compilator() {
  const message =
    "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

  let cont = 0;
  let response = "";
  const chartsMessaje = message.split("");
  chartsMessaje.forEach((chart) => {
    switch (chart) {
      case "#": cont++; break;
      case "@": cont--; break;
      case "*": cont *= cont; break;
      case "&": response += cont; break;
    }
  });
  return response;
}
console.log(compilator());
