import { Bell, Lock, Moon, Volume2, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import BottomNav from "@/components/layout/BottomNav";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Customize your safety preferences
          </p>
        </div>

        {/* Notifications */}
        <Card className="p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="sos-notif" className="flex-1">
                SOS Alerts
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Notify contacts when SOS is activated
                </p>
              </Label>
              <Switch id="sos-notif" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="location-notif" className="flex-1">
                Location Updates
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Share location with trusted contacts
                </p>
              </Label>
              <Switch id="location-notif" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Privacy & Security */}
        <Card className="p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Privacy & Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="app-lock" className="flex-1">
                App Lock
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Require PIN to open app
                </p>
              </Label>
              <Switch id="app-lock" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="panic-mode" className="flex-1">
                Panic Mode
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Hide app with black screen
                </p>
              </Label>
              <Switch id="panic-mode" />
            </div>
          </div>
        </Card>

        {/* Sound Settings */}
        <Card className="p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Sound Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="alarm-sound" className="flex-1">
                Alarm Sound
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Play loud siren when activated
                </p>
              </Label>
              <Switch id="alarm-sound" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="vibration" className="flex-1">
                Vibration
                <p className="text-xs text-muted-foreground font-normal mt-1">
                  Vibrate on SOS activation
                </p>
              </Label>
              <Switch id="vibration" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Appearance</h2>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="flex-1">
              Dark Mode
              <p className="text-xs text-muted-foreground font-normal mt-1">
                Use dark theme
              </p>
            </Label>
            <Switch id="dark-mode" />
          </div>
        </Card>

        {/* About */}
        <Card className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">About</h2>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>SafeGuard v1.0.0</p>
            <p>Your personal safety companion</p>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Settings;
