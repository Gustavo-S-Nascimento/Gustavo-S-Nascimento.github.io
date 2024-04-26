const cardinfo = [
    {
        id: 1,
        project: "Card challenge",
        descript: "My first challenge proposed by Frontend Mentor.",
        image: "https://github.com/GustavoSantoz/Card-challenge/assets/74427958/5964cf02-425f-4118-bb3f-2ff1797e5d73",
        link: "https://gustavosantoz.github.io/Card-challenge/",
        alt: "My card challenge with three card.",
    },
    {
        id: 2,
        project: "Form",
        descript: "Made a form at the request of a friend for him to declare himself to his partner.",
        image: "https://github.com/Gustavo-S-Nascimento/form/assets/74427958/106f8ca7-886d-4f78-bccf-d75a947184d6",
        link: "https://gustavosantoz.github.io/form/",
        alt: "a form called cupid made for a friend",
    },
    {
        id: 3,
        project: "Card challenge",
        descript: "Linktree made to a stream I watch.",
        image: "https://github.com/Gustavo-S-Nascimento/Rasgao-linktree/assets/74427958/50e3842b-59c0-4898-8fe2-02a964541036",
        link: "https://rasgao.vercel.app",
        alt: "a linktree to a twitch stream called Rasgão",
    },
];

for (const cardElemnt of cardinfo) {
    const card = `<div class="card ${cardElemnt.id}">
    <a href="${cardElemnt.link}" target="_blank"><img src="${cardElemnt.image}" alt="${cardElemnt.alt}"></a>
    <div class="info">
      <h3>${cardElemnt.project}</h3>
      <p>${cardElemnt.descript}</p>
    </div>
  </div>`

  document.getElementById("container-card").innerHTML += card;
}
