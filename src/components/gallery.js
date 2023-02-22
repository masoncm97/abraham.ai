import styles from '@/styles/Gallery.module.scss'
// import getCreations from '../pages/api/eden-handler'

let filter = {
    username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",  
    limit: 50,
}

export default function Gallery({json}) {
    console.log(json)
    return (
        <div>
            
        </div>
    )
}

export async function getServerSideProps() {
    // let eden = new EdenClient();
    // let result = await eden.getCreations(filter);
    // getCreations()
    // let json = JSON.stringify(result)
    return { props: { json } }
}
