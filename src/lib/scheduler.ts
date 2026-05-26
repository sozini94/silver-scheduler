import { Program, ProgramCategory } from '@/data/programs';

export type DayName = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export type ScheduleCell = { period: number; program: Program };
export type WeekSchedule = Record<DayName, ScheduleCell[]>;

const dayNames: DayName[] = ['월', '화', '수', '목', '금', '토', '일'];

function scoreProgram(program: Program, dayIndex: number, period: number, usedTitles: Set<string>, lastCategory?: ProgramCategory) {
  let score = 0;
  if (usedTitles.has(program.title)) score -= 100;
  if (lastCategory === program.category) score -= 20;
  if (period === 1 && program.category === '인지') score += 18;
  if (period === 1 && program.recommendedTime === '오전') score += 8;
  if (period > 1 && ['정서', '사회성', '특별행사'].includes(program.category)) score += 8;
  if (program.category === '신체' && period !== 1) score += 7;
  if (program.category === '특별행사' && dayIndex < 3) score -= 6;
  score += Math.random() * 6;
  return score;
}

export function createWeekSchedule(params: {
  programs: Program[];
  selectedCategories: ProgramCategory[];
  classesPerDay: number;
  operatingDays: number;
  requireDailyPhysical: boolean;
}) {
  const { programs, selectedCategories, classesPerDay, operatingDays, requireDailyPhysical } = params;
  const days = dayNames.slice(0, operatingDays);
  const selected = programs.filter((program) => selectedCategories.includes(program.category));
  const schedule = {} as WeekSchedule;
  const usedTitles = new Set<string>();
  const categoryCount = new Map<ProgramCategory, number>();
  selectedCategories.forEach((category) => categoryCount.set(category, 0));

  days.forEach((day, dayIndex) => {
    const cells: ScheduleCell[] = [];

    for (let period = 1; period <= classesPerDay; period += 1) {
      const lastCategory = cells.at(-1)?.program.category;
      const needsPhysical = requireDailyPhysical && selectedCategories.includes('신체') && period === classesPerDay && !cells.some((cell) => cell.program.category === '신체');
      const pool = needsPhysical ? selected.filter((program) => program.category === '신체') : selected;

      const sorted = [...pool].sort((a, b) => {
        const balanceA = -(categoryCount.get(a.category) ?? 0) * 9;
        const balanceB = -(categoryCount.get(b.category) ?? 0) * 9;
        return (scoreProgram(b, dayIndex, period, usedTitles, lastCategory) + balanceB) - (scoreProgram(a, dayIndex, period, usedTitles, lastCategory) + balanceA);
      });

      const picked = sorted[0];
      if (!picked) continue;
      cells.push({ period, program: picked });
      usedTitles.add(picked.title);
      categoryCount.set(picked.category, (categoryCount.get(picked.category) ?? 0) + 1);
    }

    schedule[day] = cells;
  });

  return schedule;
}
