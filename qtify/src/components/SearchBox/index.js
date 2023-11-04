import { ReactComponent as SearchIcon } from './search-icon.svg'
export default () => {
    return <form style={{ display: 'flex', minWidth: '570px' }}>
        <input placeholder='Search an album of your choice' style={{ flex: 1, borderRadius: '8px 0px 0px 8px', padding: '8px' }} />
        <button style={{ width: '66px', width: '48px', displayL: "flex", justifyContent: 'center', 
        alignItems: 'center', borderRadius:'0px 8px 8px 0px', padding:'8px' }} >
            <SearchIcon width={20} height={20}  />
        </button>
    </form>
}