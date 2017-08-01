function setupQuiz() {
  var $quiz = $('.quiz');
  if (!$quiz.length) {
    return;
  }

  var $content = $('.quiz + ul');
  var $items = $('.quiz + ul > li');
  var $submit = $('.quiz .submit');
  $content.hide();

  var questions = [];
  var current = -1;
  var advance = false;
  var total = 0;
  var score = 0;

  $items.each(function() {
    var $this = $(this);
    var question = {
      statement: '',
      answers: [],
    };

    var $item = $this.clone();
    $('ul', $item).remove();
    var $question = $('<div class="question"/>').append($item.contents());
    question.statement = $question;

    $('ul > li', $this).each(function() {
      var $answer = $(this).clone();
      var $correct = $('.correct', $answer);
      var isCorrect = $correct.length > 0;
      $correct.remove();
      $answer.data('correct', isCorrect ? 'true' : 'false');
      question.answers.push($answer);
    });

    questions.push(question);
  });

  function answerClicked() {
    if ($(this).hasClass('locked')) {
      return;
    }
    $(this).toggleClass('selected');
  }

  function next() {
    current++;

    if (questions.length < current + 1) {
      var $score = $('<div/>')
          .addClass('score')
          .text('Your score:');
      $score.append($('<strong/>').text(score + ' out of ' + total));
      $('.answers', $quiz).empty().append($score);
      $('.question').empty();
      $('.status').empty();
      $submit.hide();
      return;
    }

    var question = questions[current];
    $('.question', $quiz).replaceWith(question.statement);
    var $answers = $('.answers', $quiz);
    $answers.empty()

    for( var i = 0; i < question.answers.length; i++) {
      var $answer = $(question.answers[i].click(answerClicked));
      $answers.append($answer);
    }
  }

  $submit.click(function() {
    if (advance) {
      $submit.text('submit');
      $('.status').empty();
      next();
    } else {
      var failed = false;
      var $answers = $('.answers li', $quiz);
      $answers.addClass('locked');
      $answers.each(function() {
        var $answer = $(this);
        var isCorrect = $answer.data('correct') === 'true';
        $answer.toggleClass('correct', isCorrect);
        if (isCorrect && !$answer.hasClass('selected')) {
          failed = true;
        }
        if (!isCorrect && $answer.hasClass('selected')) {
          failed = true;
        }
      });
      total++;
      var $status = $('.status').removeClass('correct wrong');
      if (failed) {
        $('.status').text('Wrong ✗').addClass('wrong');
      } else {
        $('.status').text('Correct ✓').addClass('correct');
        score++;
      }
      $submit.text('next');
    }
    advance = !advance;
  });

  next();
}

jQuery(function ($) {

  $('.section-header').click(function() {
    var $this = $(this);
    $this.toggleClass('expanded');
    $this.parent().find('.section-content').slideToggle();
  });

  $('.enroll-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#enroll').offset().top
    }, 300);
  });

  setupQuiz($);
});
