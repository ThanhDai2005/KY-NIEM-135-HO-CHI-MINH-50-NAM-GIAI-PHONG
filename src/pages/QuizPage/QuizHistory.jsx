import { useState, useEffect } from "react";
import { quizQuestions } from "../../data/quizData";
import StartScreen from "./StartScreen";
import QuizQuestionCard from "./QuizQuestionCard";
import ExplanationDialog from "./ExplanationDialog";
import QuizResult from "./QuizResult";

function QuizHistory() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timeActive, setTimeActive] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState({
    isCorrect: false,
    explanation: "",
  });
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimeActive(true);
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && timeActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft == 0) {
      if (selectedAnswer != null) {
        const isCorrect =
          quizQuestions[currentQuestion].correctAnswerIndex == selectedAnswer;
        setUserAnswers([
          ...userAnswers,
          {
            correctAnswerIndex:
              quizQuestions[currentQuestion].correctAnswerIndex,
            selectedAnswer: selectedAnswer,
            isCorrect: isCorrect,
          },
        ]);
        if (isCorrect) {
          setScore(score + 1);
        }
        handleNextQuestion();
      } else {
        setUserAnswers([
          ...userAnswers,
          {
            correctAnswerIndex:
              quizQuestions[currentQuestion].correctAnswerIndex,
            selectedAnswer: selectedAnswer,
            isCorrect: false,
          },
        ]);
        handleNextQuestion();
      }
    }
    return () => clearInterval(timer);
  }, [timeLeft, timeActive]);

  const handleChooseAnswers = (e) => {
    setSelectedAnswer(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    const isCorrect =
      selectedAnswer == quizQuestions[currentQuestion].correctAnswerIndex;

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        correctAnswerIndex: quizQuestions[currentQuestion].correctAnswerIndex,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect,
      },
    ]);

    setCurrentExplanation({
      isCorrect: isCorrect,
      explanation: quizQuestions[currentQuestion].explanation,
    });

    setShowExplanation(true);
    setTimeActive(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeActive(true);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    handleNextQuestion();
  };

  const handleShare = () => {
    const text = `Tôi đã đạt ${score}/${quizQuestions.length} điểm trong bài quiz về lịch sử! Hãy thử thách bản thân bạn!`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(text)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleRestartQuiz = () => {
    window.location.reload();
  };

  return (
    <>
      {!quizStarted ? (
        <>
          <StartScreen onStartQuiz={handleStartQuiz} />
        </>
      ) : (
        <>
          <div>
            {/* Tiêu đề */}
            <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] text-[#D32F2F] font-bold text-center text-shadow-quiz-history2">
              THỬ TÀI LỊCH SỬ CỦA BẠN NHÉ
            </h3>

            {/* Mô tả quiz */}
            <div className="p-8 mt-8 bg-white rounded-2xl shadow-quiz-history-description">
              <p className="text-[#424242] text-xl leading-[1.8] text-justify font-semibold">
                Câu hỏi này không chỉ yêu cầu người tham gia nhớ về sự kiện lịch
                sử, mà còn giúp họ nhận thức sâu sắc về sự ảnh hưởng của nó đối
                với dân tộc Việt Nam và toàn thế giới, đồng thời khơi gợi niềm
                tự hào dân tộc.
              </p>
            </div>

            {/* Card câu hỏi */}
            <div>
              <QuizQuestionCard
                currentQuestion={currentQuestion}
                totalQuestions={quizQuestions.length}
                question={quizQuestions[currentQuestion].question}
                options={quizQuestions[currentQuestion].options}
                selectedAnswer={selectedAnswer}
                onAnswerSelect={handleChooseAnswers}
                timeLeft={timeLeft}
                onSubmit={handleSubmit}
              />
            </div>

            {/* Giải thích Dialog */}
            <ExplanationDialog
              open={showExplanation}
              onClose={handleCloseExplanation}
              isCorrect={currentExplanation.isCorrect}
              explanation={currentExplanation.explanation}
            />

            {/* Kết quả Dialog */}
            <QuizResult
              open={showResult}
              score={score}
              totalQuestions={quizQuestions.length}
              questions={quizQuestions}
              userAnswers={userAnswers}
              onShare={handleShare}
              onClose={handleRestartQuiz}
            />
          </div>
        </>
      )}
    </>
  );
}

export default QuizHistory;
