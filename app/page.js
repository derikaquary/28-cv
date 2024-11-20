import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import Skill from "./_components/Skill";
import Projects from "./_components/Projects";



export default function Home() {
  

  return (
    <div className="flex flex-col items-center gap-10 sm:gap-[100px] px-3 sm:pb-5 pb-9">
      <Header />
      <FirstPage />
      <Skill />
      <Projects />
    </div>
  );
}
