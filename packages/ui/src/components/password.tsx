import { useId, useMemo, useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { useControllableValue } from "ahooks";
import { z } from "zod";

import { Input } from "@iconbox/ui/components/input";
import { cn } from "@iconbox/ui/lib/utils";

// 校验文案
const errorText = {
  minLength: "至少 8 个字符",
  minNumber: "至少 1 个数字",
  minLowercase: "至少 1 个小写字母",
  minUppercase: "至少 1 个大写字母",
};

const commonErrorText = "密码不符合要求";

const requirements = [
  { regex: /.{8,}/, text: errorText.minLength },
  { regex: /[0-9]/, text: errorText.minNumber },
  { regex: /[a-z]/, text: errorText.minLowercase },
  { regex: /[A-Z]/, text: errorText.minUppercase },
];

export const passwordSchema = z
  .string()
  .min(8, commonErrorText)
  .regex(/[0-9]/, commonErrorText)
  .regex(/[a-z]/, commonErrorText)
  .regex(/[A-Z]/, commonErrorText);

export const Password = ({ className, ...props }: React.ComponentProps<"input">) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [password = "", setPassword] = useControllableValue<string>(props);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass: string) => {
    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  return (
    <div>
      {/* Password input field with toggle visibility button */}
      <div className="relative">
        <Input
          {...props}
          className={cn("pe-9", className)}
          placeholder="Password"
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-describedby={`${id}-description`}
        />
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? <EyeOffIcon size={16} aria-hidden="true" /> : <EyeIcon size={16} aria-hidden="true" />}
        </button>
      </div>

      <div className={isFocused ? "block" : "hidden"}>
        {/* Password strength indicator */}
        <div
          className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
          role="progressbar"
          aria-valuenow={strengthScore}
          aria-valuemin={0}
          aria-valuemax={4}
          aria-label="Password strength"
        >
          <div
            className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
            style={{ width: `${(strengthScore / 4) * 100}%` }}
          />
        </div>

        {/* Password strength description */}
        <p id={`${id}-description`} className="text-foreground mb-2 text-sm font-medium">
          {getStrengthText(strengthScore)}. Must contain:
        </p>

        {/* Password requirements list */}
        <ul className="space-y-1.5" aria-label="Password requirements">
          {strength.map((req, index) => (
            <li key={index} className="flex items-center gap-2">
              {req.met ? (
                <CheckIcon size={16} className="text-emerald-500" aria-hidden="true" />
              ) : (
                <XIcon size={16} className="text-muted-foreground/80" aria-hidden="true" />
              )}
              <span className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}>
                {req.text}
                <span className="sr-only">{req.met ? " - Requirement met" : " - Requirement not met"}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
