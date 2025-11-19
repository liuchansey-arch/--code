import svgPaths from "./imports/svg-u4645vn7jx";
import imgImage from "figma:asset/4978ace125f8926624364f4f2279e472ad028fb5.png";
import img from "figma:asset/bccc0af0deaa2706728423bd3abf98c80a6de9da.png";
import imgLogo from "figma:asset/ee37beafe18db8625f762890610c4b9ce4b6a77b.png";
import imgLogo1 from "figma:asset/e9b53253df369a5e773bda597d21ac35bad50e71.png";
import imgLogo2 from "figma:asset/b025eeb040b6632a12aab9d5ac5b052792444c3c.png";
import imgLogo3 from "figma:asset/c1b0173bfd0cca6119d2072b2f7a7575aae981ec.png";
import imgLogo4 from "figma:asset/890926d66c4b7bd94b7c7fea996dfa0c4d1f872b.png";
import imgLogo5 from "figma:asset/4a5cbebe51c403fec2c1b851275b9c86987436dd.png";
import imgLogo6 from "figma:asset/126cb041f12894a13ac6173db801e1acf2bac2da.png";
import imgLogo7 from "figma:asset/0dc3a856408cbbaaaae58c09162c77d9440c73d0.png";
import imgLogo8 from "figma:asset/7880e27c47a972594c4d2fa715f74c9baf10cb32.png";

function Container() {
  return (
    <div className="absolute bg-white bottom-0 left-0 overflow-clip right-[-8px] top-0" data-name="Container">
      <div className="absolute bg-[#22c3f1] blur-[32px] filter h-[106px] left-[120px] opacity-10 rounded-[100px] top-[calc(50%-359px)] translate-y-[-50%] w-[104px]" data-name="Rectangle" />
      <div className="absolute bg-[#516cf7] blur-[32px] filter h-[106px] left-0 opacity-10 rounded-[100px] top-[calc(50%-407px)] translate-y-[-50%] w-[66px]" data-name="Rectangle" />
      <div className="absolute bg-[#4ac06f] blur-[32px] filter h-[87px] left-[87px] opacity-10 rounded-[100px] top-[calc(50%-261.5px)] translate-y-[-50%] w-[78px]" data-name="Rectangle" />
      <div className="absolute bg-[#22c3f1] blur-[32px] filter h-[100px] left-[87px] opacity-10 rounded-[100px] top-[calc(50%+265px)] translate-y-[-50%] w-[117px]" data-name="Rectangle" />
      <div className="absolute bg-[#4ac06f] blur-[32px] filter h-[113px] left-[15px] opacity-10 rounded-[100px] top-[calc(50%+333.5px)] translate-y-[-50%] w-[78px]" data-name="Rectangle" />
      <div className="absolute bg-[#9251f7] blur-[32px] filter h-[113px] left-[134px] opacity-10 rounded-[100px] top-[calc(50%+403.5px)] translate-y-[-50%] w-[102px]" data-name="Rectangle" />
      <div className="absolute bg-[#516cf7] blur-[32px] filter h-[183px] left-[120px] opacity-10 rounded-[100px] top-[calc(50%-46.5px)] translate-y-[-50%] w-[84px]" data-name="Rectangle" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Outfit:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`刘  晨  希`}</p>
      </div>
      <p className="bg-clip-text bg-gradient-to-r font-['Outfit:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] from-[#a478e8] leading-[16px] relative shrink-0 text-[12px] to-[#516cf7] tracking-[0.12px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        交互与创意技术设计师
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[140px]" data-name="Header">
      <Text />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative rounded-[20px] shrink-0 size-[48px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
      </div>
      <Header />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[27px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Outfit:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow leading-[12px] min-h-px min-w-px relative shrink-0 text-[#47516b] text-[9px] tracking-[0.18px]">我拥有景观设计背景，目前在悉尼大学攻读交互设计研究生。我的空间思维与逻辑结构优势，使我能够在复杂问题中提出具有创造性的设计思路，并转化为清晰可用的交互体验。在项目中，我不仅注重研究驱动与用户测试，也善于探索新颖的交互形式与创新方法，同时兼顾可用性与落地性。未来，我希望在交互设计或设计研发岗位发挥所长，创造兼具创新性、包容性与社会价值的设计方案。</p>
    </div>
  );
}

function Quotes() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full" data-name="Quotes">
      <Frame />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[0.5px] overflow-clip relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border-[#e2e6ee] border-[7px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BasicMail() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="basic/mail">
          <path d={svgPaths.pdc84000} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]" data-name="Rectangle" />
      <BasicMail />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[8px] relative shrink-0 text-[#79819a] text-[6px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        邮箱
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#47516b] text-[7px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        chansey990602@outlook.com
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon />
      <Text1 />
    </div>
  );
}

function BasicLink() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/link_02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="basic/link_02">
          <path d={svgPaths.p397d8e00} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]" data-name="Rectangle" />
      <BasicLink />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[8px] relative shrink-0 text-[#79819a] text-[6px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        作品集链接
      </p>
      <a className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#47516b] text-[0px] w-full" href="https://www.figma.com/proto/m" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[9px] text-[7px] underline" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex={0}>
          https://www.figma.com/proto/m
        </p>
      </a>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon1 />
      <Text2 />
    </div>
  );
}

function BasicPhone() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="basic/phone">
          <path d={svgPaths.pdf96980} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]" data-name="Rectangle" />
      <BasicPhone />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[8px] relative shrink-0 text-[#79819a] text-[6px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        电话
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#47516b] text-[7px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        (+86) 17755466519
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon2 />
      <Text3 />
    </div>
  );
}

function BasicLocation() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="basic/location">
          <path d={svgPaths.p58d9480} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon3() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[16px]" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]" data-name="Rectangle" />
      <BasicLocation />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[8px] relative shrink-0 text-[#79819a] text-[6px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        地址
      </p>
      <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#47516b] text-[7px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        悉尼， 澳大利亚
      </p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon3 />
      <Text4 />
    </div>
  );
}

function Infos() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Infos">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-[16px] items-start left-0 p-[24px] top-0 w-[180px]" data-name="Container">
      <Header1 />
      <Quotes />
      <Divider />
      <Infos />
      <Divider />
    </div>
  );
}

function Aside() {
  return (
    <div className="h-[842px] relative shrink-0 w-[161px]" data-name="Aside">
      <Container />
      <Container1 />
    </div>
  );
}

function MiscDot04L() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="misc/dot_04_l">
          <path d={svgPaths.p2957d100} fill="var(--fill-0, #5531A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-[16px]" data-name="_Step icon base">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MiscDot04L />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Step icon wrap">
      <StepIconBase />
      <Divider1 />
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="overflow-clip relative rounded-[5px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 size-[20px]" data-name="Logo icon">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={img} />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-nowrap" data-name="Content">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[7px] tracking-[0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[9px] text-nowrap whitespace-pre">南京黄埔大酒店（四星级，隶属南京旅游集团）</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10px] text-nowrap whitespace-pre">管理培训生（人才培养计划）</p>
      </div>
    </div>
  );
}

function BasicLocation1() {
  return (
    <div className="relative shrink-0 size-[6px]" data-name="basic/location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="basic/location">
          <path d={svgPaths.p364dd000} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Location">
      <BasicLocation1 />
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#79819a] text-[5px] text-nowrap tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">江苏， 南京</p>
      </div>
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Title wrap">
      <Location />
    </div>
  );
}

function DateAndPlace() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-center relative self-stretch shrink-0" data-name="Date and place">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47516b] text-[6px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[8px] whitespace-pre">{` 2023 年 6 月- 2023 年 9 月`}</p>
      </div>
      <TitleWrap />
    </div>
  );
}

function Experience() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Experience">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <LogoIcon />
          <Content />
          <DateAndPlace />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Experience />
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Experience section">
      <div className="flex flex-col font-['Outfit:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[12px] text-center text-nowrap tracking-[0.12px]">
        <p className="leading-[16px] whitespace-pre">{`工作经历        Experience`}</p>
      </div>
      <List />
    </div>
  );
}

function Experience1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Experience">
      <StepIconWrap />
      <ExperienceSection />
    </div>
  );
}

function MiscDot04L1() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="misc/dot_04_l">
          <path d={svgPaths.p2957d100} fill="var(--fill-0, #5531A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-[16px]" data-name="_Step icon base">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MiscDot04L1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap1() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Step icon wrap">
      <StepIconBase1 />
      <Divider2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgLogo} />
      </div>
      <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[8px] relative shrink-0 text-[#2e2e48] text-[6px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        东北农业大学 -- 本科
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[9px] min-w-full relative shrink-0 text-[#2e2e48] text-[7px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        环境设计专业
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] text-center text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2017. 09 ——2021. 06
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Header2 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgLogo1} />
      </div>
      <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[8px] relative shrink-0 text-[#2e2e48] text-[6px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        悉尼大学 -- 硕士（在读）
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] min-w-full relative shrink-0 text-[#2e2e48] text-[7px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        交互设计专业
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] text-center text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2024. 07 ——
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <Header3 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Stack">
      <Card />
      <Card1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <Stack />
    </div>
  );
}

function EducationSection() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Education section">
      <div className="flex flex-col font-['Outfit:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[12px] text-center text-nowrap tracking-[0.12px]">
        <p className="leading-[16px] whitespace-pre">{`教育背景        Education`}</p>
      </div>
      <Content1 />
    </div>
  );
}

function LatestProjects() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Latest projects">
      <StepIconWrap1 />
      <EducationSection />
    </div>
  );
}

function MiscDot04L2() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="misc/dot_04_l">
          <path d={svgPaths.p2957d100} fill="var(--fill-0, #5531A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase2() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-[16px]" data-name="_Step icon base">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MiscDot04L2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap2() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Step icon wrap">
      <StepIconBase2 />
      <Divider3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Icon">
          <path d={svgPaths.p398f8500} fill="var(--fill-0, #516CF7)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon4() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[12px]" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <Icon />
    </div>
  );
}

function Header4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-0 px-0 relative rounded-tl-[4px] shrink-0 w-full" data-name="Header">
      <FeaturedIcon4 />
      <p className="font-['DM_Sans:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        设计技能（Design Skills）
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-tl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#516cf7] text-[7px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            Interaction Design — 流程规划、界面结构、可用性优化
          </p>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-tr-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['DM_Sans:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#516cf7] text-[7px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            UI Design — 视觉规范、组件系统、设计系统构建
          </p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Card">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start justify-center px-[2px] py-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">Usability Engineering — 用户测试、数据分析、评估方法</p>
          </div>
          <Divider4 />
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">Design Fiction — 情境构建、未来叙事、概念原型</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[40.667px] min-h-px min-w-px relative rounded-bl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-px h-[40.667px] items-center justify-center px-[2px] py-[17px] relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">{`Spatial & Environmental Design — 景观 / 建筑空间逻辑`}</p>
          </div>
          <Divider5 />
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">Experience Prototyping — 交互原型、沉浸式体验构建</p>
          </div>
          <Divider5 />
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-br-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pl-0 pr-[8px] py-[8px] relative size-full">
          <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#516cf7] text-[7px] text-center w-[51.333px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Information Architecture — 信息结构、内容组织
          </p>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
      <Card5 />
      <Card6 />
    </div>
  );
}

function Section() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Section">
      <Header4 />
      <Row4 />
      <Card4 />
      <Row5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[150px] items-start px-[12px] py-0 relative w-full">
          <Section />
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Skills section">
      <div className="flex flex-col font-['Outfit:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[12px] tracking-[0.12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">{`技能   Skills`}</p>
      </div>
      <Content2 />
    </div>
  );
}

function Skills() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Skills">
      <StepIconWrap2 />
      <SkillsSection />
    </div>
  );
}

function MiscDot04L3() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="misc/dot_04_l">
          <path d={svgPaths.p2957d100} fill="var(--fill-0, #5531A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-[16px]" data-name="_Step icon base">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MiscDot04L3 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap3() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Step icon wrap">
      <StepIconBase3 />
      <Divider6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Icon">
          <path d={svgPaths.p398f8500} fill="var(--fill-0, #516CF7)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon5() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[12px]" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <Icon1 />
    </div>
  );
}

function Header5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-0 px-0 relative rounded-tl-[4px] shrink-0 w-full" data-name="Header">
      <FeaturedIcon5 />
      <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`技术技能（Development & Technical Skills）`}</p>
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-tl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#516cf7] text-[7px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            Computer Organization Fundamentals — 数字逻辑、CPU 运作基础
          </p>
        </div>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-tr-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pl-0 pr-[8px] py-[8px] relative size-full">
          <p className="basis-0 font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow leading-[9px] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            Computer Networking Basics —网络结构理解、系统逻辑基础
          </p>
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
      <Card7 />
      <Card8 />
    </div>
  );
}

function Divider7() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card9() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Card">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start justify-center px-[2px] py-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">Processing / p5.js — Creative Coding</p>
          </div>
          <Divider7 />
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">Python — 数据处理、脚本开发、原型功能实现</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider8() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[0.5px]" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card10() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[40.667px] min-h-px min-w-px relative rounded-bl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-px h-[40.667px] items-center justify-center px-[2px] py-[17px] relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">HTML / CSS — 网页结构与样式实现</p>
          </div>
          <Divider8 />
          <div className="basis-0 flex flex-col font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#516cf7] text-[7px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[9px]">JavaScript — 交互逻辑、前端行为控制</p>
          </div>
          <Divider8 />
        </div>
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-br-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pl-0 pr-[8px] py-[8px] relative size-full">
          <p className="font-['DM_Sans:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#516cf7] text-[7px] text-center w-[51.333px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Git / GitHub（可选） — 版本控制 & 协作`}</p>
        </div>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
      <Card10 />
      <Card11 />
    </div>
  );
}

function Section1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Section">
      <Header5 />
      <Row6 />
      <Card9 />
      <Row7 />
    </div>
  );
}

function Content3() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[150px] items-start px-[12px] py-0 relative w-full">
          <Section1 />
        </div>
      </div>
    </div>
  );
}

function SkillsSection1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-[174px] items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Skills section">
      <Content3 />
    </div>
  );
}

function Skills1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Skills">
      <StepIconWrap3 />
      <SkillsSection1 />
    </div>
  );
}

function MiscDot04L4() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="misc/dot_04_l">
          <path d={svgPaths.p2957d100} fill="var(--fill-0, #5531A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase4() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-[16px]" data-name="_Step icon base">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <MiscDot04L4 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function StepIconWrap4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[24px] items-center relative shrink-0" data-name="Step icon wrap">
      <StepIconBase4 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Figma
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] text-center tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        界面设计｜交互原型
      </p>
    </div>
  );
}

function Card12() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[64px] min-h-px min-w-px relative rounded-tl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgLogo2} />
          </div>
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Photoshop
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        图片润色｜视觉合成
      </p>
    </div>
  );
}

function Card13() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
              <img alt="" className="absolute h-[406.21%] left-[-143.2%] max-w-none top-[-21.79%] w-[650.54%]" src={imgLogo3} />
            </div>
          </div>
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Illustrator
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        图标设计｜矢量绘图
      </p>
    </div>
  );
}

function Card14() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[24px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <img alt="" className="absolute h-[423.2%] left-[-403.44%] max-w-none top-[-21.36%] w-[659.33%]" src={imgLogo3} />
            </div>
          </div>
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blender
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        三维建模｜场景搭建
      </p>
    </div>
  );
}

function Card15() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[64px] min-h-px min-w-px relative rounded-tr-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[24px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <img alt="" className="absolute h-[114.4%] left-[-44.99%] max-w-none top-[7.72%] w-[191.72%]" src={imgLogo4} />
            </div>
          </div>
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Stack1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Stack">
      <Card12 />
      <Card13 />
      <Card14 />
      <Card15 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        3D MAX
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        建筑建模
        <br aria-hidden="true" />
        {` 场景表现`}
      </p>
    </div>
  );
}

function Card16() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[56px] min-h-px min-w-px relative rounded-bl-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[16px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <img alt="" className="absolute h-full left-[-5.56%] max-w-none top-[-0.12%] w-[104.57%]" src={imgLogo5} />
            </div>
          </div>
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        CAD
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        施工制图
        <br aria-hidden="true" />
        {` 平面绘图`}
      </p>
    </div>
  );
}

function Card17() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[16px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <img alt="" className="absolute h-[117.42%] left-[-10.66%] max-w-none top-[-7.58%] w-[127.02%]" src={imgLogo6} />
            </div>
          </div>
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        VS Code
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        代码编辑
        <br aria-hidden="true" />
        {` 项目管理`}
      </p>
    </div>
  );
}

function Card18() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[16px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5px] size-full" src={imgLogo7} />
          </div>
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Premiere
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        视频剪辑
        <br aria-hidden="true" />
        {` 内容编排`}
      </p>
    </div>
  );
}

function Card19() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[16px]" data-name="Logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
              <img alt="" className="absolute h-[409.49%] left-[-151.72%] max-w-none top-[-150.77%] w-[675.09%]" src={imgLogo3} />
            </div>
          </div>
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] relative shrink-0 text-[#2e2e48] text-[7px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notion
      </p>
      <p className="font-['DM_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#79819a] text-[5px] tracking-[0.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        笔记整理
        <br aria-hidden="true" />
        {` 项目规划`}
      </p>
    </div>
  );
}

function Card20() {
  return (
    <div className="basis-0 bg-[#f7f9fc] grow h-[56px] min-h-px min-w-px relative rounded-br-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center p-[8px] relative w-full">
          <div className="relative rounded-[5px] shrink-0 size-[16px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5px] size-full" src={imgLogo8} />
          </div>
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Stack">
      <Card16 />
      <Card17 />
      <Card18 />
      <Card19 />
      <Card20 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <Stack1 />
      <Stack2 />
    </div>
  );
}

function ToolsSection() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Tools section">
      <div className="flex flex-col font-['Outfit:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[12px] text-center text-nowrap tracking-[0.12px]">
        <p className="leading-[16px] whitespace-pre">{`工具    Tools`}</p>
      </div>
      <Content4 />
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Tools">
      <StepIconWrap4 />
      <ToolsSection />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Experience1 />
      <LatestProjects />
      <Skills />
      <Skills1 />
      <Tools />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex h-[842px] items-start pl-0 pr-[24px] py-[32px] relative shrink-0 w-[424px]" data-name="Container">
      <Content5 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center min-h-screen relative w-full" data-name="Resume light">
      <Aside />
      <Container2 />
    </div>
  );
}
