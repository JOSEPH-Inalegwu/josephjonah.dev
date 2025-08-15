import { RiDownload2Line } from "react-icons/ri";

export default function DownloadCVButton() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1jttrq5hxm0kzkcUlOtbgNtJauihLUds3"
      download="Inalegwu-Joseph-Jonah-resume.pdf"
    >
      <button className="flex items-center gap-x-4 bg-cyan-400 hover:bg-cyan-500 px-6 py-4 md:px-12 md:py-6 text-black font-medium rounded-sm ease-in-out cursor-pointer transition-all duration-300">
        Download CV
        <RiDownload2Line className="animate-bounce" />
      </button>
    </a>
  );
}
