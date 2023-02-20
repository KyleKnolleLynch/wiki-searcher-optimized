import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
//  Components
import SearchInput from './components/SearchInput'
import List from './components/List'
import ErrorFallback from './components/ErrorFallback'
import SkeletonSnippet from './components/skeletons/SkeletonSnippet'
import Header from './components/Header'
//  Hooks
import useDebounce from './hooks/useDebounce'

function App() {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue, 500)

  const content = (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSearchValue('')}
      resetKeys={[searchValue]}
    >
      <Suspense
        fallback={[...Array(10).keys()].map(i => (
          <SkeletonSnippet key={i} />
        ))}
      >
        <List searchTerm={debouncedSearchValue} />
      </Suspense>
    </ErrorBoundary>
  )

  return (
    <>
      <Header />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {content}
    </>
  )
}

export default App
