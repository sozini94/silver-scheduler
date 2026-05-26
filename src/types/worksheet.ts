export type Worksheet = {
    title: string;
    target: string;
    goal: string[];
    materials: string[];
    steps: string[];
    questions: string[];
    problems: {
      type: string;
      question: string;
      answerGuide: string;
    }[];
    observationPoints: string[];
  };