import type { ComponentType, SVGProps } from "react";
import {
  Boxes,
  Brain,
  CreditCard,
  Database,
  Search,
  Sparkles,
  Webhook,
  LineChart,
  Code2,
} from "lucide-react";
import {
  SiCss,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { PiChartBar, PiMicrosoftExcelLogo, PiMicrosoftWordLogo } from "react-icons/pi";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

/**
 * Brand color per technology. `undefined` means "use the current text color",
 * which is used for monochrome logos (Next.js, GitHub, Vercel…) so they stay
 * visible in both light and dark mode.
 */
export const techIconRegistry: Record<string, { icon: IconComponent; color?: string }> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#E8C400" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#08A8D0" },
  "Next.js": { icon: SiNextdotjs },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "#E000A0" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  "REST APIs": { icon: Webhook, color: "#0F766E" },
  WordPress: { icon: SiWordpress, color: "#21759B" },
  WooCommerce: { icon: SiWoocommerce, color: "#96588A" },
  "Payment Integration": { icon: CreditCard, color: "#0F766E" },
  SEO: { icon: Search, color: "#0F766E" },
  SQL: { icon: Database, color: "#0F766E" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Machine Learning": { icon: Brain, color: "#DB2777" },
  "Explainable AI (XAI)": { icon: Sparkles, color: "#7C3AED" },
  Pandas: { icon: SiPandas, color: "#6E59D9" },
  NumPy: { icon: SiNumpy, color: "#4DABCF" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Jupyter: { icon: SiJupyter, color: "#F37626" },
  Streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  Matplotlib: { icon: LineChart, color: "#11557C" },
  "Power BI": { icon: PiChartBar, color: "#E6B000" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Vercel: { icon: SiVercel },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  npm: { icon: SiNpm, color: "#CB3837" },
  "Microsoft Dynamics 365": { icon: Boxes, color: "#0B53CE" },
  Excel: { icon: PiMicrosoftExcelLogo, color: "#217346" },
  Word: { icon: PiMicrosoftWordLogo, color: "#2B579A" },
};

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 18, className }: TechIconProps) {
  const entry = techIconRegistry[name] ?? { icon: Code2 };
  const Icon = entry.icon;
  return (
    <Icon
      size={size}
      className={className}
      style={entry.color ? { color: entry.color } : undefined}
      aria-hidden="true"
      focusable="false"
    />
  );
}
