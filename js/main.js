// main.js
//
// Implements the questionnaire logic for the U CAN FIRE website.  This
// script only runs on the start.html page.  It presents a series of
// yes/no questions to the user and determines which financial stage
// they are in based on their answers.  Once a stage is identified
// the result is displayed with a link to the relevant stage page and
// an option to restart the questionnaire.

document.addEventListener('DOMContentLoaded', () => {
  const questionContainer = document.getElementById('question-container');
  const questionTextEl = document.getElementById('question-text');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const resultContainer = document.getElementById('result-container');

  // If the questionnaire elements aren't on this page, do nothing.
  if (!questionContainer || !yesButton || !noButton || !questionTextEl) {
    return;
  }

  // Define the question flow.  Each object contains the question text
  // and the next steps for 'yes' and 'no'.  The next property can
  // either be another question index or a stage object with id and name.
  const questions = [
    {
      text:
        'Do you have a small $1,000–$2,000 cushion set aside for unexpected expenses?\nThis is the first layer of financial stability for most people.',
      yes: { next: 1 },
      no: { stage: { id: 1, name: 'Stabilize Your Base (Mini Emergency Fund)' } },
    },
    {
      text:
        'Do you currently have any high-interest debt, such as credit cards or personal loans?\nIt’s very common, and addressing this early makes everything else easier.',
      yes: { stage: { id: 2, name: 'Eliminate High-Interest Debt' } },
      no: { next: 2 },
    },
    {
      text:
        'Have you saved 3–6 months of living expenses?\nThis is the foundation for long-term financial security.',
      yes: { next: 3 },
      no: { stage: { id: 3, name: 'Build a 3–6 Month Safety Buffer' } },
    },
    {
      text:
        'Do you feel confident choosing between a TFSA and an RRSP?\nKnowing which one fits your situation helps you optimize taxes and long-term growth.',
      yes: { next: 4 },
      no: { stage: { id: 4, name: 'Understand TFSA vs RRSP' } },
    },
    {
      text:
        'Are you investing regularly into simple, low-cost ETFs or index funds?\nA consistent, diversified approach is the easiest path to long-term wealth.',
      yes: { next: 5 },
      no: { stage: { id: 5, name: 'Start Investing (Index Funds & ETFs)' } },
    },
    {
      text:
        'Do you have long-term financial goals like FI, Coast FI, retirement planning, or a target savings rate?\nThese goals help guide your decisions once the basics are in place.',
      yes: { stage: { id: 6, name: 'Continue Refining Your Long-Term Plan' } },
      no: { stage: { id: 6, name: 'Long-Term Freedom & FI Basics' } },
    },
  ];

  let currentQuestionIndex = 0;

  /**
   * Display the current question text and reset any result content.
   */
  function showCurrentQuestion() {
    const current = questions[currentQuestionIndex];
    // Replace newline characters with HTML line breaks for proper rendering.
    questionTextEl.innerHTML = current.text.replace(/\n/g, '<br>');
    resultContainer.innerHTML = '';
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
  }

  /**
   * Display the final stage result with a heading and links to view the
   * appropriate stage page or restart the questionnaire.
   * @param {Object} stage - The stage object containing id and name.
   */
  function showResult(stage) {
    questionContainer.style.display = 'none';
    const stageLink = `stages/stage${stage.id}.html`;
    const resultHtml = `\n      <h2>Based on your answers, you're currently at Stage ${stage.id} — ${stage.name}.</h2>\n      <a href="${stageLink}" class="btn primary-btn">View This Stage →</a>\n      <div style="margin-top: 1rem;">\n        <a href="#" id="restart-questionnaire" class="btn">Restart Questionnaire</a>\n      </div>\n    `;
    resultContainer.innerHTML = resultHtml;
    resultContainer.style.display = 'block';
    // Attach handler to restart link after injecting into DOM
    const restartLink = document.getElementById('restart-questionnaire');
    restartLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentQuestionIndex = 0;
      showCurrentQuestion();
    });
  }

  /**
   * Handle the user clicking Yes or No.  Determine whether to move to the
   * next question or display a stage.
   * @param {string} answer - Either 'yes' or 'no'
   */
  function handleAnswer(answer) {
    const current = questions[currentQuestionIndex];
    const next = current[answer];
    if (next.stage) {
      showResult(next.stage);
    } else if (typeof next.next === 'number') {
      currentQuestionIndex = next.next;
      showCurrentQuestion();
    }
  }

  // Set up button event handlers
  yesButton.addEventListener('click', () => handleAnswer('yes'));
  noButton.addEventListener('click', () => handleAnswer('no'));

  // Kick off the first question on page load
  showCurrentQuestion();
});