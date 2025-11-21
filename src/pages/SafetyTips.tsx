import { Shield, MapPin, Phone, Users, Lock, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BottomNav from "@/components/layout/BottomNav";

const SafetyTips = () => {
  const tips = [
    {
      icon: MapPin,
      title: "Stay Aware of Your Surroundings",
      content: "Always be conscious of your environment. Avoid distractions like using your phone excessively while walking. Make eye contact with people around you to show confidence.",
    },
    {
      icon: Phone,
      title: "Share Your Location",
      content: "Let trusted friends or family know where you're going and when you expect to arrive. Use location sharing features on your phone when traveling alone.",
    },
    {
      icon: Users,
      title: "Trust Your Instincts",
      content: "If a situation or person makes you uncomfortable, trust that feeling. It's okay to leave or change your route. Your safety is more important than being polite.",
    },
    {
      icon: Lock,
      title: "Secure Your Belongings",
      content: "Keep your bag closed and in front of you. Don't display expensive items openly. Be especially careful with your phone and wallet in crowded places.",
    },
    {
      icon: Shield,
      title: "Plan Your Route",
      content: "Choose well-lit, populated routes when walking at night. Avoid shortcuts through isolated areas. Know where safe spaces are along your route (24-hour stores, police stations).",
    },
    {
      icon: AlertTriangle,
      title: "In Case of Emergency",
      content: "If you feel threatened, make noise to attract attention. Run to a public place. Don't hesitate to use the SOS feature in this app to alert your contacts immediately.",
    },
  ];

  const emergencyNumbers = [
    { service: "Police", number: "911" },
    { service: "Women's Helpline", number: "1091" },
    { service: "Emergency Services", number: "112" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Safety Tips</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Stay informed and stay safe
          </p>
        </div>

        {/* Emergency Numbers */}
        <Card className="p-5 mb-6 bg-gradient-emergency">
          <h2 className="font-semibold text-emergency-foreground mb-3 flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Emergency Numbers
          </h2>
          <div className="space-y-2">
            {emergencyNumbers.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/20 rounded-lg p-3"
              >
                <span className="text-emergency-foreground font-medium">{item.service}</span>
                <a
                  href={`tel:${item.number}`}
                  className="text-emergency-foreground font-bold text-lg hover:underline"
                >
                  {item.number}
                </a>
              </div>
            ))}
          </div>
        </Card>

        {/* Safety Tips */}
        <h2 className="font-semibold mb-4">Essential Safety Tips</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {tips.map((tip, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-left">{tip.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {tip.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <BottomNav />
    </div>
  );
};

export default SafetyTips;
