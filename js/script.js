$addButton = $("#addButton");
$inputField = $("#skillInput");

$addButton.on("click", function (event) {
  input = $inputField.val();
  addSkill(input);

  if ($skillList.children().length <= 1) {
    $removeSkillButton = $(
      '<li><button id = "removeSkill">Remove</button></li>'
    );
    $skillList.append($removeSkillButton);
    $removeSkillButton.on("click", function () {
      removeSkill();
    });
    console.log($newSkill.length)
  }


  //console.log($lastSkill)
});

function addSkill(userInput) {
  $skillList = $("ul");
  $newSkill = $("<li> </li>");
  $skillList.prepend($newSkill);
  $newSkill.text(userInput);
  $inputField.val('')
}

function removeSkill() {
  $lastSkill = $("#skillList li:first-child");
  $lastSkill.remove();
}
