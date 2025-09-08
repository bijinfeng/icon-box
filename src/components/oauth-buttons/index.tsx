import { SiGithub, SiGoogle, SiWechat } from "@icons-pack/react-simple-icons";

import type { UserAuthProvider } from "@/types/user";
import { getApi } from "@/bknd";
import { OAuthButtonClient } from "./oauth-button-client";

const authProviderMap: Record<UserAuthProvider, { icon: React.ReactNode; name: string }> = {
  github: { icon: <SiGithub size={24} />, name: "GitHub" },
  google: { icon: <SiGoogle size={24} />, name: "Google" },
  wechat: { icon: <SiWechat size={24} />, name: "WeChat" },
};

export const OAuthButtons = async () => {
  const api = await getApi();
  const strategies = await api.auth.strategies();
  console.log(1212, strategies);

  return (
    <>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-card text-muted-foreground relative z-10 px-2">第三方账号</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {["github", "google"].map((provider) => (
          <OAuthButtonClient 
            key={provider} 
            provider={provider} 
            icon={authProviderMap[provider].icon} 
            name={authProviderMap[provider].name} 
          />
        ))}
      </div>
    </>
  );
};
