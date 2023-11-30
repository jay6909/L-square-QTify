import './Menu.css'

function MenuItem({ itemData }) {
    return <div style={{
        display: 'flex',
        height: '100px', width: '100%',
        margin:'0px 0px 10px 0px'

    }}>

        <div style={{ overflow: 'hidden', width: '95px', height: '100%', border: '5px solid #242424', borderRadius:'10px' }}>
            <img style={{ width: '100%' }} src={itemData.image}></img>
        </div>

        <div style={{
            flex: 1,
            padding:'10px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ffff', textAlign:'left',
        }}>
            <p>{itemData.title}</p>
            <p style={{ fontSize: '10px' }}>{itemData.description}</p>
        </div>
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            width: '120px', height: '100%', color: '#ffff'
        }}>
            {itemData.follows} follows
        </div>
    </div>

}
export default ({ data, searchText }) => {
    if (data.length < 1 && searchText.length < 1) return;
    else if (data.length < 1 && searchText.length > 1) return <div style={{
        position: 'absolute', border: '2px solid var(--css-primary)', borderRadius: '0px 0px 10px 10px',
        top: '60px', backgroundColor: 'black', padding: '20px', color:'white',width: '570px',
    }}>No results found</div>;
    else {



        return <div style={{
            position: 'absolute', border: '2px solid var(--css-primary)', borderRadius: '0px 0px 10px 10px',
            top: '60px',left:'-50px', backgroundColor: 'black', padding: '20px',

        }}>
            <div style={{
               
                width: '650px',
                maxHeight: '495px', overflowY: 'auto',
            }}>
                {data.map(item => <MenuItem itemData={item} />)}
            </div>
        </div>
    }

}