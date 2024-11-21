import { createContext, useContext } from "react";

interface TrueText {
  context: string;
  name: string;
}

export const TestContext = createContext<TrueText | undefined>(undefined);
export const useTestContext = () => useContext(TestContext);

export const useTextContext = () => {
  const context = useTestContext();

  if (context === undefined) {
    throw new Error("useTestContext must be used within a TestProvider");
  }

  return context;
};
