const filmes = [
    { titulo: "Uma Noite no Museu", classificacao: "18+", hasWatched: true, estrelas: 5 },
    { titulo: "Hulk", classificacao: "Livre", hasWatched: false, estrelas: 4.5 },
    { titulo: "Seleção Brasileira", classificacao: "16+", hasWatched: true, estrelas: 5 },
    { titulo: "Os Incriveis", classificacao: "12+", hasWatched: false, estrelas: 3.5 },
];
  
  for (const filme of filmes) {
    const assistiu = filme.hasWatched ? "assistiu" : "não assistiu";
    console.log(`Você ${assistiu} "${filme.titulo}" - ${filme.estrelas} estrelas`);
  }