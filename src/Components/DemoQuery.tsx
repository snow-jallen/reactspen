import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
const queryClient = new QueryClient()

// read up more on this
// https://tkdodo.eu/blog/react-query-and-type-script

export default function DemoQuery () {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return <div>'Loading...'</div>

  if (error) return <div>'An error has occurred: ' + error</div>
  
  return (
      <div>
        <p>This is inside the query.</p>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}