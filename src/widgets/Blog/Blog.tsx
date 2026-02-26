import { BLOGS } from "../../shared/constans/blogData";
import BlogCard from "../../shared/ui/Blog/BlogCard";
import Title from "@/shared/ui/Title/Title";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <Title title="블로그" />
      <div className="flex justify-end mb-6">
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
          <BlogCard key={blog.id} blog={blog} />
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
    </section>
  );
}
