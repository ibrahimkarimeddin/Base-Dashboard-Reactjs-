import create from 'zustand';
import { TOKEN_KEY, TOKEN_KEY_SOCKET, USER_KEY } from '../../config/AppKey';
import { IAdmin } from '../../types/Admin';

interface LoginResponse {
    token:string  ,
    "admin": IAdmin,
    token_node:string
}

interface AuthStore {
  user: IAdmin | null |undefined;
  token:string |null | undefined;
  isAuthenticated: boolean;
  login: (userData: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthState = create<AuthStore>((set) => {
   
    const storedUser :any   = localStorage.getItem(USER_KEY)  ;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  const initialUser = (storedUser && storedUser !== 'undefined') ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    isAuthenticated: !!storedToken,
    token:storedToken,
    login: async (userData) => {
        console.log(userData);
        localStorage.setItem(TOKEN_KEY , userData.token)

        localStorage.setItem(USER_KEY , JSON.stringify(userData.admin))

        set((state)=>({user:userData.admin , isAuthenticated:true , token:userData.token}))
        
    },
    logout: async () => {
         
        localStorage.removeItem(TOKEN_KEY )
        localStorage.removeItem(TOKEN_KEY_SOCKET )

        localStorage.removeItem(USER_KEY )
        set((state)=>({user:null , isAuthenticated:false , token:null}))

        
    },
  };
});

export default useAuthState;
