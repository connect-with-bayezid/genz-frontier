interface AdPlaceholderProps {
  size: "leaderboard" | "sidebar" | "mobile" | "native";
  className?: string;
}

/**
 * Google AdSense-friendly ad placeholder component
 * Replace the placeholder content with actual AdSense code when deploying
 * 
 * Standard ad sizes:
 * - leaderboard: 728x90px (desktop header/footer)
 * - sidebar: 300x250px (sidebar/content)
 * - mobile: 320x50px (mobile banner)
 * - native: Responsive native ads
 */
export default function AdPlaceholder({ size, className = "" }: AdPlaceholderProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "leaderboard":
        return "w-full max-w-[728px] h-[90px]";
      case "sidebar":
        return "w-full max-w-[300px] h-[250px]";
      case "mobile":
        return "w-full max-w-[320px] h-[50px]";
      case "native":
        return "w-full h-auto min-h-[100px]";
      default:
        return "w-full h-[250px]";
    }
  };

  return (
    <div
      className={`${getSizeClasses()} bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div className="text-gray-400 text-sm font-medium mb-1">
          Advertisement
        </div>
        <div className="text-gray-300 text-xs">
          {size === "leaderboard" && "728 × 90"}
          {size === "sidebar" && "300 × 250"}
          {size === "mobile" && "320 × 50"}
          {size === "native" && "Native Ad"}
        </div>
      </div>
    </div>
  );
}

/**
 * INTEGRATION GUIDE:
 * 
 * 1. Sign up for Google AdSense: https://www.google.com/adsense/
 * 2. Get your Publisher ID and ad unit codes
 * 3. Replace this component with actual AdSense code:
 * 
 * Example replacement for sidebar ads:
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
 *   crossOrigin="anonymous"></script>
 * <ins className="adsbygoogle"
 *   style={{display:"block"}}
 *   data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
 *   data-ad-slot="1234567890"
 *   data-ad-format="auto"
 *   data-full-width-responsive="true"></ins>
 * <script>
 *   (adsbygoogle = window.adsbygoogle || []).push({});
 * </script>
 * 
 * 4. For responsive ads, use data-full-width-responsive="true"
 * 5. Test ads in development mode before going live
 */
