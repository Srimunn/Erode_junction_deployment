import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, WhyChooseSection, LocationsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Junior Junction Play School, Erode" },
      {
        name: "description",
        content:
          "Meet Junior Junction — a safe, nurturing, activity-based preschool in Erode for little minds to learn, play and grow.",
      },
      { property: "og:title", content: "About — Junior Junction Play School" },
      {
        property: "og:description",
        content: "A nurturing preschool in Erode built around joyful, activity-based learning.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28">
      <AboutSection />
      <LocationsSection />
      <WhyChooseSection />
    </div>
  );
}