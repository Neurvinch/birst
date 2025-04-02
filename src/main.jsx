import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createNetworkConfig , SuiClientProvider , WalletProvider } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui/client'
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import App from './App.jsx'
import '@mysten/dapp-kit/dist/index.css'


const {networkConfig} = createNetworkConfig({
  localnet : {url : getFullnodeUrl('localnet')},
   mainnet : {url : getFullnodeUrl('mainnet')}
});

const queryClient = new QueryClient();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork='localnet'>
        <WalletProvider>
        <App />      
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
    
  </StrictMode>,
)
