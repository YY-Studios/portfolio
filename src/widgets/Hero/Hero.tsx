const Hero = () => {
  return (
    <section className="min-h-screen bg-[#FDF8F3] flex items-center px-16">
      <div className="max-w-xl">
        <span className="inline-block text-xs tracking-widest text-[#E07B54] border border-[#E07B54] px-3 py-1 mb-8 uppercase">
          Frontend Developer
        </span>

        <h1 className="text-4xl font-bold text-[#2C1810] leading-snug mb-2">
          안녕하세요,
        </h1>
        <h1 className="text-4xl font-bold leading-snug mb-6">
          <span className="text-[#2C1810]">저는 </span>
          <span className="relative inline-block">
            <span className="relative z-10 text-[#2C1810]">송진경</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F5A623] opacity-40 z-0" />
          </span>
          <span className="text-[#2C1810]">입니다.</span>
        </h1>

        <p className="text-sm text-[#8B6F5E] leading-relaxed mb-10">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          화면의 처음과 끝을 아는 개발자입니다.
        </p>

        <div className="mb-10">
          <img
            src="https://skillicons.dev/icons?i=react,ts,nextjs,tailwind,git,figma"
            alt="skills"
            className="h-8"
          />
        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="bg-[#E07B54] text-white text-sm px-6 py-2.5 hover:bg-[#D4896A] transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="border border-[#2C1810] text-[#2C1810] text-sm px-6 py-2.5 hover:bg-[#2C1810] hover:text-white transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* 우측 장식 블록 */}
      <div className="hidden lg:flex ml-auto gap-3 items-end">
        <div className="w-20 h-64 bg-[#F0E6D8]" />
        <div className="w-20 h-64 bg-[#EDD5C0] mb-8" />
        <div className="w-20 h-64 bg-[#E8C9A8] mb-16" />
      </div>
    </section>
  );
};

export default Hero;
