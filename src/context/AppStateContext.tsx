import { createContext, useContext, useReducer } from 'react';

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

type Action =
  | { type: 'ADD_LIST'; payload: string }
  | { type: 'ADD_TASK'; payload: { text: string; taskId: string } };

const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      return { ...state };
    }
    case 'ADD_TASK': {
      return {
        ...state
      };
    }
    default: {
      return { ...state };
    }
  }
};

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
    }
  ]
};

function AppStateProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(AppStateContext);
};

export default AppStateProvider;
