const tokyo = () => {
  $("#app").load("./views/view.html", function () {
    fetch(
      "https://timezoneapi.io/api/timezone/?Asia/Dubai&token=atIvwWMlqzuzxECBcmGR"
    )
      .then((res) => res.json())
      .then((data) => showData(data))
      .catch((error) => console.log("Solicitud Fallida", error));

    const showData = ({ data }) => {
      /**Zone Name */
      document.querySelector(".h1-zonename").innerHTML = data.timezone.capital;

      /**Country Name */
      document.querySelector("#countryname").innerHTML =
        data.timezone.country_name;

      /**Currency */
      document.querySelector("#currency").innerHTML =
        data.timezone.currency_name;

      /**TimeDay */
      document.querySelector("#timeday").innerHTML = data.datetime.timeday_gen;

      /**Date Time */
      document.querySelector("#datetime").innerHTML =
        data.datetime.date_time_txt;

      /**Offset */
      document.querySelector("#offset").innerHTML = data.datetime.offset_gmt;
    };

    /**Country Flag */
    document
      .querySelector(".img-flag")
      .setAttribute("src", "https://countryflagsapi.com/svg/ae");

    /**Background Video */
    document.querySelector(".source").src = "./videos/dubai1.mp4";

    /***/
  });
};

export default tokyo;
