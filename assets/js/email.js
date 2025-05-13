(function () {
  emailjs.init({ publicKey: "z6aHFQhiYG4DTEig-" });

  const form = document.getElementById("contact-form");
  const loading = document.getElementById("loading");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    loading.style.display = "block";
    message.innerHTML = "";

    const formData = new FormData(form);

    emailjs
      .sendForm("service_haxz1yq", "template_njzhqcg", form)
      .then(() => {
        loading.style.display = "none";
        message.style.color = "green";
        message.innerHTML = "✅ Mensagem enviada com sucesso!";
        form.reset();

        const email = formData.get("email");
        const nome = formData.get("nome");

        emailjs.send("service_haxz1yq", "template_td0qkv8", {
          to_email: email,
          nome: nome,
          reply_to: email,
          from_name: "Andrei Vinicius – Desenvolvedor Web",
        });
      })
      .catch((error) => {
        loading.style.display = "none";
        message.style.color = "red";
        message.innerHTML = "❌ Erro ao enviar. Tente novamente.";
        console.error("Erro:", error);
      });
  });
})();
