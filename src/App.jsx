import { useSuiClientQuery } from '@mysten/dapp-kit';
 
function App() {
	const { data, isPending, error, refetch } = useSuiClientQuery('getOwnedObjects', {
		owner: '0x123',
	});
 
	if (isPending) {
		return <div>Loading...</div>;
	}
 
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App
