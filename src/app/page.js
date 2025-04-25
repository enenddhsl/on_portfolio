'use client';

import React from "react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">👩‍💻 나의 포트폴리오</h1>
          <p className="text-lg text-gray-600">프론트엔드 개발자 · 사용자 경험을 설계하는 사람</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🛠 기술 스택</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Zustand / Recoil</li>
            <li>Vercel</li>
            <li>Figma</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">💼 프로젝트</h2>
          <div className="mb-6 border rounded-xl p-6 bg-gray-50 shadow">
            <h3 className="text-xl font-bold">무비플렉스 - 영화 검색 앱</h3>
            <p className="text-gray-700 mb-2">TMDB API를 활용해 영화 검색, 무한 스크롤, 반응형 UI 구현</p>
            <p className="text-sm text-gray-500">Next.js, Zustand, Tailwind, Vercel</p>
            <a
              href="https://yourproject.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              👉 프로젝트 보러가기
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">📫 연락처</h2>
          <p className="text-gray-700">이메일: your.email@example.com</p>
          <p className="text-gray-700">GitHub: https://github.com/yourid</p>
          <p className="text-gray-700">Blog: https://yourblog.dev</p>
        </section>
      </div>
    </main>
  );
}
