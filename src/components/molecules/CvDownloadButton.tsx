import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useStats } from "@/hooks/useStats";
import { FileText, Loader2 } from "lucide-react";

interface CvDownloadButtonProps {
  className?: string;
  cvUrl?: string;
}

const CvDownloadButton: React.FC<CvDownloadButtonProps> = ({
  className = "",
  cvUrl = "/cv-jonathan-medina.pdf", // Asegúrate de tener tu CV en public/
}) => {
  const { translations } = useLanguage();
  const { incrementCvDownload } = useStats();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return; // Prevent multiple clicks

    try {
      setIsDownloading(true);

      // Incrementar el contador de descargas
      await incrementCvDownload();

      // Crear un enlace temporal para descargar
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV-Jonathan-Medina.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Small delay to show the download state
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error("Error downloading CV:", error);
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl px-6 py-3 text-lg ${className}`}
    >
      <span className="mr-2">
        {isDownloading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <FileText className="w-5 h-5" />
        )}
      </span>
      {isDownloading
        ? translations.hero.downloading
        : translations.hero.downloadCV}
    </button>
  );
};

export default CvDownloadButton;
