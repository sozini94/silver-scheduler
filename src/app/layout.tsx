import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '실버 프로그램 주간 수업표 생성기',
  description: '주간보호센터용 실버 프로그램 시간표 자동 생성기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
