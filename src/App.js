import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who is the Prime minister of Nepal?',
			answerOptions: [
				{ answerText: 'Narendra Modi', isCorrect: false },
				{ answerText: 'Donald Trump', isCorrect: false },
				{ answerText: 'Sher Bahadur Deuba', isCorrect: true },
				{ answerText: 'Kp Oli', isCorrect: false },
			],
		},
		{
			questionText: 'What is the boiling point of water?',
			answerOptions: [
				{ answerText: '140degC', isCorrect: false },
				{ answerText: '100degC', isCorrect: true },
				{ answerText: '105degC', isCorrect: false },
				{ answerText: '105.5degC', isCorrect: false },
			],
		},
		{
			questionText: 'Which metal has high melting point?',
			answerOptions: [
				{ answerText: 'Tungsten', isCorrect: true },
				{ answerText: 'Al', isCorrect: false },
				{ answerText: 'Mg', isCorrect: false },
				{ answerText: 'Au', isCorrect: false },
			],
		},
		{
			questionText: 'Which Newtons law explain about the statement"Universe is expanding concontinously"?',
			answerOptions: [
				{ answerText: '1st', isCorrect: false },
				{ answerText: '2nd', isCorrect: false },
				{ answerText: "3rd", isCorrect: false },
				{ answerText: 'none', isCorrect: true },
			],
		},
	];

	const [num, setNum] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = num + 1;
		if (nextQuestion < questions.length) {
			setNum(nextQuestion);
		} else {
			setShowScore(true);
		}
		
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score'>
				<div>You scored {score} out of {questions.length}</div>	
			</div>
			) : (
				<>
					<div className='question'>
						<div className='question-count'>
							<span>Question {num + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[num].questionText}</div>
					</div>
					<div className='answer'>
						{questions[num].answerOptions.map((answerOption) => (
							<button onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
