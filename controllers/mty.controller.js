const monterrey = () => {
  $("#app").load("./views/view.html", function () {
    fetch(
      "https://timezoneapi.io/api/timezone/?America/Monterrey&token=atIvwWMlqzuzxECBcmGR"
    )
      .then((res) => res.json())
      .then((data) => showData(data))
      .catch((error) => console.log("Solicitud Fallida", error));

    const showData = ({ data }) => {
      /**Zone Name */
      document.querySelector(".h1-zonename").innerHTML = "Monterrey";

      /**Country Name */
      document.querySelector("#countryname").innerHTML =
        data.timezone.country_name;

      /**Currency */
      document.querySelector("#currency").innerHTML =
        data.timezone.currency_name;

      /**TimeDay */
      document.querySelector("#timeday").innerHTML = data.datetime.timeday_gen;

      /**Date Time */
      document.querySelector(
        "#datetime"
      ).innerHTML = `${data.datetime.date_time_txt} ${data.datetime.offset_tzfull}`;

      /**Offset */
      document.querySelector("#offset").innerHTML = data.datetime.offset_gmt;
    };

    /**Country Flag */
    document
      .querySelector(".img-flag")
      .setAttribute("src", "https://flagpedia.net/data/flags/w580/mx.webp");

    /**Background Video */
    document.querySelector(".source").src = "./videos/monterrey.mp4";

    /***/
  });
};

export default monterrey;
