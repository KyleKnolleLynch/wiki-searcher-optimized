import useSWR from 'swr'
import Item from './Item'
import { getWikiSearchResults } from '../api/wikiApi'

const List = ({ searchTerm }) => {
    const {
        data,
    } = useSWR(
        searchTerm ? searchTerm : null,
        getWikiSearchResults, 
        { suspense: true }
    )

    const results = data?.query?.pages
    return results &&
        <ul>
            {Object.values(results).map(result => {
                return <Item key={result.pageid} result={result} />
            })}
        </ul>
}
export default List