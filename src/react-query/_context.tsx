
import React from "react";

import { ArchDAOCore } from "../core.js";

const ArchDAOContext = React.createContext<ArchDAOCore | null>(null);

export function ArchDAOProvider(props: { client: ArchDAOCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <ArchDAOContext.Provider value={props.client}>
      {props.children}
    </ArchDAOContext.Provider>
  );
}

export function useArchDAOContext(): ArchDAOCore { 
  const value = React.useContext(ArchDAOContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of ArchDAOCore and pass it to <ArchDAOProvider />.");
  }
  return value;
}
