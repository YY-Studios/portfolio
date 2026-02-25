import { BLOGS } from "../../shared/constans/blogData";
import BlogCard2 from "../../shared/ui/Blog/BlogCard2";

export default function Blog2() {
  return (
    <section id="blog" className="w-full">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-8 md:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Blog
            </h2>
          </div>

          {/* 전체 벨로그 링크 */}
          <a
            href="https://velog.io/@your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 hover:border-zinc-300 hover:text-zinc-800 transition-colors"
          >
            전체 글 보기
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* 카드 리스트 (스크린샷처럼 세로 스택) */}
        <div className="grid grid-cols-1 gap-6  lg:grid-cols-3">
          {BLOGS.slice(0, 3).map((blog) => (
            <BlogCard2 key={blog.id} blog={blog} />
          ))}
        </div>

        {/* 모바일 전체 링크 */}
        <div className="mt-6 md:hidden">
          <a
            href="https://velog.io/@your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600"
          >
            전체 글 보기
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
