'use client';

import { useEffect, useMemo, useState } from 'react';
import { programs, Program, ProgramCategory } from '@/data/programs';
import { createWeekSchedule, DayName, WeekSchedule } from '@/lib/scheduler';
import WorksheetDownloadButton from "@/components/WorksheetDownloadButton";

const categories: ProgramCategory[] = ['인지', '신체', '정서', '사회성', '생활', '특별행사'];
const dayNames: DayName[] = ['월', '화', '수', '목', '금', '토', '일'];

type DragPayload = {
  day: DayName;
  period: number;
};

function buildSchedule(params: {
  selectedCategories: ProgramCategory[];
  classesPerDay: number;
  operatingDays: number;
  requireDailyPhysical: boolean;
}) {
  return createWeekSchedule({
    programs,
    selectedCategories: params.selectedCategories,
    classesPerDay: params.classesPerDay,
    operatingDays: params.operatingDays,
    requireDailyPhysical: params.requireDailyPhysical,
  });
}

export default function Home() {
  const [classesPerDay, setClassesPerDay] = useState(3);
  const [operatingDays, setOperatingDays] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState<ProgramCategory[]>(['인지', '신체', '정서', '사회성']);
  const [requireDailyPhysical, setRequireDailyPhysical] = useState(true);
  // Hydration mismatch 방지: Math.random()이 들어간 시간표 생성은
  // 서버 렌더링 중 실행하지 않고, 브라우저 마운트 후 useEffect에서만 실행합니다.
  const [schedule, setSchedule] = useState<Partial<WeekSchedule>>({});
  const [dragging, setDragging] = useState<DragPayload | null>(null);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('');

  const visibleDays = useMemo(() => dayNames.slice(0, operatingDays), [operatingDays]);
  const filteredPrograms = useMemo(() => programs.filter((program) => selectedCategories.includes(program.category)), [selectedCategories]);
  const filteredCount = filteredPrograms.length;

  useEffect(() => {
    setSelectedProgramTitle(filteredPrograms[0]?.title ?? '');
  }, [filteredPrograms]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setSchedule({} as WeekSchedule);
      return;
    }

    setSchedule(buildSchedule({ selectedCategories, classesPerDay, operatingDays, requireDailyPhysical }));
  }, [selectedCategories, classesPerDay, operatingDays, requireDailyPhysical]);

  const toggleCategory = (category: ProgramCategory) => {
    setSelectedCategories((prev) => prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]);
  };

  const swapCells = (from: DragPayload, to: DragPayload) => {
    setSchedule((prev) => {
      const next: Partial<WeekSchedule> = { ...prev };
      const fromRow = [...(next[from.day] ?? [])];
      const toRow = from.day === to.day ? fromRow : [...(next[to.day] ?? [])];
      const fromIndex = fromRow.findIndex((cell) => cell.period === from.period);
      const toIndex = toRow.findIndex((cell) => cell.period === to.period);
      if (fromIndex < 0 || toIndex < 0) return prev;

      const fromCell = fromRow[fromIndex];
      const toCell = toRow[toIndex];
      fromRow[fromIndex] = { ...toCell, period: from.period };
      toRow[toIndex] = { ...fromCell, period: to.period };
      next[from.day] = fromRow;
      next[to.day] = toRow;
      return next;
    });
  };

  const replaceCell = (day: DayName, period: number, program: Program) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: (prev[day] ?? []).map((cell) => cell.period === period ? { ...cell, program } : cell),
    }));
  };

  const addSelectedProgramToFirstCell = () => {
    const program = programs.find((item) => item.title === selectedProgramTitle);
    const firstDay = visibleDays[0];
    if (!program || !firstDay) return;
    replaceCell(firstDay, 1, program);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="page">
      <section className="hero noPrint">
        <p className="eyebrow">주간보호센터용</p>
        <h1>실버 프로그램 주간 수업표 생성기</h1>
        <p className="heroText">하루 수업 횟수와 프로그램 종류를 선택하면 255개 프로그램 데이터에서 일주일 시간표를 자동 추천하고, 드래그로 직접 편집한 뒤 PDF로 저장할 수 있습니다.</p>
      </section>

      <section className="panel controls noPrint">
        <div className="field">
          <label>운영 요일</label>
          <select value={operatingDays} onChange={(event) => setOperatingDays(Number(event.target.value))}>
            <option value={5}>월~금</option>
            <option value={6}>월~토</option>
            <option value={7}>월~일</option>
          </select>
        </div>
        <div className="field">
          <label>하루 수업 횟수</label>
          <select value={classesPerDay} onChange={(event) => setClassesPerDay(Number(event.target.value))}>
            {[1, 2, 3, 4, 5, 6].map((count) => <option key={count} value={count}>{count}회</option>)}
          </select>
        </div>
        <div className="field wide">
          <label>프로그램 종류</label>
          <div className="chips">
            {categories.map((category) => (
              <button key={category} type="button" className={selectedCategories.includes(category) ? 'chip active' : 'chip'} onClick={() => toggleCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <label className="check">
          <input type="checkbox" checked={requireDailyPhysical} onChange={(event) => setRequireDailyPhysical(event.target.checked)} />
          신체 프로그램을 하루 1회 우선 배치
        </label>
        <div className="clear"></div>
        
        <button className="secondary" type="button" onClick={handlePrint}>
          PDF로 저장/출력
        </button>
      </section>

      <section className="summary noPrint">
        <div><strong>{programs.length}</strong><span>전체 프로그램</span></div>
        <div><strong>{filteredCount}</strong><span>선택 조건 데이터</span></div>
        <div><strong>{operatingDays * classesPerDay}</strong><span>이번 주 배치 수업</span></div>
      </section>

      <section className="panel editor noPrint">
        <div>
          <h2>편집 방법</h2>
          <p>상단 조건을 바꾸면 시간표가 자동으로 다시 생성됩니다. 수업 카드를 다른 칸으로 끌어다 놓으면 두 수업의 위치가 서로 바뀌고, 카드 안의 선택창으로 특정 프로그램을 바로 교체할 수 있습니다.</p>
        </div>
        <div className="quickReplace">
          <label>월요일 1교시 빠른 교체</label>
          <select value={selectedProgramTitle} onChange={(event) => setSelectedProgramTitle(event.target.value)}>
            {filteredPrograms.map((program) => <option key={program.title} value={program.title}>{program.category} · {program.title}</option>)}
          </select>
          <button type="button" className="secondary" onClick={addSelectedProgramToFirstCell}>적용</button>
        </div>
      </section>

      <section className="printHeader printOnly">
        <h1>실버 프로그램 주간 수업표</h1>
        <p>운영 요일 {operatingDays}일 · 하루 {classesPerDay}회 · 총 {operatingDays * classesPerDay}개 수업</p>
      </section>

      <section className="tableWrap panel">
        <table>
          <thead>
            <tr>
              <th>요일</th>
              {Array.from({ length: classesPerDay }, (_, index) => <th key={index}>{index + 1}교시</th>)}
            </tr>
          </thead>
          <tbody>
            {visibleDays.map((day) => (
              <tr key={day}>
                <td className="day">{day}</td>
                {(schedule[day] ?? []).map(({ period, program }) => (
                  <td
                    key={`${day}-${period}`}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={() => {
                      if (dragging) swapCells(dragging, { day, period });
                      setDragging(null);
                    }}
                  >
                    <div
                      className={dragging?.day === day && dragging?.period === period ? 'programCard dragging' : 'programCard'}
                      draggable
                      onDragStart={() => setDragging({ day, period })}
                      onDragEnd={() => setDragging(null)}
                    >
                      <div className="cardTop">
                        <span className="category">{program.category}</span>
                        <span className="handle noPrint">↕ 이동</span>
                      </div>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <small>{program.duration}분 · {program.difficulty} · {program.mobility}</small>
                      <small>준비물: {program.materials.join(', ')}</small>
                      <select
                        className="replaceSelect noPrint"
                        value={program.title}
                        onChange={(event) => {
                          const nextProgram = programs.find((item) => item.title === event.target.value);
                          if (nextProgram) replaceCell(day, period, nextProgram);
                        }}
                      >
                        {filteredPrograms.map((item) => <option key={item.title} value={item.title}>{item.category} · {item.title}</option>)}
                      </select>
                      <WorksheetDownloadButton program={program} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
