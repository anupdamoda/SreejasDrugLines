/****************** functionality related to hide and show of the FAQ *************************************/
/****************** functionality related to hide and show of the  *************************************/
/****************** Website related FAQ  *************************************/

$(document).ready(function(){
  $(".faqQuestions.Website").hide();
  $(".WebCategorydropup").hide();
$(".faqCategory.Website").on('click',function(){
    $(".faqQuestions.Website").toggle(500);
    $(".WebCategorydropdown").toggle(5);
    $(".WebCategorydropup").toggle(5);
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans1").hide();
  $(".fa-times.Website.Q1").hide();
$(".faqQuestions.Website.Q1").on('click',function(){
    $(".faqAnswers.Website.Ans1").toggle(500);
    $(".fa-times.Website.Q1").toggle(5);
    $(".plusCircle.Website.Q1").toggle(5);
/******************* other questions should collapse ***/
    $(".faqAnswers.Website.Ans2").hide();
     $(".faqAnswers.Website.Ans3").hide();
     $(".faqAnswers.Website.Ans4").hide();
     $(".faqAnswers.Website.Ans5").hide();
     $(".faqAnswers.Website.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans2").hide();
  $(".fa-times.Q2").hide();
$(".faqQuestions.Website.Q2").on('click',function(){
    $(".faqAnswers.Website.Ans2").toggle(500);
    $(".fa-times.Q2").toggle(5);
    $(".plusCircle.Q2").toggle(5);
    /******************* other questions should collapse ***/
     $(".faqAnswers.Website.Ans1").hide();
     $(".faqAnswers.Website.Ans3").hide();
     $(".faqAnswers.Website.Ans4").hide();
     $(".faqAnswers.Website.Ans5").hide();
     $(".faqAnswers.Website.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans3").hide();
  $(".fa-times.Q3").hide();
$(".faqQuestions.Website.Q3").on('click',function(){
    $(".faqAnswers.Website.Ans3").toggle(500);
    $(".fa-times.Q3").toggle(5);
    $(".plusCircle.Q3").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Website.Ans2").hide();
     $(".faqAnswers.Website.Ans1").hide();
     $(".faqAnswers.Website.Ans4").hide();
     $(".faqAnswers.Website.Ans5").hide();
     $(".faqAnswers.Website.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans4").hide();
  $(".fa-times.Q4").hide();
$(".faqQuestions.Website.Q4").on('click',function(){
    $(".faqAnswers.Website.Ans4").toggle(500);
    $(".fa-times.Q4").toggle(5);
    $(".plusCircle.Q4").toggle(5);
    /******************* other questions should collapse ***/
    $(".faqAnswers.Website.Ans1").hide();
     $(".faqAnswers.Website.Ans2").hide();
     $(".faqAnswers.Website.Ans3").hide();
     $(".faqAnswers.Website.Ans5").hide();
     $(".faqAnswers.Website.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans5").hide();
  $(".fa-times.Q5").hide();
$(".faqQuestions.Website.Q5").on('click',function(){
    $(".faqAnswers.Website.Ans5").toggle(500);
    $(".fa-times.Q5").toggle(5);
    $(".plusCircle.Q5").toggle(5);
    /******************* other questions should collapse ***/
    $(".faqAnswers.Website.Ans1").hide();
     $(".faqAnswers.Website.Ans2").hide();
     $(".faqAnswers.Website.Ans3").hide();
     $(".faqAnswers.Website.Ans4").hide();
     $(".faqAnswers.Website.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Website.Ans6").hide();
  $(".fa-times.Q6").hide();
$(".faqQuestions.Website.Q6").on('click',function(){
    $(".faqAnswers.Website.Ans6").toggle(500);
    $(".fa-times.Q6").toggle(5);
    $(".plusCircle.Q6").toggle(5);

    /******************* other questions should collapse ***/
    $(".faqAnswers.Website.Ans1").hide();
     $(".faqAnswers.Website.Ans2").hide();
     $(".faqAnswers.Website.Ans3").hide();
     $(".faqAnswers.Website.Ans4").hide();
     $(".faqAnswers.Website.Ans5").hide();
  });
});


/****************** Academy related FAQ *************************************************************/

$(document).ready(function(){
  $(".faqQuestions.Academy").hide();
  $(".AcademyCategorydropup").hide();
$(".faqCategory.Academy").on('click',function(){
    $(".faqQuestions.Academy").toggle(500);
    $(".AcademyCategorydropdown").toggle(5);
    $(".AcademyCategorydropup").toggle(5);
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans1").hide();
  $(".fa-times.Academy.Q1").hide();
$(".faqQuestions.Academy.Q1").on('click',function(){
    $(".faqAnswers.Academy.Ans1").toggle(500);
    $(".fa-times.Academy.Q1").toggle(5);
    $(".plusCircle.Academy.Q1").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans2").hide();
     $(".faqAnswers.Academy.Ans3").hide();
     $(".faqAnswers.Academy.Ans4").hide();
     $(".faqAnswers.Academy.Ans5").hide();
     $(".faqAnswers.Academy.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans2").hide();
  $(".fa-times.Academy.Q2").hide();
$(".faqQuestions.Academy.Q2").on('click',function(){
    $(".faqAnswers.Academy.Ans2").toggle(500);
    $(".fa-times.Academy.Q2").toggle(5);
    $(".plusCircle.Academy.Q2").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans1").hide();
     $(".faqAnswers.Academy.Ans3").hide();
     $(".faqAnswers.Academy.Ans4").hide();
     $(".faqAnswers.Academy.Ans5").hide();
     $(".faqAnswers.Academy.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans3").hide();
  $(".fa-times.Academy.Q3").hide();
$(".faqQuestions.Academy.Q3").on('click',function(){
    $(".faqAnswers.Academy.Ans3").toggle(500);
    $(".fa-times.Academy.Q3").toggle(5);
    $(".plusCircle.Academy.Q3").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans2").hide();
     $(".faqAnswers.Academy.Ans1").hide();
     $(".faqAnswers.Academy.Ans4").hide();
     $(".faqAnswers.Academy.Ans5").hide();
     $(".faqAnswers.Academy.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans4").hide();
  $(".fa-times.Academy.Q4").hide();
$(".faqQuestions.Academy.Q4").on('click',function(){
    $(".faqAnswers.Academy.Ans4").toggle(500);
    $(".fa-times.Academy.Q4").toggle(5);
    $(".plusCircle.Academy.Q4").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans2").hide();
     $(".faqAnswers.Academy.Ans3").hide();
     $(".faqAnswers.Academy.Ans1").hide();
     $(".faqAnswers.Academy.Ans5").hide();
     $(".faqAnswers.Academy.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans5").hide();
  $(".fa-times.Academy.Q5").hide();
$(".faqQuestions.Academy.Q5").on('click',function(){
    $(".faqAnswers.Academy.Ans5").toggle(500);
    $(".fa-times.Academy.Q5").toggle(5);
    $(".plusCircle.Academy.Q5").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans2").hide();
     $(".faqAnswers.Academy.Ans3").hide();
     $(".faqAnswers.Academy.Ans4").hide();
     $(".faqAnswers.Academy.Ans1").hide();
     $(".faqAnswers.Academy.Ans6").hide();
  });
});

$(document).ready(function(){
  $(".faqAnswers.Academy.Ans6").hide();
  $(".fa-times.Academy.Q6").hide();
$(".faqQuestions.Academy.Q6").on('click',function(){
    $(".faqAnswers.Academy.Ans6").toggle(500);
    $(".fa-times.Academy.Q6").toggle(5);
    $(".plusCircle.Academy.Q6").toggle(5);
     /******************* other questions should collapse ***/
     $(".faqAnswers.Academy.Ans2").hide();
     $(".faqAnswers.Academy.Ans3").hide();
     $(".faqAnswers.Academy.Ans4").hide();
     $(".faqAnswers.Academy.Ans5").hide();
     $(".faqAnswers.Academy.Ans1").hide();
  });
});


$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
});