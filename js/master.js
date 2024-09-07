$(document).ready(function () {
  $("#calculate").click(function () {
    let weight = $("#weight").val();
    let height = $("#height").val();

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      let bmi = weight / (height * height);
      $("#result").text("your BMI is : " + bmi.toFixed(2));
    } else {
      $("#result").text("Please ensert the right value");
    }
  });
});
