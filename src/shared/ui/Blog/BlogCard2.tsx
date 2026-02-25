import type { BlogItem } from "../../constans/blogData";

interface BlogCardProps {
  blog: BlogItem;
}

export default function BlogCard2({ blog }: BlogCardProps) {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${blog.title} 벨로그 글 보기`}
      className="group block h-full"
    >
      <article className="relative h-full min-h-[360px] overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100">
        {/* 배경 이미지 */}
        {blog.thumbnail ? (
          <img
            src={blog.thumbnail}
            alt={`${blog.title} 썸네일`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200" />
        )}

        {/* 오버레이 (가독성) */}
        <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />

        {/* 컨텐츠 */}
        <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
          {/* 상단 메타 */}
          <div className="flex items-center gap-2 text-white/80">
            <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" />
            <span className="text-sm tracking-tight">
              {blog.period ?? blog.date}
            </span>
          </div>

          {/* 제목/요약 */}
          <div className="mt-4">
            <h3 className="text-xl md:text-2xl leading-snug font-semibold text-white break-keep">
              {blog.title}
            </h3>

            {/* 요약은 너무 길면 감성 깨져서 1~2줄만 */}
            {blog.summary ? (
              <p className="mt-3 text-sm leading-6 text-white/75 break-keep line-clamp-2">
                {blog.summary}
              </p>
            ) : null}
          </div>

          {/* 하단 CTA */}
          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="text-sm text-white/85">자세히 보기</span>

            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
              <svg
                className="h-4 w-4 text-white"
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
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
