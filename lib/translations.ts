import type { Question, ResultLevel, ScoreOption } from '../types';
import { TreeIcon, SaplingIcon, SproutIcon, SeedIcon } from '../components/GrowthIcons';

interface Translations {
  [key: string]: {
    title: string;
    description: string;
    questions: Question[];
    scoreOptions: ScoreOption[];
    resultLevels: ResultLevel[];
    ui: {
      submitButton: string;
      allAnswered: string;
      resultTitle: string;
      retryButton: string;
      footer: string;
      pointsSuffix: string;
    };
  };
}

export const translations: Translations = {
  ko: {
    title: '세계시민성 자가 진단',
    description: '함께 해보는 세계시민성 자가 진단! 과연 여러분의 세계시민성 점수는?',
    questions: [
      { id: 1, text: '나는 지구촌이라는 단어를 실감한다.' },
      { id: 2, text: '우리나라와 세계 여러 나라 사이의 관계가 더욱 돈독해져야 한다고 생각한다.' },
      { id: 3, text: '외국인 친구와 같은 교실에서 공부한다면 다른 친구와 똑같이 대할 것이다.' },
      { id: 4, text: '나는 서로 다른 생각을 가진 사람들과 협력하여 문제 해결하는 것을 좋아한다.' },
      { id: 5, text: '어떤 나라가 못사는 것은 지구촌 공동의 문제이므로 도와줘야 한다고 생각한다.' },
      { id: 6, text: '나의 행동이 지구촌에 영향을 미칠 수 있다고 생각한다.' },
      { id: 7, text: '다른 문화권의 사람들과 스스럼없이 어울릴 수 있다.' },
      { id: 8, text: '전쟁, 가난, 환경파괴 등 세계의 문제를 해결하는 일에 참여한 적이 있다. (자원봉사나 기부)' },
      { id: 9, text: '최근 한 달 이내에 일어난 지구촌 이슈를 다른 사람에게 설명할 수 있다.' },
      { id: 10, text: '지구상의 물이 부족한 것과 나와 관련이 있다고 생각한다.' },
    ],
    scoreOptions: [
      { label: '그렇다', value: 5 },
      { label: '보통이다', value: 3 },
      { label: '아니다', value: 1 },
    ],
    resultLevels: [
      {
        title: '아름드리',
        description: '당신은 이미 훌륭한 세계시민이군요!',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-100',
        icon: TreeIcon,
      },
      {
        title: '묘목',
        description: '완벽한 세계시민으로 성장하고 있는 당신! 조금만 더 세계 이야기에 관심을 기울여 주세요.',
        color: 'text-lime-600',
        bgColor: 'bg-lime-100',
        icon: SaplingIcon,
      },
      {
        title: '새싹',
        description: '세계시민 의식을 갖기 시작하셨군요! 차근차근 세계시민으로 나아가 주세요.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        icon: SproutIcon,
      },
      {
        title: '씨앗',
        description: '우리는 더 이상 세계와 단절되어 존재할 수 없답니다. 마음을 열고 세계와 내가 어떻게 연결되어 있는지 알아보는 것은 어떨까요?',
        color: 'text-amber-700',
        bgColor: 'bg-amber-100',
        icon: SeedIcon,
      },
    ],
    ui: {
      submitButton: '결과 보기',
      allAnswered: '모든 질문에 답해주세요',
      resultTitle: '나의 세계시민성 점수는?',
      retryButton: '다시하기',
      footer: '출처: 유네스코 아시아태평양 국제이해교육원',
      pointsSuffix: '점'
    },
  },
  en: {
    title: 'Global Citizenship Self-Diagnosis',
    description: "Let's take the Global Citizenship Self-Diagnosis! What's your score?",
    questions: [
        { id: 1, text: 'I feel that the term "global village" is realistic.' },
        { id: 2, text: 'I believe the relationship between my country and other countries should be strengthened.' },
        { id: 3, text: 'If I studied in the same classroom as a foreign friend, I would treat them the same as any other friend.' },
        { id: 4, text: 'I enjoy collaborating with people who have different ideas to solve problems.' },
        { id: 5, text: 'I think that poverty in any country is a common problem for the global village and we should help.' },
        { id: 6, text: 'I believe my actions can have an impact on the global village.' },
        { id: 7, text: 'I can comfortably socialize with people from different cultural backgrounds.' },
        { id: 8, text: 'I have participated in activities to solve global issues like war, poverty, or environmental destruction (e.g., volunteering or donating).' },
        { id: 9, text: 'I can explain a global issue that has occurred within the last month to someone else.' },
        { id: 10, text: 'I believe that the shortage of water on Earth is related to me.' },
    ],
    scoreOptions: [
      { label: 'Agree', value: 5 },
      { label: 'Neutral', value: 3 },
      { label: 'Disagree', value: 1 },
    ],
    resultLevels: [
        {
          title: 'Full-Grown Tree',
          description: 'You are already an excellent global citizen!',
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-100',
          icon: TreeIcon,
        },
        {
          title: 'Sapling',
          description: 'You are growing into a perfect global citizen! Please pay a little more attention to world stories.',
          color: 'text-lime-600',
          bgColor: 'bg-lime-100',
          icon: SaplingIcon,
        },
        {
          title: 'Sprout',
          description: 'You have started to develop a global citizenship consciousness! Please move forward step by step.',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          icon: SproutIcon,
        },
        {
          title: 'Seed',
          description: "We can no longer exist disconnected from the world. How about opening your mind to see how you and the world are connected?",
          color: 'text-amber-700',
          bgColor: 'bg-amber-100',
          icon: SeedIcon,
        },
    ],
    ui: {
        submitButton: 'See Results',
        allAnswered: 'Please answer all questions',
        resultTitle: 'My Global Citizenship Score is?',
        retryButton: 'Try Again',
        footer: 'Source: UNESCO Asia-Pacific Centre of Education for International Understanding',
        pointsSuffix: ' points'
    }
  }
};

export const getResultForScore = (score: number, lang: 'ko' | 'en'): ResultLevel => {
  const levels = translations[lang].resultLevels;
  if (score >= 40) return levels[0];
  if (score >= 25) return levels[1];
  if (score >= 10) return levels[2];
  return levels[3];
};
