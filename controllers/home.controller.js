const home = () => {
  $("#app").load("./views/view.html", function () {
    document.querySelector(".h1-zonename").innerHTML = "HOME";
  });
};

export default home;
