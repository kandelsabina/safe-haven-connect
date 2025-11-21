import { useState } from "react";
import { AlertCircle, Phone, Volume2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import BottomNav from "@/components/layout/BottomNav";

const Home = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [isAlarmActive, setIsAlarmActive] = useState(false);

  const handleSOS = () => {
    setIsSOSActive(true);
    toast.error("SOS Activated! Alerting your trusted contacts...", {
      description: "Your location is being shared",
      duration: 5000,
    });
    
    // Simulate SOS activation
    setTimeout(() => {
      setIsSOSActive(false);
    }, 5000);
  };

  const handleFakeCall = () => {
    toast.success("Incoming call from Mom", {
      description: "Tap to answer",
      duration: 4000,
    });
  };

  const handleAlarm = () => {
    setIsAlarmActive(!isAlarmActive);
    if (!isAlarmActive) {
      toast.warning("Alarm Activated!", {
        description: "Loud siren is playing",
      });
    } else {
      toast.info("Alarm Deactivated");
    }
  };

  const quickMessages = [
    "I need help!",
    "Track my location",
    "Please call me",
  ];

  const handleQuickMessage = (message: string) => {
    toast.success("Message sent to trusted contacts", {
      description: message,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SafeGuard
          </h1>
          <p className="text-muted-foreground mt-1">Your safety companion</p>
        </div>

        {/* Emergency SOS Button */}
        <div className="mb-8">
          <button
            onClick={handleSOS}
            disabled={isSOSActive}
            className={`w-full aspect-square rounded-full bg-gradient-emergency shadow-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
              isSOSActive ? "animate-pulse-emergency scale-95" : "hover:scale-105 active:scale-95"
            }`}
          >
            <AlertCircle className="h-20 w-20 text-emergency-foreground" strokeWidth={2.5} />
            <div className="text-center">
              <p className="text-3xl font-bold text-emergency-foreground">SOS</p>
              <p className="text-sm text-emergency-foreground/90 mt-1">
                {isSOSActive ? "Alerting..." : "Tap for Emergency"}
              </p>
            </div>
          </button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Press and hold for 2 seconds to activate
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <Button
              onClick={handleFakeCall}
              variant="outline"
              className="w-full h-full flex flex-col items-center gap-3 py-6"
            >
              <Phone className="h-8 w-8 text-primary" />
              <div className="text-center">
                <p className="font-semibold text-sm">Fake Call</p>
                <p className="text-xs text-muted-foreground">Escape situation</p>
              </div>
            </Button>
          </Card>

          <Card className="p-4 hover:shadow-lg transition-shadow">
            <Button
              onClick={handleAlarm}
              variant="outline"
              className={`w-full h-full flex flex-col items-center gap-3 py-6 ${
                isAlarmActive ? "bg-emergency/10 border-emergency" : ""
              }`}
            >
              <Volume2 className={`h-8 w-8 ${isAlarmActive ? "text-emergency animate-shake" : "text-primary"}`} />
              <div className="text-center">
                <p className="font-semibold text-sm">Loud Alarm</p>
                <p className="text-xs text-muted-foreground">
                  {isAlarmActive ? "Playing..." : "Attract attention"}
                </p>
              </div>
            </Button>
          </Card>
        </div>

        {/* Quick Messages */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Quick Messages</h2>
          </div>
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <Button
                key={index}
                onClick={() => handleQuickMessage(message)}
                variant="secondary"
                className="w-full justify-start text-left"
              >
                {message}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
