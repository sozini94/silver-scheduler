
export type ProgramCategory =
  | "인지"
  | "신체"
  | "정서"
  | "사회성"
  | "생활"
  | "특별행사";

export type Program = {
  id: string;

  category: ProgramCategory;

  title: string;

  duration: number;

  difficulty:
    | "쉬움"
    | "보통"
    | "어려움";

  mobility:
    | "좌식 가능"
    | "가벼운 이동 필요"
    | "보행 가능 권장";

  materials: string[];

  tags: string[];

  recommendedTime:
    | "오전"
    | "오후"
    | "상시";

  description: string;
};

export const programs: Program[] = [
  {
    "id": "P001",
    "category": "인지",
    "title": "계절 단어 찾기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "계절 단어 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P002",
    "category": "인지",
    "title": "속담 완성하기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "속담 완성하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P003",
    "category": "인지",
    "title": "숫자 순서 잇기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "색연필",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "숫자 순서 잇기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P004",
    "category": "인지",
    "title": "같은 그림 찾기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "낱말카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "같은 그림 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P005",
    "category": "인지",
    "title": "틀린 그림 찾기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "색연필",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "틀린 그림 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P006",
    "category": "인지",
    "title": "색깔 분류하기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "색연필",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "색깔 분류하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P007",
    "category": "인지",
    "title": "물건 이름 맞히기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "물건 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P008",
    "category": "인지",
    "title": "추억 사진 회상",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "추억 사진 회상 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P009",
    "category": "인지",
    "title": "오늘 날짜 말하기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "색연필",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "오늘 날짜 말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P010",
    "category": "인지",
    "title": "시장 물건 계산하기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "시장 물건 계산하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P011",
    "category": "인지",
    "title": "가족 호칭 맞히기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "가족 호칭 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P012",
    "category": "인지",
    "title": "낱말 카드 맞추기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "낱말 카드 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P013",
    "category": "인지",
    "title": "그림 보고 이야기 만들기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "그림 보고 이야기 만들기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P014",
    "category": "인지",
    "title": "음식 이름 맞히기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "낱말카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "음식 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P015",
    "category": "인지",
    "title": "옛날 물건 맞히기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "옛날 물건 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P016",
    "category": "인지",
    "title": "동물 이름 맞히기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "동물 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P017",
    "category": "인지",
    "title": "교통수단 분류하기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "교통수단 분류하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P018",
    "category": "인지",
    "title": "과일 이름 찾기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "과일 이름 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P019",
    "category": "인지",
    "title": "직업 맞히기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "직업 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P020",
    "category": "인지",
    "title": "사계절 그림 분류",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "사계절 그림 분류 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P021",
    "category": "인지",
    "title": "요일 순서 맞추기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "요일 순서 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P022",
    "category": "인지",
    "title": "시계 읽기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "시계 읽기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P023",
    "category": "인지",
    "title": "화폐 계산 놀이",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "낱말카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "화폐 계산 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P024",
    "category": "인지",
    "title": "장보기 목록 만들기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "장보기 목록 만들기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P025",
    "category": "인지",
    "title": "초성 단어 맞히기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "초성 단어 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P026",
    "category": "인지",
    "title": "반대말 찾기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "반대말 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P027",
    "category": "인지",
    "title": "비슷한 말 찾기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "비슷한 말 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P028",
    "category": "인지",
    "title": "끝말잇기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "그림카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "끝말잇기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P029",
    "category": "인지",
    "title": "카드 기억하기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "카드 기억하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P030",
    "category": "인지",
    "title": "그림 순서 배열",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "그림 순서 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P031",
    "category": "인지",
    "title": "동화 내용 회상",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "동화 내용 회상 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P032",
    "category": "인지",
    "title": "노래 가사 빈칸 채우기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "노래 가사 빈칸 채우기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P033",
    "category": "인지",
    "title": "지역 이름 맞히기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "지역 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P034",
    "category": "인지",
    "title": "전통 음식 맞히기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "전통 음식 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P035",
    "category": "인지",
    "title": "명절 풍습 이야기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "활동지",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "명절 풍습 이야기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P036",
    "category": "인지",
    "title": "신문 제목 읽기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "숫자카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "신문 제목 읽기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P037",
    "category": "인지",
    "title": "사진 속 장소 맞히기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "사진 속 장소 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P038",
    "category": "인지",
    "title": "감각 물건 맞히기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "숫자카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "감각 물건 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P039",
    "category": "인지",
    "title": "소리 듣고 맞히기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "소리 듣고 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P040",
    "category": "인지",
    "title": "색종이 패턴 따라하기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "숫자카드",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "색종이 패턴 따라하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P041",
    "category": "인지",
    "title": "도형 분류하기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "활동지",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "도형 분류하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P042",
    "category": "인지",
    "title": "크기 순서 배열",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "크기 순서 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P043",
    "category": "인지",
    "title": "숫자 빙고",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "숫자 빙고 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P044",
    "category": "인지",
    "title": "한글 빙고",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "한글 빙고 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P045",
    "category": "인지",
    "title": "그림자 맞히기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "활동지",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "그림자 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P046",
    "category": "인지",
    "title": "물건 용도 말하기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "물건 용도 말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P047",
    "category": "인지",
    "title": "오늘의 뉴스 이야기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "활동지",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "오늘의 뉴스 이야기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P048",
    "category": "인지",
    "title": "나의 고향 지도 찾기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "색연필",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "나의 고향 지도 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P049",
    "category": "인지",
    "title": "전화번호 기억하기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "색연필",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "전화번호 기억하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P050",
    "category": "인지",
    "title": "이름표 맞추기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "이름표 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P051",
    "category": "인지",
    "title": "속담 그림 카드",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "낱말카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "속담 그림 카드 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P052",
    "category": "인지",
    "title": "사자성어 쉬운 풀이",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "사자성어 쉬운 풀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P053",
    "category": "인지",
    "title": "계산 구슬 놀이",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "숫자카드",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "계산 구슬 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P054",
    "category": "인지",
    "title": "숫자 카드 더하기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "숫자카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "숫자 카드 더하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P055",
    "category": "인지",
    "title": "달력 일정 찾기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "달력 일정 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P056",
    "category": "인지",
    "title": "약속 시간 맞히기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "약속 시간 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P057",
    "category": "인지",
    "title": "생활 도구 분류",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "생활 도구 분류 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P058",
    "category": "인지",
    "title": "위험 상황 판단",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "위험 상황 판단 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P059",
    "category": "인지",
    "title": "음식 재료 연결",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "낱말카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "음식 재료 연결 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P060",
    "category": "인지",
    "title": "요리 순서 맞추기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "색연필",
      "낱말카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "요리 순서 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P061",
    "category": "인지",
    "title": "식물 이름 맞히기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "식물 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P062",
    "category": "인지",
    "title": "꽃 이름 맞히기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "숫자카드",
      "색연필"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "꽃 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P063",
    "category": "인지",
    "title": "날씨 카드 고르기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "날씨 카드 고르기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P064",
    "category": "인지",
    "title": "감정 단어 찾기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "감정 단어 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P065",
    "category": "인지",
    "title": "옛 노래 제목 맞히기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "옛 노래 제목 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P066",
    "category": "인지",
    "title": "추억 물건 이야기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "추억 물건 이야기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P067",
    "category": "인지",
    "title": "가게 간판 읽기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "낱말카드",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "가게 간판 읽기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P068",
    "category": "인지",
    "title": "버스 번호 찾기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "활동지",
      "그림카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "버스 번호 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P069",
    "category": "인지",
    "title": "단어 퍼즐",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "낱말카드",
      "숫자카드"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "단어 퍼즐 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P070",
    "category": "인지",
    "title": "그림 낱말 연결",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "활동지"
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력"
    ],
    "recommendedTime": "오전",
    "description": "그림 낱말 연결 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P262",
    "category": "인지",
    "title": "과일 분류 게임",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "과일 분류 게임 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P263",
    "category": "인지",
    "title": "숨은 단어 찾기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숨은 단어 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P264",
    "category": "인지",
    "title": "옛날 광고 맞히기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "활동지",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "옛날 광고 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P265",
    "category": "인지",
    "title": "문장 완성 놀이",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "문장 완성 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P266",
    "category": "인지",
    "title": "가족사진 이야기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "가족사진 이야기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P267",
    "category": "인지",
    "title": "한글 따라쓰기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "낱말카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "한글 따라쓰기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P268",
    "category": "인지",
    "title": "숫자 계산 카드",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "낱말카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숫자 계산 카드 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P269",
    "category": "인지",
    "title": "요일 카드 배열",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "숫자카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "요일 카드 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P270",
    "category": "인지",
    "title": "나라 이름 맞히기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "나라 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P271",
    "category": "인지",
    "title": "사물 위치 기억",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "사물 위치 기억 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P272",
    "category": "인지",
    "title": "단어 순서 배열",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "단어 순서 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P273",
    "category": "인지",
    "title": "기억 상자 놀이",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "기억 상자 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P274",
    "category": "인지",
    "title": "퍼즐 조각 맞추기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "숫자카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "퍼즐 조각 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P275",
    "category": "인지",
    "title": "문장 따라 읽기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "문장 따라 읽기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P276",
    "category": "인지",
    "title": "전화번호 이어말하기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "전화번호 이어말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P277",
    "category": "인지",
    "title": "계절 음식 맞히기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "계절 음식 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P278",
    "category": "인지",
    "title": "모양 연결하기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "모양 연결하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P279",
    "category": "인지",
    "title": "색칠 순서 기억",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "색칠 순서 기억 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P280",
    "category": "인지",
    "title": "초성 퀴즈",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "초성 퀴즈 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  
  {
    "id": "P406",
    "category": "인지",
    "title": "초성 이어 말하기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "초성 이어 말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P407",
    "category": "인지",
    "title": "동물 소리 맞히기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "색연필",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "동물 소리 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P408",
    "category": "인지",
    "title": "색깔 기억 게임 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "색깔 기억 게임 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P409",
    "category": "인지",
    "title": "지도 보고 길 찾기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "지도 보고 길 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P410",
    "category": "인지",
    "title": "단어 이어쓰기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "단어 이어쓰기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P411",
    "category": "인지",
    "title": "숫자 짝 맞추기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "낱말카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숫자 짝 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P412",
    "category": "인지",
    "title": "과일 분류 게임 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "과일 분류 게임 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P413",
    "category": "인지",
    "title": "숨은 단어 찾기 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숨은 단어 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P414",
    "category": "인지",
    "title": "옛날 광고 맞히기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "활동지",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "옛날 광고 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P415",
    "category": "인지",
    "title": "문장 완성 놀이 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "문장 완성 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P416",
    "category": "인지",
    "title": "가족사진 이야기 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "가족사진 이야기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P417",
    "category": "인지",
    "title": "한글 따라쓰기 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "낱말카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "한글 따라쓰기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P418",
    "category": "인지",
    "title": "숫자 계산 카드 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "낱말카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숫자 계산 카드 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P419",
    "category": "인지",
    "title": "요일 카드 배열 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "숫자카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "요일 카드 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P420",
    "category": "인지",
    "title": "나라 이름 맞히기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "나라 이름 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P421",
    "category": "인지",
    "title": "사물 위치 기억 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "사물 위치 기억 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P422",
    "category": "인지",
    "title": "단어 순서 배열 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "단어 순서 배열 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P423",
    "category": "인지",
    "title": "기억 상자 놀이 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "기억 상자 놀이 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P424",
    "category": "인지",
    "title": "퍼즐 조각 맞추기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "숫자카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "퍼즐 조각 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P425",
    "category": "인지",
    "title": "문장 따라 읽기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "문장 따라 읽기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P426",
    "category": "인지",
    "title": "전화번호 이어말하기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "전화번호 이어말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P427",
    "category": "인지",
    "title": "계절 음식 맞히기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "그림카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "계절 음식 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P428",
    "category": "인지",
    "title": "모양 연결하기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "활동지",
      "색연필",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "모양 연결하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P429",
    "category": "인지",
    "title": "색칠 순서 기억 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "색연필",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "색칠 순서 기억 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P430",
    "category": "인지",
    "title": "초성 퀴즈 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "낱말카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "초성 퀴즈 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P256",
    "category": "인지",
    "title": "초성 이어 말하기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "초성 이어 말하기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P257",
    "category": "인지",
    "title": "동물 소리 맞히기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "숫자카드",
      "색연필",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "동물 소리 맞히기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P258",
    "category": "인지",
    "title": "색깔 기억 게임",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "낱말카드",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "색깔 기억 게임 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P259",
    "category": "인지",
    "title": "지도 보고 길 찾기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "그림카드",
      "숫자카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "지도 보고 길 찾기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P260",
    "category": "인지",
    "title": "단어 이어쓰기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "활동지",
      "색연필",
      "그림카드",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "단어 이어쓰기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P261",
    "category": "인지",
    "title": "숫자 짝 맞추기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림카드",
      "낱말카드",
      "활동지",
    ],
    "tags": [
      "치매예방",
      "언어",
      "집중력",
    ],
    "recommendedTime": "오전",
    "description": "숫자 짝 맞추기 활동을 통해 기억력, 언어능력, 집중력을 자연스럽게 자극하는 활동"
  },
  {
    "id": "P071",
    "category": "신체",
    "title": "의자 체조",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "의자",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "의자 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P072",
    "category": "신체",
    "title": "실버 스트레칭",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "수건",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "실버 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P073",
    "category": "신체",
    "title": "손가락 체조",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "수건",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "손가락 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P074",
    "category": "신체",
    "title": "풍선 배구",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "풍선",
      "밴드",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "풍선 배구 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P075",
    "category": "신체",
    "title": "공 주고받기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "공 주고받기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P076",
    "category": "신체",
    "title": "고리 던지기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "밴드",
      "의자",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "고리 던지기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P077",
    "category": "신체",
    "title": "컵 쌓기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "수건",
      "밴드",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "컵 쌓기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P078",
    "category": "신체",
    "title": "박수 리듬 운동",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "박수 리듬 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P079",
    "category": "신체",
    "title": "발목 운동",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "공",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "발목 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P080",
    "category": "신체",
    "title": "어깨 돌리기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "의자",
      "풍선",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "어깨 돌리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P081",
    "category": "신체",
    "title": "균형 잡기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "의자",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "균형 잡기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P082",
    "category": "신체",
    "title": "수건 체조",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "공",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "수건 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P083",
    "category": "신체",
    "title": "밴드 운동",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "수건",
      "풍선",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "밴드 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P084",
    "category": "신체",
    "title": "콩주머니 던지기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "밴드",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "콩주머니 던지기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P085",
    "category": "신체",
    "title": "실내 걷기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "보행 가능 권장",
    "materials": [
      "수건",
      "풍선",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "실내 걷기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P086",
    "category": "신체",
    "title": "목 돌리기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "수건",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "목 돌리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P087",
    "category": "신체",
    "title": "허리 펴기 운동",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "의자",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "허리 펴기 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P088",
    "category": "신체",
    "title": "무릎 들어올리기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "밴드",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "무릎 들어올리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P089",
    "category": "신체",
    "title": "발끝 당기기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "밴드",
      "수건",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "발끝 당기기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P090",
    "category": "신체",
    "title": "손목 돌리기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "공",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "손목 돌리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P091",
    "category": "신체",
    "title": "악력 공 운동",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "의자",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "악력 공 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P092",
    "category": "신체",
    "title": "신문지 공 던지기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "풍선",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "신문지 공 던지기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P093",
    "category": "신체",
    "title": "풍선 치기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "공",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "풍선 치기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P094",
    "category": "신체",
    "title": "미니 볼링",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "공",
      "풍선",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "미니 볼링 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P095",
    "category": "신체",
    "title": "링 끼우기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "밴드",
      "풍선",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "링 끼우기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P096",
    "category": "신체",
    "title": "스카프 흔들기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "의자",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "스카프 흔들기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P097",
    "category": "신체",
    "title": "리듬 막대 운동",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "밴드",
      "의자"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "리듬 막대 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P098",
    "category": "신체",
    "title": "트로트 체조",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "풍선",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "트로트 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P099",
    "category": "신체",
    "title": "국민체조 변형",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "국민체조 변형 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P100",
    "category": "신체",
    "title": "좌식 요가",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "보행 가능 권장",
    "materials": [
      "공",
      "수건",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "좌식 요가 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P101",
    "category": "신체",
    "title": "호흡 운동",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "호흡 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P102",
    "category": "신체",
    "title": "박수 건강 체조",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "박수 건강 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P103",
    "category": "신체",
    "title": "발 마사지 운동",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "의자",
      "수건",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "발 마사지 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P104",
    "category": "신체",
    "title": "짐볼 굴리기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "의자",
      "밴드",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "짐볼 굴리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P105",
    "category": "신체",
    "title": "라인 따라 걷기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "라인 따라 걷기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P106",
    "category": "신체",
    "title": "스텝 박스 낮은 운동",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "밴드",
      "의자",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "스텝 박스 낮은 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P107",
    "category": "신체",
    "title": "색깔 발판 밟기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "의자",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "색깔 발판 밟기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P108",
    "category": "신체",
    "title": "투호 놀이",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "투호 놀이 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P109",
    "category": "신체",
    "title": "훌라후프 전달",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "의자",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "훌라후프 전달 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P110",
    "category": "신체",
    "title": "탁구공 옮기기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "수건",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "탁구공 옮기기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P111",
    "category": "신체",
    "title": "집게로 공 옮기기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "풍선",
      "수건"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "집게로 공 옮기기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P112",
    "category": "신체",
    "title": "낙상 예방 운동",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "보행 가능 권장",
    "materials": [
      "풍선",
      "수건",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "낙상 예방 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P113",
    "category": "신체",
    "title": "자세 바로잡기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "밴드",
      "수건",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "자세 바로잡기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P114",
    "category": "신체",
    "title": "상체 근력 운동",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "상체 근력 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P115",
    "category": "신체",
    "title": "하체 근력 운동",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "보행 가능 권장",
    "materials": [
      "의자",
      "밴드",
      "공"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "하체 근력 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P116",
    "category": "신체",
    "title": "손뼉 치기 게임",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "의자",
      "수건",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "손뼉 치기 게임 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P117",
    "category": "신체",
    "title": "걷기 릴레이",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "밴드",
      "풍선"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "걷기 릴레이 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P118",
    "category": "신체",
    "title": "풍선 축구",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "보행 가능 권장",
    "materials": [
      "공",
      "의자",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "풍선 축구 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P119",
    "category": "신체",
    "title": "페트병 볼링",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "수건",
      "의자",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "페트병 볼링 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P120",
    "category": "신체",
    "title": "스트레칭 명상",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "밴드"
    ],
    "tags": [
      "운동",
      "근력",
      "균형"
    ],
    "recommendedTime": "상시",
    "description": "스트레칭 명상 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P286",
    "category": "신체",
    "title": "발바닥 자극 운동",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "공",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "발바닥 자극 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P287",
    "category": "신체",
    "title": "풍선 릴레이",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "풍선 릴레이 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P288",
    "category": "신체",
    "title": "리본 체조",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "밴드",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "리본 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P289",
    "category": "신체",
    "title": "짝꿍 스트레칭",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "풍선",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "짝꿍 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P290",
    "category": "신체",
    "title": "리듬 걷기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "풍선",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "리듬 걷기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P291",
    "category": "신체",
    "title": "손가락 악력 훈련",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "손가락 악력 훈련 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P292",
    "category": "신체",
    "title": "제자리 발구르기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "풍선",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "제자리 발구르기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P293",
    "category": "신체",
    "title": "가벼운 체조",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "가벼운 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P294",
    "category": "신체",
    "title": "팔 들어올리기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "팔 들어올리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P295",
    "category": "신체",
    "title": "앉아서 발차기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "앉아서 발차기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P296",
    "category": "신체",
    "title": "공 튕기기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "공 튕기기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P297",
    "category": "신체",
    "title": "균형 쿠션 운동",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "수건",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "균형 쿠션 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P298",
    "category": "신체",
    "title": "라인 넘기 게임",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "라인 넘기 게임 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P299",
    "category": "신체",
    "title": "풍선 전달 게임",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "의자",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "풍선 전달 게임 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P300",
    "category": "신체",
    "title": "하체 유연성 운동",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "하체 유연성 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P301",
    "category": "신체",
    "title": "발끝 터치 운동",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "발끝 터치 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P302",
    "category": "신체",
    "title": "허리 스트레칭",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "풍선",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "허리 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P303",
    "category": "신체",
    "title": "짝꿍 공 패스",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "수건",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "짝꿍 공 패스 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P304",
    "category": "신체",
    "title": "양팔 벌리기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "양팔 벌리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P305",
    "category": "신체",
    "title": "건강 율동",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "건강 율동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P281",
    "category": "신체",
    "title": "공 굴리기 운동",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "공 굴리기 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P282",
    "category": "신체",
    "title": "어깨 스트레칭",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "의자",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "어깨 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P283",
    "category": "신체",
    "title": "무릎 펴기 운동",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "무릎 펴기 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P284",
    "category": "신체",
    "title": "손수건 던지기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "손수건 던지기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P285",
    "category": "신체",
    "title": "의자 일어나기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "의자 일어나기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P121",
    "category": "정서",
    "title": "만다라 색칠",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "스티커",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "만다라 색칠 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P122",
    "category": "정서",
    "title": "음악 감상",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "색연필",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "음악 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P123",
    "category": "정서",
    "title": "노래 부르기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "스티커",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "노래 부르기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P124",
    "category": "정서",
    "title": "감사 카드 만들기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "음악",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "감사 카드 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P125",
    "category": "정서",
    "title": "꽃 그림 색칠",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "음악",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "꽃 그림 색칠 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P126",
    "category": "정서",
    "title": "향기 맡기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "도화지",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "향기 맡기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P127",
    "category": "정서",
    "title": "감정 카드 고르기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "꽃재료",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "감정 카드 고르기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P128",
    "category": "정서",
    "title": "추억 노래 듣기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "도화지",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "추억 노래 듣기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P129",
    "category": "정서",
    "title": "시 낭송",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "색연필",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "시 낭송 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P130",
    "category": "정서",
    "title": "원예 활동",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "원예 활동 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P131",
    "category": "정서",
    "title": "종이꽃 만들기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "스티커",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "종이꽃 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P132",
    "category": "정서",
    "title": "사진 꾸미기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "음악",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "사진 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P133",
    "category": "정서",
    "title": "손 마사지",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "색연필",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "손 마사지 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P134",
    "category": "정서",
    "title": "명상 호흡",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "색연필",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "명상 호흡 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P135",
    "category": "정서",
    "title": "칭찬 나누기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "꽃재료",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "칭찬 나누기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P136",
    "category": "정서",
    "title": "나의 보물 이야기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "꽃재료",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "나의 보물 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P137",
    "category": "정서",
    "title": "행복했던 순간 나누기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "꽃재료",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "행복했던 순간 나누기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P138",
    "category": "정서",
    "title": "가족에게 편지쓰기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "가족에게 편지쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P139",
    "category": "정서",
    "title": "좋아하는 음식 그리기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 음식 그리기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P140",
    "category": "정서",
    "title": "계절 풍경 색칠",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "색연필",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "계절 풍경 색칠 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P141",
    "category": "정서",
    "title": "나만의 액자 만들기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "나만의 액자 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P142",
    "category": "정서",
    "title": "압화 카드",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "스티커",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "압화 카드 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P143",
    "category": "정서",
    "title": "아로마 손수건 만들기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "색연필",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "아로마 손수건 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P144",
    "category": "정서",
    "title": "차 마시며 대화",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "색연필",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "차 마시며 대화 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P145",
    "category": "정서",
    "title": "마음 날씨 표현",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "색연필",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "마음 날씨 표현 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P146",
    "category": "정서",
    "title": "웃음 치료",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "스티커",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "웃음 치료 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P147",
    "category": "정서",
    "title": "소원 나무 만들기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "꽃재료",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "소원 나무 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P148",
    "category": "정서",
    "title": "감정 색깔 표현",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "스티커",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "감정 색깔 표현 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P149",
    "category": "정서",
    "title": "자화상 꾸미기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "도화지",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "자화상 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P150",
    "category": "정서",
    "title": "나의 별명 이야기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "꽃재료",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "나의 별명 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P151",
    "category": "정서",
    "title": "어릴 적 놀이 회상",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "색연필",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "어릴 적 놀이 회상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P152",
    "category": "정서",
    "title": "고향 노래 듣기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "색연필",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "고향 노래 듣기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P153",
    "category": "정서",
    "title": "종교 음악 감상",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "꽃재료",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "종교 음악 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P154",
    "category": "정서",
    "title": "자연 소리 감상",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "도화지",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "자연 소리 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P155",
    "category": "정서",
    "title": "편안한 그림 감상",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "스티커",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "편안한 그림 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P156",
    "category": "정서",
    "title": "점토 만지기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "점토 만지기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P157",
    "category": "정서",
    "title": "색모래 그림",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "도화지",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "색모래 그림 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P158",
    "category": "정서",
    "title": "손뜨개 맛보기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "스티커",
      "음악"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "손뜨개 맛보기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P159",
    "category": "정서",
    "title": "비누 만들기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "비누 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P160",
    "category": "정서",
    "title": "캘리그라피 따라쓰기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "스티커",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "캘리그라피 따라쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P161",
    "category": "정서",
    "title": "따뜻한 말 카드",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "따뜻한 말 카드 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P162",
    "category": "정서",
    "title": "나에게 주는 상장",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "색연필",
      "꽃재료"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "나에게 주는 상장 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P163",
    "category": "정서",
    "title": "향주머니 만들기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "색연필",
      "도화지"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "향주머니 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P164",
    "category": "정서",
    "title": "감사 꽃다발",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "스티커",
      "색연필"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "감사 꽃다발 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P165",
    "category": "정서",
    "title": "추억 앨범 만들기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "음악",
      "스티커"
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감"
    ],
    "recommendedTime": "오후",
    "description": "추억 앨범 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P306",
    "category": "정서",
    "title": "추억 그림 그리기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "추억 그림 그리기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P307",
    "category": "정서",
    "title": "좋아하는 노래 부르기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 노래 부르기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P308",
    "category": "정서",
    "title": "희망 카드 쓰기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "희망 카드 쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P309",
    "category": "정서",
    "title": "꽃 향기 체험",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "꽃 향기 체험 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P310",
    "category": "정서",
    "title": "마음 표현 색칠",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "스티커",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "마음 표현 색칠 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P311",
    "category": "정서",
    "title": "편안한 음악 듣기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "편안한 음악 듣기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P312",
    "category": "정서",
    "title": "감사 일기 쓰기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "꽃재료",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감사 일기 쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P313",
    "category": "정서",
    "title": "행복 나누기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "행복 나누기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P314",
    "category": "정서",
    "title": "자연 풍경 감상",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "자연 풍경 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P315",
    "category": "정서",
    "title": "좋아하는 장소 이야기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "음악",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 장소 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P316",
    "category": "정서",
    "title": "감정 스티커 붙이기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감정 스티커 붙이기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P317",
    "category": "정서",
    "title": "추억 사진 보기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "색연필",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "추억 사진 보기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P318",
    "category": "정서",
    "title": "응원 메시지 만들기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "응원 메시지 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P319",
    "category": "정서",
    "title": "미소 연습",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "미소 연습 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P320",
    "category": "정서",
    "title": "명언 따라쓰기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "색연필",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "명언 따라쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P321",
    "category": "정서",
    "title": "손편지 꾸미기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "도화지",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "손편지 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P322",
    "category": "정서",
    "title": "좋아하는 색 표현",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 색 표현 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P323",
    "category": "정서",
    "title": "오늘 기분 이야기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "색연필",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "오늘 기분 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P324",
    "category": "정서",
    "title": "감정 표현 카드",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감정 표현 카드 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P325",
    "category": "정서",
    "title": "좋은 기억 회상",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋은 기억 회상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P326",
    "category": "정서",
    "title": "힐링 음악 시간",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "스티커",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "힐링 음악 시간 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P327",
    "category": "정서",
    "title": "캔들 꾸미기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "캔들 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P328",
    "category": "정서",
    "title": "감사 표현 놀이",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감사 표현 놀이 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P329",
    "category": "정서",
    "title": "나의 장점 적기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "나의 장점 적기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P330",
    "category": "정서",
    "title": "소망 그림 그리기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "색연필",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "소망 그림 그리기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P456",
    "category": "정서",
    "title": "추억 그림 그리기 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "추억 그림 그리기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P457",
    "category": "정서",
    "title": "좋아하는 노래 부르기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 노래 부르기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P458",
    "category": "정서",
    "title": "희망 카드 쓰기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "희망 카드 쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P459",
    "category": "정서",
    "title": "꽃 향기 체험 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "꽃 향기 체험 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P460",
    "category": "정서",
    "title": "마음 표현 색칠 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "스티커",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "마음 표현 색칠 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P461",
    "category": "정서",
    "title": "편안한 음악 듣기 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "도화지",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "편안한 음악 듣기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P462",
    "category": "정서",
    "title": "감사 일기 쓰기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "꽃재료",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감사 일기 쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P463",
    "category": "정서",
    "title": "행복 나누기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "꽃재료",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "행복 나누기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P464",
    "category": "정서",
    "title": "자연 풍경 감상 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "자연 풍경 감상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P465",
    "category": "정서",
    "title": "좋아하는 장소 이야기 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "도화지",
      "음악",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 장소 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P466",
    "category": "정서",
    "title": "감정 스티커 붙이기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "도화지",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감정 스티커 붙이기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P467",
    "category": "정서",
    "title": "추억 사진 보기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "색연필",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "추억 사진 보기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P468",
    "category": "정서",
    "title": "응원 메시지 만들기 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "응원 메시지 만들기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P469",
    "category": "정서",
    "title": "미소 연습 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "미소 연습 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P470",
    "category": "정서",
    "title": "명언 따라쓰기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "색연필",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "명언 따라쓰기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P471",
    "category": "정서",
    "title": "손편지 꾸미기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "도화지",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "손편지 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P472",
    "category": "정서",
    "title": "좋아하는 색 표현 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋아하는 색 표현 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P473",
    "category": "정서",
    "title": "오늘 기분 이야기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "꽃재료",
      "색연필",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "오늘 기분 이야기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P474",
    "category": "정서",
    "title": "감정 표현 카드 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감정 표현 카드 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P475",
    "category": "정서",
    "title": "좋은 기억 회상 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "좋은 기억 회상 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P476",
    "category": "정서",
    "title": "힐링 음악 시간 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "꽃재료",
      "스티커",
      "음악",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "힐링 음악 시간 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P477",
    "category": "정서",
    "title": "캔들 꾸미기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "색연필",
      "음악",
      "스티커",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "캔들 꾸미기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P478",
    "category": "정서",
    "title": "감사 표현 놀이 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "꽃재료",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "감사 표현 놀이 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P479",
    "category": "정서",
    "title": "나의 장점 적기 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "도화지",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "나의 장점 적기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P480",
    "category": "정서",
    "title": "소망 그림 그리기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "음악",
      "색연필",
    ],
    "tags": [
      "정서지원",
      "표현",
      "안정감",
    ],
    "recommendedTime": "오후",
    "description": "소망 그림 그리기 활동을 통해 안정감, 자기표현, 긍정 정서를 높이는 활동"
  },
  {
    "id": "P166",
    "category": "사회성",
    "title": "팀별 윷놀이",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "팀 표식",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "팀별 윷놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P167",
    "category": "사회성",
    "title": "빙고 게임",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "빙고 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P168",
    "category": "사회성",
    "title": "자기소개 카드",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "게임카드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "자기소개 카드 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P169",
    "category": "사회성",
    "title": "생일 축하 활동",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "팀 표식",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "생일 축하 활동 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P170",
    "category": "사회성",
    "title": "짝꿍 인터뷰",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "공",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 인터뷰 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P171",
    "category": "사회성",
    "title": "전통놀이",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "팀 표식",
      "게임카드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "전통놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P172",
    "category": "사회성",
    "title": "단체 노래방",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "팀 표식",
      "화이트보드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "단체 노래방 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P173",
    "category": "사회성",
    "title": "협동 그림 그리기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "팀 표식",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "협동 그림 그리기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P174",
    "category": "사회성",
    "title": "이야기 릴레이",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "이야기 릴레이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P175",
    "category": "사회성",
    "title": "OX 퀴즈",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "게임카드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "OX 퀴즈 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P176",
    "category": "사회성",
    "title": "박수 게임",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "스티커",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "박수 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P177",
    "category": "사회성",
    "title": "팀 대항 공놀이",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "화이트보드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "팀 대항 공놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P178",
    "category": "사회성",
    "title": "칭찬 릴레이",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "게임카드",
      "스티커",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "칭찬 릴레이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P179",
    "category": "사회성",
    "title": "역할극",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "역할극 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P180",
    "category": "사회성",
    "title": "명절 이야기 나누기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "공",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "명절 이야기 나누기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P181",
    "category": "사회성",
    "title": "짝꿍 풍선 전달",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "화이트보드",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 풍선 전달 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P182",
    "category": "사회성",
    "title": "협동 컵 쌓기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "게임카드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "협동 컵 쌓기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P183",
    "category": "사회성",
    "title": "우리 팀 이름 만들기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "스티커",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "우리 팀 이름 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P184",
    "category": "사회성",
    "title": "시장놀이",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "화이트보드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "시장놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P185",
    "category": "사회성",
    "title": "가족 역할극",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "화이트보드",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "가족 역할극 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P186",
    "category": "사회성",
    "title": "동네 소식 나누기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "화이트보드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "동네 소식 나누기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P187",
    "category": "사회성",
    "title": "노래 제목 맞히기 팀전",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "게임카드",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "노래 제목 맞히기 팀전 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P188",
    "category": "사회성",
    "title": "속담 퀴즈 팀전",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "스티커",
      "게임카드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "속담 퀴즈 팀전 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P189",
    "category": "사회성",
    "title": "스피드 그림 맞히기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "화이트보드",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "스피드 그림 맞히기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P190",
    "category": "사회성",
    "title": "손잡고 원 만들기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "화이트보드",
      "공",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "손잡고 원 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P191",
    "category": "사회성",
    "title": "자리 바꾸기 게임",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "자리 바꾸기 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P192",
    "category": "사회성",
    "title": "서로 장점 말하기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "서로 장점 말하기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P193",
    "category": "사회성",
    "title": "사진 보고 토론",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "스티커",
      "팀 표식",
      "공"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "사진 보고 토론 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P194",
    "category": "사회성",
    "title": "단체 퍼즐 맞추기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "화이트보드",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "단체 퍼즐 맞추기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P195",
    "category": "사회성",
    "title": "작품 발표회",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "공",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "작품 발표회 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P196",
    "category": "사회성",
    "title": "미니 운동회",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "게임카드",
      "공",
      "화이트보드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "미니 운동회 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P197",
    "category": "사회성",
    "title": "친구에게 카드 전달",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "공",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "친구에게 카드 전달 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P198",
    "category": "사회성",
    "title": "공동 생일판 꾸미기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "공",
      "스티커"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "공동 생일판 꾸미기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P199",
    "category": "사회성",
    "title": "짝꿍 산책",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "게임카드",
      "스티커",
      "팀 표식"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 산책 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P200",
    "category": "사회성",
    "title": "협동 종이탑 만들기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "게임카드"
    ],
    "tags": [
      "사회성",
      "협동",
      "대화"
    ],
    "recommendedTime": "오후",
    "description": "협동 종이탑 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P331",
    "category": "사회성",
    "title": "팀별 퀴즈 대결",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 퀴즈 대결 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P332",
    "category": "사회성",
    "title": "짝꿍 자기소개",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 자기소개 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P333",
    "category": "사회성",
    "title": "공동 그림 완성",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 그림 완성 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P334",
    "category": "사회성",
    "title": "친구 이름 기억하기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구 이름 기억하기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P335",
    "category": "사회성",
    "title": "단체 율동",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "스티커",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "단체 율동 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P336",
    "category": "사회성",
    "title": "협동 공 전달",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "화이트보드",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "협동 공 전달 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P337",
    "category": "사회성",
    "title": "웃음 릴레이",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "웃음 릴레이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P338",
    "category": "사회성",
    "title": "함께 이야기 만들기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "함께 이야기 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P339",
    "category": "사회성",
    "title": "역할 바꾸기 게임",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "공",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "역할 바꾸기 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P340",
    "category": "사회성",
    "title": "짝꿍 칭찬하기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 칭찬하기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P341",
    "category": "사회성",
    "title": "팀별 카드 맞추기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 카드 맞추기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P342",
    "category": "사회성",
    "title": "이름 부르기 게임",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "이름 부르기 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P343",
    "category": "사회성",
    "title": "협동 풍선 게임",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "게임카드",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "협동 풍선 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P344",
    "category": "사회성",
    "title": "사진 이야기 나누기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "사진 이야기 나누기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P345",
    "category": "사회성",
    "title": "집단 박수 게임",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "게임카드",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "집단 박수 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P346",
    "category": "사회성",
    "title": "공동 작품 만들기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 작품 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P347",
    "category": "사회성",
    "title": "짝꿍 인터뷰 놀이",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 인터뷰 놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P348",
    "category": "사회성",
    "title": "팀 응원 만들기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀 응원 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P349",
    "category": "사회성",
    "title": "친구 장점 발표",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "화이트보드",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구 장점 발표 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P350",
    "category": "사회성",
    "title": "릴레이 그림 그리기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "릴레이 그림 그리기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P351",
    "category": "사회성",
    "title": "함께 노래 부르기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "함께 노래 부르기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P352",
    "category": "사회성",
    "title": "미션 협동 게임",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "미션 협동 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P353",
    "category": "사회성",
    "title": "팀별 속담 맞히기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "게임카드",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 속담 맞히기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P354",
    "category": "사회성",
    "title": "공동 퍼즐 완성",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "스티커",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 퍼즐 완성 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P355",
    "category": "사회성",
    "title": "친구에게 편지쓰기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구에게 편지쓰기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P481",
    "category": "사회성",
    "title": "팀별 퀴즈 대결 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 퀴즈 대결 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P482",
    "category": "사회성",
    "title": "짝꿍 자기소개 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 자기소개 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P483",
    "category": "사회성",
    "title": "공동 그림 완성 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 그림 완성 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P484",
    "category": "사회성",
    "title": "친구 이름 기억하기 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구 이름 기억하기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P485",
    "category": "사회성",
    "title": "단체 율동 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "스티커",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "단체 율동 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P486",
    "category": "사회성",
    "title": "협동 공 전달 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "화이트보드",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "협동 공 전달 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P487",
    "category": "사회성",
    "title": "웃음 릴레이 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "팀 표식",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "웃음 릴레이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P488",
    "category": "사회성",
    "title": "함께 이야기 만들기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "함께 이야기 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P489",
    "category": "사회성",
    "title": "역할 바꾸기 게임 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "공",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "역할 바꾸기 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P490",
    "category": "사회성",
    "title": "짝꿍 칭찬하기 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 칭찬하기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P491",
    "category": "사회성",
    "title": "팀별 카드 맞추기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 카드 맞추기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P492",
    "category": "사회성",
    "title": "이름 부르기 게임 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "이름 부르기 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P493",
    "category": "사회성",
    "title": "협동 풍선 게임 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "게임카드",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "협동 풍선 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P494",
    "category": "사회성",
    "title": "사진 이야기 나누기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "사진 이야기 나누기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P495",
    "category": "사회성",
    "title": "집단 박수 게임 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "게임카드",
      "팀 표식",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "집단 박수 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P496",
    "category": "사회성",
    "title": "공동 작품 만들기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "팀 표식",
      "화이트보드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 작품 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P497",
    "category": "사회성",
    "title": "짝꿍 인터뷰 놀이 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "짝꿍 인터뷰 놀이 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P498",
    "category": "사회성",
    "title": "팀 응원 만들기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀 응원 만들기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P499",
    "category": "사회성",
    "title": "친구 장점 발표 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "화이트보드",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구 장점 발표 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P500",
    "category": "사회성",
    "title": "릴레이 그림 그리기 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "팀 표식",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "릴레이 그림 그리기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P501",
    "category": "사회성",
    "title": "함께 노래 부르기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "팀 표식",
      "스티커",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "함께 노래 부르기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P502",
    "category": "사회성",
    "title": "미션 협동 게임 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "화이트보드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "미션 협동 게임 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P503",
    "category": "사회성",
    "title": "팀별 속담 맞히기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "스티커",
      "게임카드",
      "공",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "팀별 속담 맞히기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P504",
    "category": "사회성",
    "title": "공동 퍼즐 완성 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "공",
      "스티커",
      "게임카드",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "공동 퍼즐 완성 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P505",
    "category": "사회성",
    "title": "친구에게 편지쓰기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "게임카드",
      "공",
      "스티커",
    ],
    "tags": [
      "사회성",
      "협동",
      "대화",
    ],
    "recommendedTime": "오후",
    "description": "친구에게 편지쓰기 활동을 통해 대화, 협동, 관계 형성을 돕는 집단 활동"
  },
  {
    "id": "P201",
    "category": "생활",
    "title": "손 씻기 교육",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "생활용품",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "손 씻기 교육 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P202",
    "category": "생활",
    "title": "양치 습관 활동",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "체크리스트",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "양치 습관 활동 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P203",
    "category": "생활",
    "title": "식사 예절",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "교육카드",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "식사 예절 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P204",
    "category": "생활",
    "title": "옷 개기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "옷 개기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P205",
    "category": "생활",
    "title": "물건 정리하기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "생활용품",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "물건 정리하기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P206",
    "category": "생활",
    "title": "약 복용 시간 알기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "교육카드",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "약 복용 시간 알기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P207",
    "category": "생활",
    "title": "낙상 예방 교육",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "체크리스트",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "낙상 예방 교육 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P208",
    "category": "생활",
    "title": "화재 대피 연습",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "화재 대피 연습 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P209",
    "category": "생활",
    "title": "계절별 건강관리",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "교육카드",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "계절별 건강관리 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P210",
    "category": "생활",
    "title": "위생 퀴즈",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "그림자료",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "위생 퀴즈 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P211",
    "category": "생활",
    "title": "날씨에 맞는 옷 고르기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "날씨에 맞는 옷 고르기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P212",
    "category": "생활",
    "title": "장보기 역할놀이",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "체크리스트",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "장보기 역할놀이 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P213",
    "category": "생활",
    "title": "분리수거 활동",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "그림자료",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "분리수거 활동 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P214",
    "category": "생활",
    "title": "개인 물품 찾기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "생활용품",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "개인 물품 찾기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P215",
    "category": "생활",
    "title": "물 마시기 습관",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "물 마시기 습관 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P216",
    "category": "생활",
    "title": "마스크 착용법",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "교육카드",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "마스크 착용법 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P217",
    "category": "생활",
    "title": "손톱 관리 이야기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "생활용품",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "손톱 관리 이야기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P218",
    "category": "생활",
    "title": "발 건강 관리",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "교육카드",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "발 건강 관리 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P219",
    "category": "생활",
    "title": "냉장고 음식 구분",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "그림자료",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "냉장고 음식 구분 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P220",
    "category": "생활",
    "title": "유통기한 확인",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "유통기한 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P221",
    "category": "생활",
    "title": "응급벨 사용법",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "그림자료",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "응급벨 사용법 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P222",
    "category": "생활",
    "title": "전화 걸기 연습",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "그림자료",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "전화 걸기 연습 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P223",
    "category": "생활",
    "title": "주소 말하기 연습",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "생활용품",
      "체크리스트"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "주소 말하기 연습 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P224",
    "category": "생활",
    "title": "현관 안전 확인",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "생활용품",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "현관 안전 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P225",
    "category": "생활",
    "title": "욕실 미끄럼 예방",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "교육카드",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "욕실 미끄럼 예방 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P226",
    "category": "생활",
    "title": "보행 보조기 사용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "체크리스트",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "보행 보조기 사용 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P227",
    "category": "생활",
    "title": "침상 정리",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "침상 정리 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P228",
    "category": "생활",
    "title": "수건 접기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "체크리스트",
      "그림자료"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "수건 접기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P229",
    "category": "생활",
    "title": "단추 끼우기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "단추 끼우기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P230",
    "category": "생활",
    "title": "지퍼 올리기",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "체크리스트",
      "교육카드"
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생"
    ],
    "recommendedTime": "상시",
    "description": "지퍼 올리기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P356",
    "category": "생활",
    "title": "올바른 손소독",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "올바른 손소독 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P357",
    "category": "생활",
    "title": "실내 안전 확인",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "생활용품",
      "체크리스트",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "실내 안전 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P358",
    "category": "생활",
    "title": "건강 음식 고르기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "건강 음식 고르기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P359",
    "category": "생활",
    "title": "하루 일정 확인",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "체크리스트",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "하루 일정 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P360",
    "category": "생활",
    "title": "냉장고 정리 놀이",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "냉장고 정리 놀이 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P361",
    "category": "생활",
    "title": "옷 입기 순서",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "옷 입기 순서 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P362",
    "category": "생활",
    "title": "전화번호 외우기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "전화번호 외우기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P363",
    "category": "생활",
    "title": "안전벨 사용법",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "안전벨 사용법 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P364",
    "category": "생활",
    "title": "실내화 정리",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "그림자료",
      "체크리스트",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "실내화 정리 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P365",
    "category": "생활",
    "title": "청소 도구 구분",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "체크리스트",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "청소 도구 구분 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P366",
    "category": "생활",
    "title": "날씨 확인 습관",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "체크리스트",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "날씨 확인 습관 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P367",
    "category": "생활",
    "title": "손수건 사용법",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "체크리스트",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "손수건 사용법 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P368",
    "category": "생활",
    "title": "약 봉투 읽기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "약 봉투 읽기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P369",
    "category": "생활",
    "title": "화장실 안전교육",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "교육카드",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "화장실 안전교육 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P370",
    "category": "생활",
    "title": "수분 섭취 체크",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "체크리스트",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "수분 섭취 체크 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P371",
    "category": "생활",
    "title": "생활 속 위험 찾기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "생활 속 위험 찾기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P372",
    "category": "생활",
    "title": "분실물 찾기",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "분실물 찾기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P373",
    "category": "생활",
    "title": "외출 준비하기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "생활용품",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "외출 준비하기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P374",
    "category": "생활",
    "title": "전자제품 안전",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "그림자료",
      "체크리스트",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "전자제품 안전 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P375",
    "category": "생활",
    "title": "식사 준비 순서",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "그림자료",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "식사 준비 순서 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P376",
    "category": "생활",
    "title": "응급 상황 대처",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "교육카드",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "응급 상황 대처 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P377",
    "category": "생활",
    "title": "교통안전 이야기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "그림자료",
      "생활용품",
      "체크리스트",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "교통안전 이야기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P378",
    "category": "생활",
    "title": "개인위생 점검",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "체크리스트",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "개인위생 점검 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P379",
    "category": "생활",
    "title": "건강 체조 습관",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "건강 체조 습관 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P380",
    "category": "생활",
    "title": "생활 규칙 맞히기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "그림자료",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "생활 규칙 맞히기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P506",
    "category": "생활",
    "title": "올바른 손소독 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "교육카드",
      "그림자료",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "올바른 손소독 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P507",
    "category": "생활",
    "title": "실내 안전 확인 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "교육카드",
      "생활용품",
      "체크리스트",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "실내 안전 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P508",
    "category": "생활",
    "title": "건강 음식 고르기 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "그림자료",
      "생활용품",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "건강 음식 고르기 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P509",
    "category": "생활",
    "title": "하루 일정 확인 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "생활용품",
      "체크리스트",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "하루 일정 확인 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P510",
    "category": "생활",
    "title": "냉장고 정리 놀이 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "체크리스트",
      "생활용품",
      "교육카드",
    ],
    "tags": [
      "일상생활",
      "안전",
      "위생",
    ],
    "recommendedTime": "상시",
    "description": "냉장고 정리 놀이 활동을 통해 일상생활 기능과 안전 습관을 유지하도록 돕는 활동"
  },
  {
    "id": "P431",
    "category": "신체",
    "title": "공 굴리기 운동 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "공 굴리기 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P432",
    "category": "신체",
    "title": "어깨 스트레칭 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "의자",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "어깨 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P433",
    "category": "신체",
    "title": "무릎 펴기 운동 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "무릎 펴기 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P434",
    "category": "신체",
    "title": "손수건 던지기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "손수건 던지기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P435",
    "category": "신체",
    "title": "의자 일어나기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "의자 일어나기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P436",
    "category": "신체",
    "title": "발바닥 자극 운동 응용",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "공",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "발바닥 자극 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P437",
    "category": "신체",
    "title": "풍선 릴레이 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "풍선 릴레이 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P438",
    "category": "신체",
    "title": "리본 체조 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "밴드",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "리본 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P439",
    "category": "신체",
    "title": "짝꿍 스트레칭 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "풍선",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "짝꿍 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P440",
    "category": "신체",
    "title": "리듬 걷기 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "풍선",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "리듬 걷기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P441",
    "category": "신체",
    "title": "손가락 악력 훈련 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "손가락 악력 훈련 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P442",
    "category": "신체",
    "title": "제자리 발구르기 응용",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "풍선",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "제자리 발구르기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P443",
    "category": "신체",
    "title": "가벼운 체조 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "가벼운 체조 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P444",
    "category": "신체",
    "title": "팔 들어올리기 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "팔 들어올리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P445",
    "category": "신체",
    "title": "앉아서 발차기 응용",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "공",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "앉아서 발차기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P446",
    "category": "신체",
    "title": "공 튕기기 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "수건",
      "풍선",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "공 튕기기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P447",
    "category": "신체",
    "title": "균형 쿠션 운동 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "수건",
      "밴드",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "균형 쿠션 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P448",
    "category": "신체",
    "title": "라인 넘기 게임 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "풍선",
      "의자",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "라인 넘기 게임 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P449",
    "category": "신체",
    "title": "풍선 전달 게임 응용",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "의자",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "풍선 전달 게임 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P450",
    "category": "신체",
    "title": "하체 유연성 운동 응용",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "하체 유연성 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P451",
    "category": "신체",
    "title": "발끝 터치 운동 응용",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "풍선",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "발끝 터치 운동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P452",
    "category": "신체",
    "title": "허리 스트레칭 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "풍선",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "허리 스트레칭 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P453",
    "category": "신체",
    "title": "짝꿍 공 패스 응용",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "밴드",
      "수건",
      "공",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "짝꿍 공 패스 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P454",
    "category": "신체",
    "title": "양팔 벌리기 응용",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "공",
      "수건",
      "의자",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "양팔 벌리기 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P455",
    "category": "신체",
    "title": "건강 율동 응용",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "의자",
      "공",
      "수건",
    ],
    "tags": [
      "운동",
      "근력",
      "균형",
    ],
    "recommendedTime": "상시",
    "description": "건강 율동 활동을 통해 관절 가동성, 균형감, 근력을 무리 없이 돕는 활동"
  },
  {
    "id": "P231",
    "category": "특별행사",
    "title": "생신잔치",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "카메라",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "생신잔치를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P232",
    "category": "특별행사",
    "title": "어버이날 행사",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "카메라",
      "현수막",
      "행사 소품"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "어버이날 행사를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P233",
    "category": "특별행사",
    "title": "명절 민속놀이",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "간식",
      "현수막",
      "음악"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "명절 민속놀이를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P234",
    "category": "특별행사",
    "title": "봄꽃 축제",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "간식",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "봄꽃 축제를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P235",
    "category": "특별행사",
    "title": "여름 수박 파티",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "음악",
      "행사 소품",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "여름 수박 파티를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P236",
    "category": "특별행사",
    "title": "가을 운동회",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "카메라",
      "행사 소품",
      "간식"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "가을 운동회를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P237",
    "category": "특별행사",
    "title": "크리스마스 카드 만들기",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "간식",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "크리스마스 카드 만들기를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P238",
    "category": "특별행사",
    "title": "송년회",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "현수막",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "송년회를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P239",
    "category": "특별행사",
    "title": "가족 초청 행사",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "카메라",
      "간식"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "가족 초청 행사를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P240",
    "category": "특별행사",
    "title": "작품 전시회",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "카메라",
      "간식"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "작품 전시회를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P241",
    "category": "특별행사",
    "title": "미니 장터",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "간식",
      "행사 소품",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "미니 장터를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P242",
    "category": "특별행사",
    "title": "공연 관람",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "간식",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "공연 관람를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P243",
    "category": "특별행사",
    "title": "요리 활동",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "간식",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "요리 활동를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P244",
    "category": "특별행사",
    "title": "사진 촬영일",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "음악",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "사진 촬영일를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P245",
    "category": "특별행사",
    "title": "계절 나들이",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "카메라",
      "음악",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "계절 나들이를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P246",
    "category": "특별행사",
    "title": "설날 세배 행사",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "행사 소품",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "설날 세배 행사를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P247",
    "category": "특별행사",
    "title": "추석 송편 빚기",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "간식",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "추석 송편 빚기를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P248",
    "category": "특별행사",
    "title": "복날 삼계탕 이야기",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "음악",
      "행사 소품"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "복날 삼계탕 이야기를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P249",
    "category": "특별행사",
    "title": "김장 체험",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "음악",
      "카메라"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "김장 체험를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P250",
    "category": "특별행사",
    "title": "센터 작은 음악회",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "간식",
      "음악",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "센터 작은 음악회를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P251",
    "category": "특별행사",
    "title": "어르신 장기자랑",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "행사 소품",
      "간식"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "어르신 장기자랑를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P252",
    "category": "특별행사",
    "title": "봄맞이 화분 심기",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "간식",
      "카메라",
      "음악"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "봄맞이 화분 심기를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P253",
    "category": "특별행사",
    "title": "여름 부채 만들기",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "좌식 가능",
    "materials": [
      "행사 소품",
      "카메라",
      "현수막"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "여름 부채 만들기를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P254",
    "category": "특별행사",
    "title": "가을 낙엽 액자",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "좌식 가능",
    "materials": [
      "현수막",
      "행사 소품",
      "간식"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "가을 낙엽 액자를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P255",
    "category": "특별행사",
    "title": "겨울 털실 공예",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "좌식 가능",
    "materials": [
      "간식",
      "행사 소품",
      "음악"
    ],
    "tags": [
      "행사",
      "계절",
      "참여"
    ],
    "recommendedTime": "오후",
    "description": "겨울 털실 공예를 통해 계절감, 소속감, 즐거운 추억 형성을 돕는 행사 활동"
  },
  {
    "id": "P381",
    "category": "특별행사",
    "title": "생일 축하 파티",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "장식품",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "생일 축하 파티 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P382",
    "category": "특별행사",
    "title": "명절 음식 체험",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "사진",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "명절 음식 체험 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P383",
    "category": "특별행사",
    "title": "추억 사진 전시",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "음악",
      "사진",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "추억 사진 전시 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P384",
    "category": "특별행사",
    "title": "가을 운동회",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "사진",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "가을 운동회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P385",
    "category": "특별행사",
    "title": "전통놀이 한마당",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "간식",
      "장식품",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "전통놀이 한마당 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P386",
    "category": "특별행사",
    "title": "노래자랑 대회",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "사진",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "노래자랑 대회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P387",
    "category": "특별행사",
    "title": "봄 소풍 이야기",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "음악",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "봄 소풍 이야기 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P388",
    "category": "특별행사",
    "title": "크리스마스 꾸미기",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "간식",
      "장식품",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "크리스마스 꾸미기 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P389",
    "category": "특별행사",
    "title": "어버이날 행사",
    "duration": 50,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "음악",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "어버이날 행사 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P390",
    "category": "특별행사",
    "title": "실버 장기자랑",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "음악",
      "장식품",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "실버 장기자랑 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P391",
    "category": "특별행사",
    "title": "추석 윷놀이",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "사진",
      "장식품",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "추석 윷놀이 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P392",
    "category": "특별행사",
    "title": "새해 소망 발표",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "장식품",
      "사진",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "새해 소망 발표 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P393",
    "category": "특별행사",
    "title": "여름 축제",
    "duration": 40,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "음악",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "여름 축제 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P394",
    "category": "특별행사",
    "title": "감사 발표회",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "사진",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "감사 발표회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P395",
    "category": "특별행사",
    "title": "전통 의상 체험",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "사진",
      "간식",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "전통 의상 체험 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P396",
    "category": "특별행사",
    "title": "계절 음악회",
    "duration": 50,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "음악",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "계절 음악회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P397",
    "category": "특별행사",
    "title": "가족 초청 행사",
    "duration": 30,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "사진",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "가족 초청 행사 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P398",
    "category": "특별행사",
    "title": "실버 미술 전시",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "사진",
      "간식",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "실버 미술 전시 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P399",
    "category": "특별행사",
    "title": "단체 레크리에이션",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "간식",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "단체 레크리에이션 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P400",
    "category": "특별행사",
    "title": "추억 영상 감상",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "장식품",
      "음악",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "추억 영상 감상 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P401",
    "category": "특별행사",
    "title": "가을 단풍 행사",
    "duration": 30,
    "difficulty": "쉬움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "사진",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "가을 단풍 행사 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P402",
    "category": "특별행사",
    "title": "봄꽃 감상회",
    "duration": 50,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "장식품",
      "음악",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "봄꽃 감상회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P403",
    "category": "특별행사",
    "title": "생신 잔치",
    "duration": 40,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "간식",
      "음악",
      "사진",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "생신 잔치 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P404",
    "category": "특별행사",
    "title": "연말 발표회",
    "duration": 30,
    "difficulty": "보통",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "사진",
      "장식품",
      "간식",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "연말 발표회 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
  {
    "id": "P405",
    "category": "특별행사",
    "title": "건강 캠페인",
    "duration": 40,
    "difficulty": "어려움",
    "mobility": "가벼운 이동 필요",
    "materials": [
      "음악",
      "장식품",
      "사진",
    ],
    "tags": [
      "행사",
      "참여",
      "추억",
    ],
    "recommendedTime": "오후",
    "description": "건강 캠페인 활동을 통해 즐거운 추억과 공동체 경험을 제공하는 행사 활동"
  },
];
