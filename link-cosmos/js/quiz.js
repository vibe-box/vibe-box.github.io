/**
 * Link Cosmos - Quiz Logic
 */

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = []; // { questionId, selected, correct, isCorrect }
let answered = false;

const QUESTIONS_PER_QUIZ = 10;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getAllQuestions() {
  let id = 0;
  const all = [];
  COSMOS_ARTICLES.forEach(article => {
    article.questions.forEach(q => {
      all.push({ ...q, id: ++id, articleTitle: article.title, articleUrl: article.url });
    });
  });
  return all;
}

function getTotalQuestions() {
  return COSMOS_ARTICLES.reduce((sum, a) => sum + a.questions.length, 0);
}

function startQuiz() {
  // Randomly select questions
  currentQuestions = shuffleArray(getAllQuestions()).slice(0, QUESTIONS_PER_QUIZ);
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  answered = false;

  document.getElementById('start-screen').classList.add('d-none');
  document.getElementById('result-screen').classList.add('d-none');
  document.getElementById('quiz-screen').classList.remove('d-none');

  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  const container = document.getElementById('question-container');
  answered = false;

  const optionsHtml = q.options.map((opt, idx) => `
    <button class="option-btn" data-index="${idx}" onclick="selectOption(${idx})">
      <span class="fw-semibold me-2">${String.fromCharCode(65 + idx)}.</span>${opt}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="question-card animate-fade-in">
      <div class="question-text">
        <span class="question-number">${currentIndex + 1}</span>
        ${q.question}
      </div>
      <div class="options-list">
        ${optionsHtml}
      </div>

    </div>
  `;

  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-next').textContent = currentIndex === QUESTIONS_PER_QUIZ - 1 ? '查看结果 →' : '下一题 →';
}

function selectOption(idx) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const isCorrect = idx === q.correct;
  if (isCorrect) score += 10;

  userAnswers.push({
    questionId: q.id,
    question: q.question,
    selected: idx,
    correct: q.correct,
    isCorrect: isCorrect,
    options: q.options,
    articleTitle: q.articleTitle,
    articleUrl: q.articleUrl
  });

  // Visual feedback
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === idx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  document.getElementById('current-score').textContent = score;

  if (isCorrect) {
    setTimeout(() => {
      nextQuestion();
    }, 500);
  } else {
    document.getElementById('btn-next').disabled = false;
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < QUESTIONS_PER_QUIZ) {
    renderQuestion();
    updateProgress();
  } else {
    showResults();
  }
}

function updateProgress() {
  const pct = ((currentIndex + 1) / QUESTIONS_PER_QUIZ) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${currentIndex + 1} / ${QUESTIONS_PER_QUIZ}`;
}

function showResults() {
  document.getElementById('quiz-screen').classList.add('d-none');
  document.getElementById('result-screen').classList.remove('d-none');

  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const finalScore = correctCount * 10;

  // Animate score circle
  document.getElementById('score-circle').style.setProperty('--score', finalScore);
  document.getElementById('final-score').textContent = finalScore;
  document.getElementById('score-detail').textContent = `答对 ${correctCount} / ${QUESTIONS_PER_QUIZ} 题`;

  let message = '';
  if (finalScore === 100) message = '🌟 完美！你是一名优秀的星际探索者！';
  else if (finalScore >= 80) message = '🚀 太棒了！你的宇宙知识非常丰富';
  else if (finalScore >= 60) message = '✨ 不错！请继续探索宇宙的奥秘吧！';
  else if (finalScore >= 40) message = '📚 还可以，每一次测试都是进步！';
  else message = '🌱 加油！回去翻翻知识图谱吧！';
  document.getElementById('score-message').textContent = message;

  // Review
  const reviewContainer = document.getElementById('review-container');
  reviewContainer.innerHTML = userAnswers.map((a, i) => `
    <div class="p-3 mb-2 rounded" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-left: 4px solid ${a.isCorrect ? 'var(--success)' : 'var(--danger)'};">
      <div class="d-flex justify-content-between">
        <strong class="small">${i + 1}. ${a.question}</strong>
        <span class="badge ${a.isCorrect ? 'bg-success' : 'bg-danger'}">${a.isCorrect ? '✓' : '✗'}</span>
      </div>
      <div class="small mt-1 text-muted">
        你的答案: ${String.fromCharCode(65 + a.selected)}. ${a.options[a.selected]}
        ${!a.isCorrect ? `<br/>正确答案: ${String.fromCharCode(65 + a.correct)}. ${a.options[a.correct]}` : ''}
      </div>
      <div class="small mt-1" style="color: var(--accent-blue);">来源: <a href="${a.articleUrl}" target="_blank" style="color: inherit;">${a.articleTitle}</a></div>
    </div>
  `).join('');
}

function quitQuiz() {
  const modal = new bootstrap.Modal(document.getElementById('quitModal'));
  modal.show();
}

function doQuit() {
  document.getElementById('quiz-screen').classList.add('d-none');
  document.getElementById('result-screen').classList.add('d-none');
  document.getElementById('start-screen').classList.remove('d-none');
}

// Theme toggle (same as graph.js)
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  document.getElementById('themeIcon').textContent = next === 'dark' ? '☀' : '🌙';
  const themeText = document.getElementById('themeText');
  if (themeText) themeText.textContent = next === 'dark' ? '亮色' : '暗色';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');
  if (icon) icon.textContent = theme === 'dark' ? '☀' : '🌙';
  if (text) text.textContent = theme === 'dark' ? '亮色' : '暗色';
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  }
  const totalEl = document.getElementById('total-questions');
  if (totalEl && typeof COSMOS_ARTICLES !== 'undefined') {
    totalEl.textContent = getTotalQuestions();
  }
  const btnConfirmQuit = document.getElementById('btn-confirm-quit');
  if (btnConfirmQuit) {
    btnConfirmQuit.addEventListener('click', doQuit);
  }
});

window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    applyTheme(e.newValue || 'light');
  }
});
