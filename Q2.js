function prettyPrint(objeto) {
    console.log(JSON.stringify(objeto, null, "  "));
  }

  const pessoa = { nome: "Bruno", idade: 26, cidade: "São Paulo" };
prettyPrint(pessoa);
