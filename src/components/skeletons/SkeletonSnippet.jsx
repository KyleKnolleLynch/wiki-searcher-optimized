import Skeleton from './Skeleton'

const SkeletonSnippet = () => {
  return (
    <div className='search-item'>
      <Skeleton classes='title width-50' />
      <Skeleton classes='text width-100' />
      <Skeleton classes='text width-100' />
      <Skeleton classes='text width-100' />
    </div>
  )
}
export default SkeletonSnippet
