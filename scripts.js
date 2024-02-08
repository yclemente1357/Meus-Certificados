$(".btn").on("click", function () {
    var certificado = $(this).closest(".card").find(".card-title").text();
    var descricao = $(this).closest(".card").find(".card-text").text();
    var link = $(this).attr("href");

    //alert(`Certificado: ${certificado}\nDescrição: ${descricao}\nLink: ${link}`);
});